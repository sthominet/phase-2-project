import React from 'react';

function CommentForm() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")

    const body = e.target.value

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  }

    return (
      <div>
        <h1>What is your favorite breed?</h1>
        <form onSubmit={handleSubmit}>
          <label>Answer: </label>
          <br />
          <textarea type="text" name="comment" />
          <br />
          <button type="reset">Submit</button>
        </form>
      </div>
    )

}

export default CommentForm;

/*
    const [inputValue, setInputValue] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {inputValue};
 
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: { "Content-Type": "applications/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            console.log('new comment');
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
*/