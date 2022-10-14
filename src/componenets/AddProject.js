import { signOut } from "firebase/auth";
import React from "react";
import { useRef } from "react";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore/lite";

const AddProject = () => {
  const reference = useRef();
  const colRef=collection(db, 'portfolio')

  const logOut = () => {
    signOut(auth);
  };

  const submitProject = (e) => {
    e.preventDefault();
    const name = reference.current[0]?.value;
    const url = reference.current[1]?.value;
    const description = reference.current[2]?.value;
    const image = reference.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);
    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              url,
              description,
              image: downloadUrl,
            });
          },
          (error) => {
          console.log(error);
            savePortfolio({
              name,
              url,
              description,
              image: null,
            });
          }
        );
      },
      (error) => {
      console.log(error);
        savePortfolio({
          name,
          url,
          description,
          image: null,
        });
      }
    );
  };

  const savePortfolio = async (portfolio) => {
  console.log(portfolio);
  try {
    await addDoc(colRef, portfolio)
    window.location.reload(false)
  } catch (error) {
    alert('Failed to add portfolio')
  }
  };

  return (
    <div className="form">
      <h1>Add New Project</h1>
      <form ref={reference} onSubmit={submitProject}>
        <label>Name</label>
        <input type="text" />
        <label>Url</label>
        <input type="text" />
        <label>Description</label>
        <textarea />
        <label>Image</label>
        <input type="file" />
        <div className="btn-con">
          <button type="submit" className="butt">
            Submit
          </button>
          <button onClick={logOut} className="but">
            Sign out
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
