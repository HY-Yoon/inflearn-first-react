# 5강 Components and Props
## Component
- 리액트는 컴포넌트 기반
- 개념적으로 자바스크립트의 함수와 동일
- 리액트 컴포넌트의 입력과 출력
  - 입력 : Props
  - 출력 : React element
- 객체지향의 클래스, 인스턴스와 유사한 개념을 가짐

## Props
- 리액트 컴포넌트의 속성을 의미
- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- 특징
  - readOnly, 값 변경 불가
  - 모든 리액트 컴포넌트는 Props를 직접 변경 불가능
  - 같은 Props에 항상 같은 결과 (순수 함수)
- 사용법
  - 값 할당 시 문자열 이외의 값은 중괄호로 감싸서 전달
    - 문자열도 중괄호 가능

## Function Component
- 리액트의 컴포넌트는 일종의 자바스크립트 함수
- 장점 : 간단한 코드

## Class Compoenent
- JavaScrit ES6의 `class`를 사용해 만듦
- 함수 컴포넌트에 비해 추가 기능 가짐
- `React.Component`를 상속받아 생성

## Compoent의 이름
- 항상 대문자로 시작
- 소문자로 시작 : React가 DOM 태그로 인식하여 오류 가능성 O
```jsx
class Welcome extends React.Component {
    reder() {
        return <h1>안녕, {this.props.name}</h1>
    }
}
```
## Component 합성
- component에 component를 합칠 수 있음

## Component 추출
- 큰 component를 작은 조각으로 나눌 수 있음
- 재사용성 향상
- 개발 속도 향상

> 출처 : [인프런] 처음 만난 리액트