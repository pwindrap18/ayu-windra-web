import React, { useState, useEffect } from 'react';
import firebase from '../components/firebase';
import styled from 'styled-components';
import DetailBg from '../images/details.jpg';
// import { Link } from 'react-router-dom';

const useComments = () => {
  const [comments, setComments] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    const unsubscribe = firebase
      .firestore() //access firestore
      .collection('comments')
      .orderBy('sort', 'desc') //access "items" collection
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
        commentDate: new Date().toDateString(),
      })

      .then(() => setName(''), setComment(''));
  };

  const listComments = useComments();

  return (
    <>
      <Container id="comments">
        <FormWrap>
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
          <CommentContent>
            <CommentDisplay>
              {listComments.map((comment) => (
                <CommentItem key={comment.id}>
                  <CommentDate>{new Date().toDateString()}</CommentDate>
                  <CommentName>{comment.name}</CommentName>
                  <CommentDesc>{comment.comment}</CommentDesc>
                </CommentItem>
              ))}
            </CommentDisplay>
          </CommentContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Comments;

const Container = styled.div`
  min-height: 700px;
  position: relative;
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

  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 240px;
  width: 100%;
  margin-top: 70px;
  @media screen and (max-width: 1024px) {
    height: 100%;
    padding-top: 5px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    justify-content: center;
  }
`;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    height: 100%;
  }
`;

const CommentContent = styled.div`
  height: 80%;
  max-height: 462px;
  min-height: 462px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    max-height: 500px;
    min-height: 500px;
    margin-bottom: 60px;
  }
`;

const CommentDisplay = styled.div`
  border-radius: 20px;
  background: #fff;
  height: 80%;
  min-height: 462px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  margin-left: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 22px 22px;
    width: 100%;
    height: 100%;
    margin: 20px auto;
  }
`;

const CommentItem = styled.div`
  border-radius: 20px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`;
const CommentName = styled.h1`
  color: #fcd1d1;
  font-size: 20px;
  font-weight: 400;
  text-align: start;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
`;

const CommentDesc = styled.span`
  padding: 10px 20px;
  text-align: start;
  margin: 10px 0;
  color: #fcd1d1;
  font-size: 14px;
`;

const CommentDate = styled.p`
  margin-top: 20px;
  margin-right: 20px;
  font-size: 10px;
  color: #fcd1d1;
  text-align: end;
`;

const Form = styled.form`
  border-radius: 20px;
  background: #010101;
  height: 462px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 1024px) {
    padding: 22px 22px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fcd1d1;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  font-family: 'Redressed';
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fcd1d1;
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
  background: #fcd1d1;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #010606;
  font-size: 20px;
  cursor: pointer;
`;
