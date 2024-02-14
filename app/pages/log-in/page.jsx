'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './logInPage.module.css';
import styled from 'styled-components';
import Header from '../../components/Header';

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

  const router = useRouter();

  const [formValues, setFormValues] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isAlertClosed, setIsAlertClosed] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
    setIsSent(false);
    setShowAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { uname, email, pwd, confirmPwd } = formValues;

    if (uname && email && pwd && pwd === confirmPwd) {
      console.log('Form submitted:', formValues);
      setIsSent(true);
      setShowAlert(true);
      router.push('/pages/profile');
    } else {
      alert('Please fill in all required fields!');
    }
  };

  const handleAlertClose = () => {
    setIsAlertClosed(true);
  };

  const CustomAlert = ({ message }) => {
    return (
      <div>{message}</div>
    );
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.formsContainer}>

        <div className={styles.glow} />
        <div className={styles.glow2} />

        <div className={styles.formBlock} style={{background: 'rgba(20, 39, 32, 0.3)'}}>
          <form className={styles.form}>
            <p className={styles.formHeader}>Log in</p>
            <Label>Username or email</Label>
            <Input
              type="username"
              placeholder="Enter Username or email"
              name="uname"
              required
            />
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              name="pwd"
              required
            />
            <div>
              <SubmitButton
                type="submit"
              />
            </div>
          </form>
        </div>

        <div className={styles.formBlock} style={{background: 'rgba(13, 26, 21, 0.2)'}}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formHeader}>Sign up</p>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={formValues.uname || ''}
              onChange={handleInputChange}
              required
            />
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formValues.email || ''}
              onChange={handleInputChange}
              required
            />
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              name="pwd"
              value={formValues.pwd || ''}
              onChange={handleInputChange}
              required
            />
            <Label>Confirm password</Label>
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPwd"
              value={formValues.confirmPwd || ''}
              onChange={handleInputChange}
              required
            />
            <div>
              <SubmitButton
                type="submit"
                value={isSent && !isAlertClosed ? "Sent" : "Sign up"}
              />
            </div>
          </form>
          {showAlert && !isAlertClosed && (
            <div>
              <CustomAlert message="Your registration is successful!" />
              <button onClick={handleAlertClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
