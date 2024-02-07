'use client';
import React, { useState, useEffect } from 'react';
import styles from './logInPage.module.css';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  z-index: 1;
  font-family: var(--font-mono);
`;

const SubmitButton = styled.input`
  color: #cccccc;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  font-family: var(--font-mono);

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    filter: none;
  }
`;

export default function LogInPage() {

  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [isAlertClosed, setIsAlertClosed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
    setIsSent(false);
    setShowAlert(false);
  };

  const handleAlertClose = () => {
    setIsAlertClosed(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.username && formValues.phone && formValues.email && formValues.message) {
      setIsSent(true);
      setShowAlert(true);
      setFormValues({});
      setIsAlertClosed(false); 
    } else {
      alert('Please input empty fields!');
    }
  };

  const CustomAlert = ({ message }) => {
    return (
      <SentMessage>{message}</SentMessage>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.formsContainer}>

        <div className={styles.glow} />
        <div className={styles.glow2} />

        <div className={styles.formBlock} style={{background: 'rgba(20, 39, 32, 0.3)'}}>
          <form className={styles.form}>
            <p className={styles.formHeader}>Log in</p>
            <Label>Username or email</Label>
            <Input type="username" placeholder="Enter Username or email" name="uname" required />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" name="pwd" required />
          </form>
          <SubmitButton type="submit" value="Log in" />
        </div>

        <div className={styles.formBlock} style={{background: 'rgba(13, 26, 21, 0.2)'}}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formHeader}>Sign up</p>
            <Label>Username</Label>
            <Input
              type="username"
              placeholder="Enter Username"
              name="uname"
              required
              value={formValues.username || ''} onChange={handleInputChange}
            />
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={formValues.email || ''} onChange={handleInputChange}
            />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" name="pwd" required />
            <Label>Confirm password</Label>
            <Input type="password" placeholder="Confirm Password" name="pwd" required />
          </form>
          <SubmitButton type="submit" value="Sign up" />
        </div>
      </div>
    </div>
  )
}
