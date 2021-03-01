import React, { useState, useEffect } from 'react';
import firebase from '../components/firebase';
import styled from 'styled-components;';

const useComments = () => {
  const [comments, setComments] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    const unsubscribe = firebase
      .firestore() //access firestore
      .collection('comments')
      .orderBy('sort') //access "items" collection
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listComments = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        setComments(listComments); //items is equal to listItems
      });
    return () => unsubscribe();
  }, []);

  console.log(comments);

  return comments;
};

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('comments')
      .add({
        name,
        comment,
        sort: firebase.firestore.FieldValue.serverTimestamp(),
      })

      .then(() => setName(''), setComment(''));
  };

  const listComments = useComments();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button type="submit">submit</button>
      </form>
      {listComments.map((comment) => (
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
