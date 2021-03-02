import React, { useState, useEffect } from 'react';
import firebase from '../components/firebase';
import styled from 'styled-components';
import DetailBg from '../images/details.jpg';
import { Link } from 'react-router-dom';

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
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormBtn type="submit">Continue</FormBtn>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormH1>Doa & Ucapan Untuk Kedua Mempelai</FormH1>
              <FormLabel htmlFor="for">Nama</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <FormLabel htmlFor="for">Doa & Ucapan</FormLabel>

              <FormText
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}
              />
              <FormBtn type="submit">Kirim</FormBtn>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Comments;

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${DetailBg}) no-repeat center;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 40px;
  margin-top: 40px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 80%;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  background: #010101;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

const FormText = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

const FormBtn = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

// {
//   listComments.map((comment) => (
//     <CommentItem key={comment.id}>
//       <h1>{comment.name}</h1>
//       <p>{comment.comment}</p>
//     </CommentItem>
//   ));
// }
