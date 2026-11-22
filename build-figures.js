// README 그림을 만든다. 색은 DESIGN.md 머리말에서 읽는다.
//   node build-figures.js  →  assets/pipeline-{light,dark}.svg, assets/results-{light,dark}.svg
const fs = require("fs");

const front = fs.readFileSync(__dirname + "/DESIGN.md", "utf8").split("---")[1];
const colors = Object.fromEntries([...front.matchAll(/^  ([a-z-]+): "(#[0-9A-Fa-f]{6})"$/gm)].map((m) => [m[1], m[2]]));
const pick = (prefix) =>
  Object.fromEntries(["primary", "before", "ink", "muted", "line", "surface", "well"].map((k) => {
    const v = colors[prefix + k];
    if (!v) throw new Error(`DESIGN.md에 ${prefix + k} 색이 없다`);
    return [k, v];
  }));

const FONT = "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif";
const W = 830;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const open = (h, label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" width="${W}" height="${h}" role="img" aria-label="${esc(label)}" font-family="${FONT}" style="font-variant-numeric: tabular-nums">`;

// 팀 프로젝트 처리 순서
const STEPS = ["심볼 검출", "텍스트 짝짓기", "배관 연결", "CAD 원본 추출"];
const PIPE_CAPTION = "운영 기본 엔진으로 채택, 검출 모델 mAP50 0.986, 재현율 0.988(내부 검증셋)";
function pipeline(c) {
  const H = 172, PAD = 16, TOP = 44, BH = 64, GAP = 40;
  const bw = (W - PAD * 2 - GAP * (STEPS.length - 1)) / STEPS.length;
  const CYCLE = 12; // 초. 단계마다 2초, 4단계에서 6초 머문다
  const p = [open(H, `공정 도면 심볼 인식: ${STEPS.join(", ")} 순서로 처리. ${PIPE_CAPTION}.`)];
  p.push(`<style>
.s rect{stroke:${c.line}} .s text{fill:${c.ink}}
.s4 rect{stroke:${c.primary}} .s4 text{fill:${c.primary}}
@media (prefers-reduced-motion:no-preference){
.s1 rect,.s2 rect,.s3 rect,.s4 rect{animation:${CYCLE}s steps(1) infinite}
.s1 text,.s2 text,.s3 text,.s4 text{animation:${CYCLE}s steps(1) infinite}
.s1 rect{animation-name:b1}.s1 text{animation-name:t1}
.s2 rect{animation-name:b2}.s2 text{animation-name:t2}
.s3 rect{animation-name:b3}.s3 text{animation-name:t3}
.s4 rect{animation-name:b4}.s4 text{animation-name:t4}
@keyframes b1{0%{stroke:${c.primary}}16.66%{stroke:${c.line}}}
@keyframes t1{0%{fill:${c.primary}}16.66%{fill:${c.ink}}}
@keyframes b2{0%{stroke:${c.line}}16.66%{stroke:${c.primary}}33.33%{stroke:${c.line}}}
@keyframes t2{0%{fill:${c.ink}}16.66%{fill:${c.primary}}33.33%{fill:${c.ink}}}
@keyframes b3{0%{stroke:${c.line}}33.33%{stroke:${c.primary}}50%{stroke:${c.line}}}
@keyframes t3{0%{fill:${c.ink}}33.33%{fill:${c.primary}}50%{fill:${c.ink}}}
@keyframes b4{0%{stroke:${c.line}}50%{stroke:${c.primary}}}
@keyframes t4{0%{fill:${c.ink}}50%{fill:${c.primary}}}
}
</style>`);
  p.push(`<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="4" fill="${c.well}" stroke="${c.line}"/>`);
  p.push(`<text x="${PAD}" y="28" font-size="16" font-weight="700" fill="${c.ink}">공정 도면 심볼 인식</text>`);
  STEPS.forEach((name, i) => {
    const x = PAD + i * (bw + GAP);
    p.push(`<g class="s s${i + 1}"><rect x="${x + 0.5}" y="${TOP + 0.5}" width="${bw - 1}" height="${BH - 1}" rx="4" fill="${c.surface}"/>` +
      `<text x="${x + bw / 2}" y="${TOP + BH / 2 + 5}" text-anchor="middle" font-size="15" font-weight="600">${name}</text></g>`);
    if (i < STEPS.length - 1) {
      const ax = x + bw + 10, ay = TOP + BH / 2;
      p.push(`<path d="M${ax} ${ay}H${ax + GAP - 20}M${ax + GAP - 25} ${ay - 5}L${ax + GAP - 20} ${ay}L${ax + GAP - 25} ${ay + 5}" fill="none" stroke="${c.muted}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  });
  p.push(`<line x1="${PAD}" y1="${TOP + BH + 20.5}" x2="${W - PAD}" y2="${TOP + BH + 20.5}" stroke="${c.line}"/>`);
  p.push(`<text x="${PAD}" y="${H - 22}" font-size="13" fill="${c.muted}">${PIPE_CAPTION}</text>`);
  p.push("</svg>");
  return p.join("\n") + "\n";
}

// 같은 조건에서 바꾸기 전과 후. full=막대 끝값(이 값이면 막대 최대 길이)
const GROUPS = [
  { title: "노트 검색", note: "같은 119개 질문, 노트 단위 R@10", before: 78.2, after: 88.2, full: 100, fmt: (v) => v.toFixed(1) + "%" },
  { title: "개인정보 가림", note: "같은 22개 사례, 실제 가려진 결과 기준 재현율", before: 0.875, after: 1.0, full: 1, fmt: (v) => v.toFixed(3) },
  { title: "관상네컷", note: "같은 사진 기준 응답 시간, 짧을수록 좋음", before: 80, after: 40, full: 80, fmt: (v) => v + "초" },
];
function results(c) {
  const PAD = 16, STRIDE = 116, LABEL = 32, BAR_MAX = 600, BH = 12;
  const H = PAD + (GROUPS.length - 1) * STRIDE + 86 + PAD;
  const alt = "같은 조건에서 바꾸기 전과 후. " + GROUPS.map((g) => `${g.title} ${g.fmt(g.before)}에서 ${g.fmt(g.after)}`).join(", ") + ".";
  const p = [open(H, alt)];
  p.push(`<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="4" fill="${c.well}" stroke="${c.line}"/>`);
  GROUPS.forEach((g, i) => {
    const y0 = PAD + i * STRIDE;
    if (i > 0) p.push(`<line x1="${PAD}" y1="${y0 - 17.5}" x2="${W - PAD}" y2="${y0 - 17.5}" stroke="${c.line}"/>`);
    p.push(`<text x="${PAD}" y="${y0 + 16}" font-size="16" font-weight="700" fill="${c.ink}">${g.title}</text>`);
    p.push(`<text x="${PAD}" y="${y0 + 36}" font-size="13" fill="${c.muted}">${g.note}</text>`);
    [["전", g.before, c.before, c.muted, 400], ["후", g.after, c.primary, c.primary, 700]].forEach(([lab, v, bar, txt, wt], j) => {
      const by = y0 + 52 + j * 22, w = (v / g.full) * BAR_MAX, bx = PAD + LABEL;
      p.push(`<text x="${PAD}" y="${by + BH - 1}" font-size="13" fill="${c.muted}">${lab}</text>`);
      p.push(`<rect x="${bx}" y="${by}" width="${w.toFixed(1)}" height="${BH}" rx="2" fill="${bar}"/>`);
      p.push(`<text x="${(bx + w + 10).toFixed(1)}" y="${by + BH - 1}" font-size="15" font-weight="${wt}" fill="${txt}">${g.fmt(v)}</text>`);
    });
  });
  p.push("</svg>");
  return p.join("\n") + "\n";
}

fs.mkdirSync(__dirname + "/assets", { recursive: true });
for (const [mode, prefix] of [["light", ""], ["dark", "dark-"]]) {
  const c = pick(prefix);
  fs.writeFileSync(`${__dirname}/assets/pipeline-${mode}.svg`, pipeline(c));
  fs.writeFileSync(`${__dirname}/assets/results-${mode}.svg`, results(c));
}
console.log("ok");
