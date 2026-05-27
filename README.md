<h1 align="center">박윤환 · YUNHWAN PARK</h1>

<p align="center">
  <b>PLC 현장 3년 → AI 전환 | 제조 AI 컨설턴트 지망</b><br/>
  공장 현장에서 PLC를 만지다가 AI를 들고 돌아왔습니다.<br/>
  모델보다 분류 체계를 먼저 고칩니다. 현장 데이터를 구조화하면 AI가 작동합니다.
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
| **SEMES P&ID Viewer** | 도면 심볼 분류 체계 재정의 + 1,200장 재라벨링 (Data-Centric) | YOLOv8l mAP **64% → 87%** (+23%p) |
| **EyeSpeak** 🥇 | One-Euro 필터 축별 분리, 48개 조합 정량 검증 | 시선 오차 **148 → 62px**, 30fps 유지 |
| **관상네컷** 🥉 | RAG 파이프라인 비동기 병렬화 + 프롬프트 3단계 분리 | LLM 응답 **80초 → 40초** (PM/팀장) |
| **공공데이터 공모전** 🏅 | React + Naver Map API 프론트엔드 | **18,548개** 교육기관 지도 시각화 |
| **PLC 자동화** | 경남 양산 제조 현장 운용 보조 | **~3년** 도메인 감각 |

---

### Stack

**Lang** &ensp; ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=csharp&logoColor=white)

**Front** &ensp; ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vue](https://img.shields.io/badge/Vue-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

**Back** &ensp; ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

**AI** &ensp; ![YOLOv8](https://img.shields.io/badge/YOLOv8-111?style=flat-square&logo=yolo&logoColor=white) ![MediaPipe](https://img.shields.io/badge/MediaPipe-0097A7?style=flat-square&logo=google&logoColor=white) ![RAG+LLM](https://img.shields.io/badge/RAG+LLM-FF6F00?style=flat-square) ![Ridge](https://img.shields.io/badge/Ridge-8E44AD?style=flat-square) ![One-Euro](https://img.shields.io/badge/One--Euro-2C3E50?style=flat-square)

**Infra** &ensp; ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white) ![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)

**Vibe Coding** &ensp; ![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=white) ![Codex](https://img.shields.io/badge/Codex_CLI-412991?style=flat-square&logo=openai&logoColor=white) ![Cursor](https://img.shields.io/badge/Cursor-000?style=flat-square)

---

### Projects

<details>
<summary><b>SEMES P&ID Viewer</b> — 반도체 도면 AI 인식 (SSAFY × SEMES 기업연계)</summary>

> AI 파트 리드. YOLOv8l + C# WPF. ISA-5.1과 사내 명칭 교차 대조 → 12종 심볼 재정의, 1,200장 재라벨링. 모델이 아니라 분류 체계를 고쳐서 23%p 올림. 2026.04~05 · *사내 GitLab (non-public)*
</details>

<details>
<summary><b>EyeSpeak</b> 🥇 — 루게릭병 환자 시선 의사소통 (SSAFY 1등, 삼성전자 주최)</summary>

> AI 시선 추적 모듈. MediaPipe 478 랜드마크 → Ridge 회귀 + One-Euro 필터 축별 분리. 48개 파라미터 조합을 매트릭스로 정량 검증해서 팀 합의 이끔. 오차 62px, 30fps. 2026.02~03 · 1,134 commits · *사내 GitLab (non-public)*
</details>

<details>
<summary><b>관상네컷</b> 🥉 — AI 관상 분석 서비스 (SSAFY 우수상, PM/팀장)</summary>

> PM + 프론트엔드 + RAG-LLM 파이프라인 설계. 프로파일링으로 임베딩 검색이 전체 지연의 70% 차지 특정 → 비동기 병렬 + 프롬프트 3단계 분리. 80초 → 40초. 2026.01~02 · *사내 GitLab (non-public)*
</details>

<details>
<summary><b>슈퍼이끌림</b> 🏅 — HRD-NET 직업훈련 추천 (고용노동부 장려상)</summary>

> React 프론트엔드. Naver Map API + GeoCoder로 18,548개 교육기관 지도 시각화. API 명세서 백엔드와 공동 작성. 2024.06~08
</details>

---

### Background

```
2021~2024  경남 양산 PLC 자동화 현장 보조 (~3년) → "비효율은 데이터로 풀어야 한다"
2024       부산대 AI 빅데이터 풀스택 과정 950h
2025~2026  SSAFY 14기 부울경 (풀스택 + AI Foundation Model)
           경북대 정치외교학(주) + 철학(부) 학사
```

---

### Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YHPARK-KR&show_icons=true&theme=default&hide_border=true&count_private=true" height="150"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=YHPARK-KR&theme=default&hide_border=true" height="150"/>
</p>

---

<p align="center">
  <a href="https://github.com/YHPARK-KR/digitization-of-piping-and-instrument-diagrams">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YHPARK-KR&repo=digitization-of-piping-and-instrument-diagrams&theme=default&hide_border=true" />
  </a>
  <a href="https://github.com/YHPARK-KR/Claude_talk">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YHPARK-KR&repo=Claude_talk&theme=default&hide_border=true" />
  </a>
</p>
