# 3강 JSX
## JSX
- A Syntax extension to JavaScript : 자바스크립트의 확장 문법
- JavaScipt + XML/HTML
```jsx
const element = <h1>Hello, world!</h1>;
```
### JSX의 역할
- 내부적으로 JavaScipt + XML/HTML를 자바스크립트로 변환
- 변환하는 역할 수행 => `React.createElement`
  - JSX 코드를 모두 `createElement`함수를 사용하는 코드로 작성 가능
  - 하지만 JSX 사용시 이점이 많아 JSX 사용
```jsx
// JSX 사용
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

// JSX 사용 X
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
)
```
## JSX의 장점
- 간결한 코드
- 가독성 향상
- Injection Attacks 방어, 보안성 향상

## JSX 사용법
- JavaScipt + XML/HTML 문법 사용
- 중괄호 사용시 자바스크립트 코드가 들어간다!

> 출처 : [인프런] 처음 만난 리액트