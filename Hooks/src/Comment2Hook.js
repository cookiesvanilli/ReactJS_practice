import React, { useState } from "react";
import CommentsListHook from './CommentListHook';

function Comment2Hook() {
    const [comments, setComments] = useState([]);

    const selectHandler = (event) =>{
        let selectValue = +event.target.value;
            fetch(`https://jsonplaceholder.typicode.com/posts/${selectValue}/comments`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   setComments(data);
                });
        }

        return (
            <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
            </select>
           <div>
           <CommentsListHook data={comments}/>
           </div>
           </div>
        );
}

export default Comment2Hook;