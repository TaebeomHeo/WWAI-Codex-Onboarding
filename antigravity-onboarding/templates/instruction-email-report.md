# Instruction: Weekly Report Email Generator

## Goal

Jira 이슈의 진행 상황을 바탕으로, 주간 업무 보고 메일 초안을 작성한다.

## Inputs

1.  **Jira Context**: 현재 열려있는 Jira 이슈 페이지 (또는 검색 결과)
    - 확인해야 할 필드: Status, Summary, Comments (최신 3개), Worklog
2.  **Email Context**: 현재 열려있는 메일 작성 창 또는 수신 메일
    - 확인해야 할 사항: 수신자(To), 참조(CC), 이전 메일의 요청 사항

## Process Steps

1.  **Analyze Jira**: Jira 페이지에서 이슈의 현재 상태, 진행률, 최근 논의된 블로커(Blocker) 내용을 추출한다.
2.  **Analyze Email**: 메일 문맥에서 보고의 중점 사항(예: 일정 위주 보고인지, 품질 위주 보고인지)을 파악한다.
3.  **Synthesize**:
    - [Jira 내용]을 [Email 요청 사항]에 맞춰 재구성한다.
    - 단순 나열이 아닌, "진행됨 -> 그러나 문제 발생 -> 해결 방안" 순서의 서사 구조를 갖춘다.
4.  **Drafting**: 아래 Output Format에 맞춰 메일을 작성한다.

## Output Format

- **제목**: [주간보고] Jira 이슈명 (진행중/완료)
- **수신**: (Email Context에서 추출)
- **본문**:
  > (인사말)
  >
  > 금주 진행된 {Jira Key} 이슈 건에 대해 보고드립니다.
  >
  > **1. 주요 진행 현황**
  >
  > - {핵심 요약}
  >
  > **2. 상세 내용**
  >
  > - {Status 변화 및 주요 작업 내역}
  >
  > **3. 이슈 및 특이사항**
  >
  > - {Blocker 또는 논의 필요 사항}
  >
  > (맺음말)

## Tone & Manner

- 정중하고 격식 있는 비즈니스 톤
- 불확실한 추측보다는 팩트(Fact) 위주로 서술
