# 4강 Rendering Elements
## Elements란?
- 리액트 앱을 구성하는 가장 작은 요소
- DOM 앨리먼트와 다름
- `descriptor` 
  - 리액트에서 화면에 나타나는 내용을 기술하는 자바스크립트 객체
  - `descriptor`가 최종적으로 나타내는 형태가 DOM Element
    - DOM과의 통일성을 위해 `element`로 명칭 변경
- React Element = DOM 앨리먼트의 가상 표현

## Elements의 생김새
- 자바스크립트 객체 형태로 존재
- 불변성을 가짐
  
## Elements의 특징
- 불변성(immutable)
- Elements 생성 후에는 `children`, `attributes` 변경 불가
  - 화면에 변경이 필요할 때 Elements는 새롭게 생성됨
## Elements 렌더링
- 루트 돔 노드를 가짐
- 리액트 돔에 `render` 함수 사용
- 화면에 변경이 필요할 때 Elements는 새롭게 생성됨

> 출처 : [인프런] 처음 만난 리액트