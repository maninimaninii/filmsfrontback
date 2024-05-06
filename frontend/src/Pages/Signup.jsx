import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return; 
    }
    if (!termsAgreed) {
      setError('Veuillez accepter les termes et conditions');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        navigate('/'); 
      } else {
        setError('Une erreur s\'est produite lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setError('Une erreur s\'est produite lors de l\'inscription');
    }
  };

  return (
    <div className='login'>
      <div className="logincontainer">
        <h1>Créer un compte</h1>
        <form onSubmit={handleSignUp}> 
          <div className="loginfields">
            <input type="email" placeholder='votrenom@random.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='votrenom' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirmer le mot de passe' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {error && <p className="error">{error}</p>}
            <div className='loginagree'>
              <input type="checkbox" name='' id='' checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
              <p>En continuant, j'accepte les termes et conditions</p>
            </div>
            <button type="submit" disabled={!termsAgreed}>Continuer</button> 
          </div>
        </form>
      </div>
    </div>
  );
};