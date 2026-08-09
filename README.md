<h1 align="center">박윤환 · YUNHWAN PARK</h1>

<p align="center">
  <b>정치 데이터 분석 → 철학 존재론 → Data-Centric AI/CV 개발자</b><br/>
  정치외교학에서 데이터로 구조를 읽는 법을 배웠고, 철학 존재론에서 세계를 분류하는 훈련을 했습니다.<br/>
  산업 현장의 비효율을 데이터로 풀고 싶어 AI로 전환 — 부산대 950h + SSAFY 14기 1,628h.<br/>
  모델을 네 종 바꿔도 오르지 않자, 막고 있는 것이 데이터라는 걸 실험으로 확인했습니다.
</p>

<p align="center">
  <a href="https://linkedin.com/in/%EC%9C%A4%ED%99%98-%EB%B0%95-013a29336"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white"/></a>
  <a href="mailto:flash_hwan@naver.com"><img src="https://img.shields.io/badge/Email-03C75A?style=flat-square&logo=naver&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/Busan,_KR-0A66C2?style=flat-square&logo=googlemaps&logoColor=white"/>
  <img src="https://img.shields.io/badge/Open_to_Work-2EA44F?style=flat-square"/>
</p>

---

### Impact

| Project | What I Did | Result |
|---------|-----------|--------|
| **SEMES P&ID Viewer** | YOLOv8-L·YOLOv8-x·YOLO11x·DETR 4종을 같은 조건으로 비교 → 병목이 모델이 아니라 데이터임을 확인하고 자원을 데이터 정합성으로 이동 | 인식률 0% → **mAP@50 0.867** (9클래스, P 95.2 / R 80.5) · 자동 라벨링 파이프라인 정확도 **96%** |
| **EyeSpeak** 🥇 | 실시간 시선 파이프라인(Ridge 캘리브레이션 + One-Euro 축별 분리 + EAR 트리거) & 모델 학습 트랙(L2CS-Net 재구현·ONNX 배포) | **30fps** 실시간, 해당 패키지·학습 스크립트 **단독 저작** |
| **관상네컷** 🏅 | 팀장 + React/TS 프론트엔드. pull 후 반복되던 장애를 자동 검사 스크립트 + git hook으로 차단 | 동일 장애 재발 **자동 검출**, 오류 5종 재현·해결 문서화 |
| **ragkit** (개인) | 볼트 RAG + 웹검색 CLI·MCP 서버. 검색 품질 회귀를 막는 평가 harness까지 | 인덱싱 **1.2 → 46 chunks/sec**, Recall@k·MRR + 부호검정 |

---

### Stack

**Lang** &ensp; ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=csharp&logoColor=white)

**Front** &ensp; ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vue](https://img.shields.io/badge/Vue-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

**Back** &ensp; ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![MCP](https://img.shields.io/badge/MCP_Server-000?style=flat-square&logo=anthropic&logoColor=white)

**AI** &ensp; ![YOLOv8](https://img.shields.io/badge/YOLOv8-111?style=flat-square&logo=yolo&logoColor=white) ![MediaPipe](https://img.shields.io/badge/MediaPipe-0097A7?style=flat-square&logo=google&logoColor=white) ![RAG+LLM](https://img.shields.io/badge/RAG+LLM-FF6F00?style=flat-square) ![ChromaDB](https://img.shields.io/badge/ChromaDB-2C3E50?style=flat-square) ![Ridge](https://img.shields.io/badge/Ridge-8E44AD?style=flat-square) ![One-Euro](https://img.shields.io/badge/One--Euro-2C3E50?style=flat-square)

**Infra** &ensp; ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white) ![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)

**Vibe Coding** &ensp; ![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=white) ![Codex](https://img.shields.io/badge/Codex_CLI-412991?style=flat-square&logo=openai&logoColor=white) ![Cursor](https://img.shields.io/badge/Cursor-000?style=flat-square)

---

### Projects

<details>
<summary><b>SEMES P&ID Viewer</b> — 반도체 도면 AI 인식 (SSAFY × SEMES 기업연계)</summary>

> YOLO 모델 학습과 심볼-텍스트 매칭, 그리고 WPF 전송 파이프라인을 맡았습니다. 외국 표준 도면으로 학습한 모델이 실제 현장 도면에서 인식률 0%였고, 20%대에서 오래 멈춰 있었습니다. 열여섯 가지를 시도해도 86%가 천장이었습니다. 모델 4종을 같은 조건으로 돌려도 서로 2%p 안이었고 train loss는 수렴하는데 mAP만 정체 — 병목은 모델이 아니라 데이터라고 판단했습니다. 합성 도면을 1천 장 넣자 86%가 24%로 떨어졌고, 12만 2천 장에서는 0%가 됐습니다. 양이 아니라 다양성 문제였습니다. 자원을 라벨 정합성으로 옮겨 자동 라벨링 파이프라인 정확도를 96%로 만들었고, 심볼-텍스트는 그리디 대신 헝가리안 알고리즘으로 전역 최적 배정했습니다. 후반에는 이미지 추론 대신 CAD 원본(DXF)에서 직접 추출하는 경로를 맡았습니다(INSERT 블록으로 정의된 심볼 한정). 최종 mAP@50 0.867, 도면 1장 정리가 워킹데이 10일에서 8분으로 줄었습니다. 2026.04~ · *사내 GitLab (non-public)*
</details>

<details>
<summary><b>EyeSpeak</b> 🥇 — 루게릭병 환자 시선 의사소통 (SSAFY 인공지능 영상 1등)</summary>

> 시선 추적을 두 갈래로 맡았습니다. 실시간 파이프라인은 MediaPipe 홍채 좌표를 Ridge 회귀 + 2차 다항식으로 화면에 매핑하고, One-Euro 필터를 축별로 분리해 떨림을 잡고 이상치를 억제했습니다. EAR로 깜빡임을 트리거하고, 최근 N프레임 과반수로 격자 선택을 안정화했습니다. 모델 학습 트랙은 L2CS-Net을 재구현(ResNet 백본 + 90-bin softmax 기대값)하고 64×64 눈 크롭용 경량 CNN을 설계했으며, AI Hub 안구 데이터 파이프라인·파인튜닝 CLI·평가 harness(각도 MAE·지연 측정)·ONNX 배포까지 만들었습니다. 30fps 유지. 2026.02~04 · 해당 패키지·스크립트는 커밋 저자 기준 단독 저작 · *사내 GitLab (non-public)*
</details>

<details>
<summary><b>관상네컷</b> 🏅 — AI 관상 분석 서비스 (SSAFY 우수상, 팀장)</summary>

> 팀장과 React/TS 프론트엔드를 맡았습니다. git pull 뒤 같은 오류가 반복되자 주의를 당부하는 대신 절차를 만들었습니다 — src 전체를 순회하며 머지 충돌 마커를 검출하고 실패 시 종료 코드로 막는 검사 스크립트, 그것을 자동 실행하는 post-merge hook, 그리고 팀이 반복해 겪은 오류 5종의 재현·해결 문서. LLM 응답 80초 → 40초 단축은 팀 백엔드 성과입니다. *사내 GitLab (non-public)*
</details>

<details>
<summary><b>슈퍼이끌림</b> 🏅 — 직업훈련 정보 시각화 (공공데이터 활용 공모전 장려상, 2024.08)</summary>

> React 프론트엔드. Naver Map API로 전국 교육기관을 지도에 시각화했습니다. 2024
</details>

<details>
<summary><b>개인 시스템</b> — 매일 돌아가는 자동화 (AI-Native 운영)</summary>

> **ragkit** — 개인 지식볼트 RAG + 웹검색 CLI이자 MCP 서버. ChromaDB를 EF-less로 두고 임베딩을 클라이언트에서 주입해 임베드 경로를 테스트 가능하게 만들었고, 임베더를 fastembed e5(CPU)에서 Ollama bge-m3(Metal)로 바꿔 인덱싱을 1.2 → 46 chunks/sec로 올렸습니다. 헤더 나이브 분할로 1만 4천 개까지 튀던 마이크로 청크는 섹션 패킹으로 약 1천 개로 줄였습니다. "느낌상 좋아진" 변경이 검색 품질을 조용히 깨는 걸 막으려고 평가 harness를 붙였습니다 — 로컬 LLM이 만든 골든셋, Recall@k·MRR을 청크/노트 층위로 분리, 부호검정으로 노이즈 걸러내기.
>
> **job-hunter** — 채용공고 20개 소스를 크롤·정규화·중복제거해 Notion으로 넣는 파이프라인. 매일 자동 실행 중이고 149 commits.
>
> **GDA 재현 실험** — 12.7B 모델 기술리포트의 Grouped Differential Attention을 3M 파라미터로 재구현하고, 파라미터를 맞춘 대조군(오차 0.02%)으로 6변형 × 2시드 = 12회 학습을 돌렸습니다. 주 가설은 재현되지 않았습니다(측정 차이 0.0014 < 시드 표준편차 0.0175) — 이 규모에서는 두 구조를 구분할 수 없다는 것이 결론이고, 그렇게 보고했습니다.
</details>

---

### Background

```
2015~2025  경북대 정치외교학(주) + 철학(부) — 선거·정책 데이터 양적 분석 + 존재론 개념 구조화
           산업 현장의 비효율을 데이터로 풀려 IT/AI 전환 결심
2024       부산대 AI 빅데이터 풀스택 과정 950h
2025~2026  SSAFY 14기 부울경 1,628h (풀스택 + AI Foundation Model)
```
