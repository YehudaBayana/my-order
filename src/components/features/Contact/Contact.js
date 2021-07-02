import React, { useContext } from 'react';
import { ColorContext } from '../../../App';
import styled, { css } from 'styled-components';

const ContactDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 55px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
  ${(props) => {
    return props.half
      ? css`
          width: 49%;
        `
      : null;
  }}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 15px;
  background-color: white;
`;

const H2 = styled.h2`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 20px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme || 'steelblue'};
  color: white;
  padding: 45px 23px;
`;

const InputDiv = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 7px 35px;
  font-size: 16px;
  font-weight: 800;
  background-color: ${({ theme }) => theme || 'steelblue'};
  color: white;
  box-shadow: 1px 1px 15px lightgray;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${(props) => {
    return props.pink
      ? css`
          background-color: hsl(322, 100%, 66%);
          color: white;
          font-size: 13px;
          padding: 14px 65px;
        `
      : null;
  }}
`;

const P = styled.p`
  margin: 10px 0;
  line-height: 1.7rem;
`;

const Span = styled.span`
  font-size: 18px;
  display: inline-block;
  text-align: right;
  margin-top: 10px;
`;

const Contact = () => {
  const { theme } = useContext(ColorContext);
  return (
    <div className='container'>
      <ContactDiv>
        <Content theme={theme}>
          <h2>פרטים ליצירת קשר</h2>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis.
          </P>
          <Span>
            <i class='fas fa-map-marker-alt'></i>
            Lorem ipsum dolor sit amet.
          </Span>
          <Span>
            <i class='fas fa-phone-square-alt'></i>
            054-345-3426
          </Span>
          <Span>
            <i class='fas fa-paper-plane'></i>
            example@example.com
          </Span>
          <Span>
            <i class='fas fa-globe-americas'></i>
            yudaBayana.com
          </Span>
        </Content>
        <Form>
          <H2>צור עימנו קשר</H2>
          <InputDiv>
            <label>שם פרטי</label>
            <Input type='text' placeholder='שם פרטי' />
          </InputDiv>
          <InputDiv>
            <label>שם משפחה</label>
            <Input type='text' placeholder='שם משפחה' />
          </InputDiv>
          <label>אימייל</label>
          <Input type='text' placeholder='example@example.com' />
          <label>השאר הודעה</label>
          <Textarea placeholder='הודעה'></Textarea>
          <Button theme={theme}>שלח </Button>
        </Form>
      </ContactDiv>
    </div>
  );
};

export default Contact;
