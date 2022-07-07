import React, { useState } from 'react';

function CommentForm() {

    const [inputValue, setInputValue] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {inputValue};
 
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: { "Content-Type": "applications/json" },
            body: JSON.stingify(comment)
        }).then(() => {
            console.log('new comment')
    })
      
    }

    return (
      <div>
        <h1>What is your favorite breed?</h1>
        <form onSubmit={handleSubmit}>
          <label>Answer: </label>
          <br />
          <input type="text" value={inputValue} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  
}

export default CommentForm;