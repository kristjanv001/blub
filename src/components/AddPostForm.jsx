import React, { useState } from "react";
import FormBtn from "./FormBtn";
import { db, storage } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";
import firebase from "../firebase/firebaseConfig";

export default function AddPostForm(props) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const { currentUser, setShowAddPostModal } = props;

  const handleChooseFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post the image to the db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: currentUser.displayName,
            });

            // setProgress(0);
            // setCaption("");
            // setImage(null);
            setShowAddPostModal(false);
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <div>
          <progress className="w-full" value={progress} max="100" />
          <FormInput
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            label="Caption"
            placeholder="Enter a caption"
          />
          <FormInput onChange={handleChooseFile} label="Image" type="file" />
          <FormBtn type="submit" buttonText="Add Post" />
        </div>
      </form>
    </div>
  );
}

// caption, file, upload

// handleChange for file input
// handleUpload for uploading to db
