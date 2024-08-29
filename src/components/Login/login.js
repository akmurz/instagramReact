// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instagram from '../../icons/Instagram.png';
import './login.css';

export function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const authenticatedUser = users.find(u => u.username === user && u.address.zipcode === password);
      if (authenticatedUser) {
        navigate('/home');
      } else {
        alert('Invalid login or password');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="autorization_block">
          <div className="instagram">
            <img src={instagram} alt="Instagram" />
          </div>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Телефон, имя пользователя или эл.адрес"
            className="user"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="password"
          />
          <button className="but" onClick={handleLogin}>Войти</button>
        </div>
      </div>
    </div>
  );
}


