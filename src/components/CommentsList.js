import React, { useState } from 'react';
import './CommentsList.css';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
    { id: 4, text: "Это четвёртый комментарий"},
    { id: 5, text: "Это пятый комментарий" }
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div>
      <h2 className="Title">Список комментариев</h2>
      <ul className="List">
        {comments.map(comment => (
          <li className="List-item" key={comment.id}>
            {comment.text}
            <button className="Button" onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;