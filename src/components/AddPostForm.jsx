import React from "react";
import FormBtn from "./FormBtn";
import { db, storage } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";
import firebase from "../firebase/firebaseConfig";

export default function AddPostForm(props) {
  const {
    // username,
    currentUser,
    caption,
    setCaption,
    image,
    setImage,
    setProgress,
    setShowAddPostModal,
  } = props;

  const handleChooseFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`images/${image.name}`).put(image);
    storageRef.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
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

            setProgress(0);
            setCaption("");
            setImage(null);
            setShowAddPostModal(false);
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <div>
          <FormInput
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
