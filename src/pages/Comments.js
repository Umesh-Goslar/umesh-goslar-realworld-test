import React, { useEffect, useState } from "react";
import { COMMENTS_GET_URL, APPLICATION_JSON } from "../constants";

const Comments = () => {
  const [comments, setComments] = useState([])
  const getComments = () => {
    fetch(COMMENTS_GET_URL, {
      headers: {
        "content-type": APPLICATION_JSON,
      },
      method: "GET",
    })
      .then(response => response.json())
      .then((data) => {
        if (data) {
          setComments(data)
        }

      })
      .catch((error) => { return error })
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <>
      <h1 className="title is-4">Comments page</h1>
      {!comments.length > 0 ?
        <div className="flex-container"> <div className="loader"></div></div> :
        <table className="table">
          <thead>
            <tr>
              <th>PostID</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Comments</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((item, index) =>
              <tr key={index}>
                <td> {item.postId}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
}

export default Comments;
