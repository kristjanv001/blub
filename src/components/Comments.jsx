import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import CommentBox from "./CommentBox";

export default function Comments(props) {
  const { postId, currentUser } = props;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  // Add a comment collection to the db
  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: currentUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  // Get comments from the db
  useEffect(() => {
    let unsubscribe;

    unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });

    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div>
      {comments.map((item, idx) => {
        return (
          <p key={idx}>
            <span className="font-bold pr-2">{item.username}</span>
            <span>{item.text}</span>
          </p>
        );
      })}

      {currentUser && (
        <CommentBox
          type="text"
          placeholder="Enter a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onSubmit={postComment}
        />
      )}
    </div>
  );
}
