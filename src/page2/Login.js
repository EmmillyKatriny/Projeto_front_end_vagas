import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Validar o e-mail usando uma expressão regular simples
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setIsValidEmail(isValid);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    // Validar a senha (por exemplo, garantir que ela tenha pelo menos 6 caracteres)
    const isValid = passwordValue.length >= 6;
    setIsValidPassword(isValid);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (isValidEmail && isValidPassword) {
    
      console.log('Autenticação bem-sucedida');
    } else {
      console.log('Dados de login inválidos');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    if (isValidEmail && isValidPassword) {
     
      console.log('Cadastro bem-sucedido');
    } else {
      console.log('Dados de cadastro inválidos');
    }
  };

  const handleForgotPassword = () => {
   
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <h2>{isLoginForm ? 'Login' : 'Cadastro'}</h2>
      <form onSubmit={isLoginForm ? handleLoginSubmit : handleSignupSubmit}>
        {!isLoginForm && (
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className={!isValidEmail ? 'invalid' : ''}
          />
          {!isValidEmail && (
            <p className="error">Por favor, insira um e-mail válido.</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className={!isValidPassword ? 'invalid' : ''}
          />
          {!isValidPassword && (
            <p className="error">
              A senha deve ter pelo menos 6 caracteres.
            </p>
          )}
        </div>
        <button type="submit" disabled={!isValidEmail || !isValidPassword}>
          {isLoginForm ? 'Entrar' : 'Cadastrar'}
        </button>
        <p>
          {isLoginForm ? (
            <span onClick={toggleForm}>Cadastre-se</span>
          ) : (
            <span onClick={toggleForm}>Já possui uma conta? Faça login</span>
          )}{' '}
          | <span onClick={handleForgotPassword}>Esqueceu a senha?</span>
        </p>
      </form>
    </div>
  );
}

export default Login;


