import React, { useState, useEffect } from "react";


function CommentListHook (props) {
    const [commentList, setCommentList] = useState([]);
     useEffect(() => setCommentList(props.data), [props.data]);      
    return(
       <div>
          {commentList.map((el, index) => (
             <section key={el.id}>
                <p><b>{index + 1}. {el.email}</b></p>
                <p>{el.body}</p>
             </section>
          ))}
       </div>
    );
 }
 
 export default CommentListHook;