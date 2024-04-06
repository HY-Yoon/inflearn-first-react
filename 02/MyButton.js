function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 컴포넌트를 DOM에 랜더링
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);