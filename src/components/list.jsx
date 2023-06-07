import React, { Component, useState } from 'react';

const List = ( {title, changeTitle, changePost} ) => {
    const [like, setLike] = useState([0, 0, 0]);

    const handleLike = (idx) => {
        let newLike = [...like];
        newLike[idx] = like[idx] + 1;

        setLike(newLike);
    }

    const handleClick = (idx) => {
        changePost(idx);
    }

    const handleDelete = (delIdx) => {
        const newPosts = title.filter((el, idx) => {
            return idx !== delIdx; 
        }); // splice(i, 1);
        changeTitle(newPosts);
    }
    
    return (
        <div>
            {title.map((el, idx) => ( 
                <div className='list' key={idx} onClick={() => {handleClick(idx)}}>
                    <h4>
                        { el } <span onClick={(e) => {e.stopPropagation(); handleLike(idx)}}>👍</span> {like[idx]}
                    </h4>
                    <p>2월 17일 발행</p>
                    <button onClick={() => {handleDelete(idx)}}>글삭제</button>
                </div>
            ))}
            
        </div>
    );
};

export default List;