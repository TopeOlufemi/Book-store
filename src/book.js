import React from "react";

const book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}> {title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complexExample
      </button>
    </article>
  );
};

export default book;
