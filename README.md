# 박윤환 · YUNHWAN PARK

**Data-Centric AI · Computer Vision · Developer Tools**

산업 현장의 비효율을 데이터로 풀고 싶은 개발자입니다.<br>
정치외교학과 철학을 공부했고, 지금은 도면 인식·시선 추적·검색 도구를 만듭니다.

[Email](mailto:flash_hwan@naver.com) · [LinkedIn](https://linkedin.com/in/%EC%9C%A4%ED%99%98-%EB%B0%95-013a29336)

## Selected work

### SEMES P&ID Viewer
반도체 도면 AI 인식 · SSAFY × SEMES 기업연계

YOLOv8-L·YOLOv8-x·YOLO11x·DETR 4종을 같은 조건으로 비교해 데이터 병목을 확인했습니다. 모델 학습, 심볼–텍스트 매칭, WPF 전송 파이프라인을 맡았습니다.

**mAP@50 0.867** · 9클래스 · P 95.2 / R 80.5 · 자동 라벨링 정확도 **96%**

<details>
<summary>실험과 구현 과정</summary>

외국 표준 도면으로 학습한 모델은 실제 현장 도면에서 인식률 0%였고 이후에도 20%대에서 오래 멈춰 있었습니다. 열여섯 가지를 시도해도 86%가 천장이었습니다. 모델 4종을 같은 조건으로 비교했을 때 차이는 2%p 안이었습니다. train loss는 수렴하는데 mAP가 정체돼 데이터 병목으로 판단했습니다.

합성 도면 1천 장을 넣자 86%가 24%로 떨어졌고 12만 2천 장에서는 0%가 됐습니다. 데이터 다양성을 점검하고 라벨 정합성에 집중해 자동 라벨링 파이프라인 정확도를 96%로 만들었습니다.

심볼–텍스트 매칭에는 헝가리안 알고리즘으로 전역 최적 배정을 적용했습니다. 후반에는 CAD 원본(DXF)에서 직접 추출하는 경로를 맡았습니다. 이 경로는 INSERT 블록으로 정의된 심볼에 한정됩니다.

최종 mAP@50은 0.867입니다. 프로젝트의 도면 1장 정리 시간은 워킹데이 10일에서 8분으로 줄었습니다.

*2026.04~ · 사내 GitLab, 비공개*

</details>

### EyeSpeak
루게릭병 환자를 위한 시선 의사소통 · SSAFY 인공지능 영상 1등

MediaPipe 기반 실시간 시선 파이프라인과 L2CS-Net 모델 학습 트랙을 맡았습니다. 캘리브레이션부터 떨림 보정, 깜빡임 입력, ONNX 배포까지 구현했습니다.

**30fps** 실시간 처리 · 해당 패키지·학습 스크립트 **단독 저작**

<details>
<summary>시선 추적과 모델 학습</summary>

MediaPipe 홍채 좌표를 Ridge 회귀와 2차 다항식으로 화면에 매핑했습니다. One-Euro 필터를 축별로 분리해 떨림과 이상치를 억제하고 EAR로 깜빡임을 입력 트리거로 사용했습니다. 최근 N프레임의 과반수로 격자 선택을 안정화했습니다.

모델 학습 트랙에서는 L2CS-Net을 재구현했습니다(ResNet 백본, 90-bin softmax 기대값). 64×64 눈 크롭용 경량 CNN, AI Hub 안구 데이터 파이프라인, 파인튜닝 CLI, 평가 harness(각도 MAE·지연 측정), ONNX 배포도 맡았습니다.

단독 저작 범위는 커밋 저자로 확인한 해당 패키지와 학습 스크립트입니다.

*2026.02~04 · 사내 GitLab, 비공개*

</details>

### ragkit
개인 지식볼트 RAG · 웹검색 CLI · MCP 서버

임베딩 경로와 청크 분할을 개선하고 검색 품질의 회귀를 확인하는 평가 harness를 만들었습니다.

인덱싱 **1.2 → 46 chunks/sec** · Recall@k·MRR 평가

<details>
<summary>인덱싱 개선과 검색 평가</summary>

ChromaDB를 EF-less로 두고 클라이언트에서 임베딩을 주입해 임베드 경로를 테스트할 수 있게 했습니다. 임베더를 fastembed e5(CPU)에서 Ollama bge-m3(Metal)로 바꿨을 때 인덱싱 처리량이 1.2에서 46 chunks/sec로 늘었습니다. 서로 다른 실행 환경에서 측정한 값입니다.

헤더 단위 분할로 1만 4천 개까지 늘어난 마이크로 청크는 섹션 패킹으로 약 1천 개로 줄였습니다. 로컬 LLM으로 만든 골든셋으로 Recall@k와 MRR을 청크·노트 층위에서 각각 평가하고 부호검정으로 노이즈를 걸러냈습니다.

</details>

### 관상네컷
AI 관상 분석 서비스 · SSAFY 우수상 · 팀장

React/TypeScript 프론트엔드를 맡았습니다. git pull 이후 반복되던 오류를 검사 스크립트와 git hook으로 자동 검출하고 오류 5종의 재현·해결 방법을 문서화했습니다.

<details>
<summary>팀 개발 과정에서 맡은 일</summary>

src 전체의 머지 충돌 마커를 검출하고 발견 시 실패 종료 코드를 반환하는 검사 스크립트를 만들었습니다. post-merge hook으로 자동 실행하고 팀이 반복해서 겪은 오류 5종을 문서로 남겼습니다.

LLM 응답 80초 → 40초 단축은 팀 백엔드 성과입니다. 제 역할은 팀장과 프론트엔드, 위 검사·문서화 작업입니다.

*사내 GitLab, 비공개*

</details>

## More projects

**슈퍼이끌림** · 직업훈련 정보 시각화

React 프론트엔드를 맡아 Naver Map API로 전국 교육기관을 지도에 시각화했습니다. 공공데이터 활용 공모전 장려상(2024.08).

**job-hunter** · 채용공고 수집 자동화

채용공고를 수집·정규화·중복 제거해 모으는 파이프라인을 만들었습니다.

**GDA 재현 실험** · Grouped Differential Attention

<details>
<summary>재현되지 않은 가설도 결과로 남기기</summary>

12.7B 모델 기술리포트의 Grouped Differential Attention을 3M 파라미터로 재구현했습니다. 파라미터를 맞춘 대조군(오차 0.02%)으로 6변형 × 2시드, 총 12회 학습을 돌렸습니다.

주 가설은 재현되지 않았습니다. 측정 차이 0.0014가 시드 표준편차 0.0175보다 작아, 이 규모에서는 두 구조를 구분할 수 없다고 보고했습니다.

</details>

## Toolkit

| 영역 | 사용 기술 |
| :--- | :--- |
| Languages | Python · TypeScript · Java · C# |
| AI & data | YOLOv8 · MediaPipe · Ridge · One-Euro · RAG · LLM · ChromaDB |
| Application | React · Vue · Tailwind CSS · Spring Boot · MCP 서버 |
| Infrastructure | MySQL · AWS · GCP |
| Development | Claude Code · Codex CLI · Cursor |

## Background

- **경북대** · 정치외교학 주전공 + 철학 부전공 (2015~2025). 선거·정책 데이터 양적 분석과 존재론 개념 구조화를 공부했습니다.
- **부산대 AI 빅데이터 풀스택 과정** · 950h (2024)
- **SSAFY 14기 부울경** · 풀스택 + AI Foundation Model · 1,628h (2025~2026)
