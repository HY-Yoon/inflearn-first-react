import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: '홍길동',
        comment: '안녕하세요, 홍길동입니다.'
    },
    {
        name: '자바스크립트',
        comment: '자바스크립트 재밌어요'
    },
    {
        name: '리액트',
        comment: '리액트 재미있어요~'
    },
]

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comments) => {
                    return (
                        <Comment name={comments.name} comment={comments.comment} />
                    )
                })
            }
        </div>
    )
}

export default CommentList;