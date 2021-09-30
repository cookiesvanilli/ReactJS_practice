import React, { useState, useEffect } from 'react';

export default function Comments2ListHook(props) {
  const [post, setPost] = useState([]);

  function onlyEven() {
    let p = post;
    let evenPost = p.filter((item, index) => {
      if ((index+1) % 2 === 0) {
        return true;
      };
    });
    setPost(evenPost);
  };

  useEffect(() => {
    console.log('effect');
    if (props.data.length > 0) setPost(props.data);
  }, [props]);

  return (
    <>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {post.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </>
  );
};