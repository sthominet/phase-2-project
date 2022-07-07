import React from 'react'
import data from './../db'


function CommentList() {
   
      const elem = data.comments

      return (
        <div>
          {elem.map(elem => (<ul>{elem.text}</ul>))}
        </div>
        )
    
}

export default CommentList;