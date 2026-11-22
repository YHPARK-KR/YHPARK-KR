---
version: alpha
name: Precision Metric Panel
description: Stitch 프로젝트 "Industrial AI Engineer Profile README"가 만든 디자인 시스템을 옮긴 것. 원본은 docs/stitch/DESIGN.md. README 그림은 build-figures.js가 이 값을 읽어 만든다.
colors:
  primary: "#0969DA"
  before: "#8C959F"
  ink: "#1F2328"
  muted: "#656D76"
  line: "#D0D7DE"
  surface: "#FFFFFF"
  well: "#F6F8FA"
  dark-primary: "#388BFD"
  dark-before: "#6E7681"
  dark-ink: "#F0F6FC"
  dark-muted: "#8B949E"
  dark-line: "#30363D"
  dark-surface: "#0D1117"
  dark-well: "#161B22"
typography:
  headline-md:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
  label-md:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
components:
  panel:
    backgroundColor: "{colors.well}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  step:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  step-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
  bar-before:
    backgroundColor: "{colors.before}"
    rounded: "{rounded.sm}"
  bar-after:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
---

# Precision Metric Panel

> Stitch가 낸 원본은 `docs/stitch/`(DESIGN.md, code.html, screen.png)에 그대로 두었다. 아래는 그 값을 README 그림에 맞게 옮긴 것이고, 값이 다르면 위 토큰이 우선이다.

## Overview

깃허브 프로필 README에 들어가는 그림(팀 프로젝트 처리 순서, 바꾸기 전과 후 막대)에 쓴다. 채용 담당자와 개발자가 1분 안에 읽는 읽기형 화면이고, 공장 계측 화면처럼 숫자가 먼저 보이고 꾸밈은 없는 쪽을 택했다.

옮기면서 바꾼 것:

- Stitch 머리말의 머티리얼 계열 토큰 48개 대신 본문 Colors 절이 적은 값(깃허브 바탕 `#FFFFFF`·`#0D1117`, 강조 코발트 `#0969DA`·`#388BFD` 등)만 썼다.
- 글꼴은 Stitch의 Geist 대신 한글 때문에 프리텐다드를 앞에 두고 시스템 글꼴로 내려간다. README 그림은 SVG라 웹 글꼴을 불러오지 않는다. 행간은 배수로 바꿨다.
- Stitch는 「이전」 수치 글자를 `#8C959F`로 칠했지만 흰 바탕 대비가 3:1이 안 된다. `before`는 막대에만 쓰고 이전 수치 글자는 `muted`(4.5:1 이상)로 쓴다.
- Stitch 시안의 표 내용과 단계 이름 위 `[01] DETECTION` 같은 꼬리표는 시안이 지어낸 것이라 쓰지 않는다. 문구는 README 원문 그대로다.
- 라이트·다크 그림을 따로 만들어 `<picture>`로 넣는다.

## Colors

- **강조 하나(코발트):** `primary` — 바꾼 뒤 수치와 막대, 처리 순서의 지금 단계. 그 밖의 의미색(초록·주황·빨강)은 쓰지 않는다.
- **이전 값:** `before` — 바꾸기 전 막대. 글자는 `muted`.
- **글자:** 제목·값 `ink`, 설명 `muted`.
- **바탕:** 그림 판 `well`, 판 안의 단계 상자 `surface`, 구분선 `line`(1px).
- 다크는 `dark-*` 같은 역할이다. 순검정·순백은 쓰지 않는다(깃허브 바탕 `#FFFFFF`는 판 안 상자에만).

## Typography

- 크기 차이와 굵기로만 위계를 준다. 그림 안 제목 16px/700, 단계 이름·수치 15px/600, 설명 13px.
- 모든 숫자는 `font-variant-numeric: tabular-nums`.
- 대문자 꼬리표, 고정폭 글꼴 흉내는 쓰지 않는다.

## Layout

- 그림 폭 830px(깃허브 README 본문 폭). README에서는 `width="100%"`로 줄어든다.
- 판 안쪽 여백 16px, 묶음 사이 24px, 묶음 사이에는 1px 구분선.
- 처리 순서는 같은 크기 상자 4개를 화살표로 잇는다. 막대 그림은 묶음마다 제목, 조건 한 줄, 전·후 막대 두 줄이고 값은 막대 끝에 바로 적는다(범례 상자, 격자선 없음).

## Elevation & Depth

그림자, 흐림, 그라디언트 없음. 깊이는 `well` 판과 그 안의 `surface` 상자, 1px 테두리로만 나눈다.

## Shapes

판과 상자 모서리 4px, 막대 2px. 알약 모양, 원형 배지는 쓰지 않는다.

## Components

- 기반 라이브러리 없음(정적 SVG). 그림은 `build-figures.js`가 이 파일의 색 토큰을 읽어 만들고, 값은 손으로 SVG에 옮기지 않는다.
- 움직임은 처리 순서 그림 하나에만 둔다: 지금 단계 상자의 테두리·글자가 1→4 순서로 코발트로 바뀌고 4단계에서 멈췄다가 다시 돈다. 움직임 줄이기 설정이면 4단계만 강조한 정지 화면이다.

## Do's and Don'ts

- Do: 바꾼 뒤 값만 강조색, 나머지는 중립색.
- Do: 숫자는 그림 안에 직접 적고 그림의 `alt`에도 같은 숫자를 적는다.
- Don't: 제목 위 꼬리표(키커), 이모지, 가운데점(`·`) 구분자.
- Don't: 큰 숫자+작은 라벨 히어로, 같은 크기 카드 격자를 페이지 뼈대로 쓰기, 색 왼쪽 띠.
- Don't: 눈에 띄는 움직임을 한 페이지에 둘 이상 두기.
- Don't: 이름·아이디를 그림 글자로 넣기(프로필 맨 위 이름 그림은 2026-11-22에 뺐다).
