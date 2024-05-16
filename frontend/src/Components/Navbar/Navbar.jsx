import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {

    const [menu, setMenu] = useState('Acceuil');
    const[isConnected, setIsConnected] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsConnected(token ? true : false);
  }, []);


    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      setIsConnected(false);
      window.location.href = '/login';
  };



  return (
    <div className='navbar'>
        <div className='navlogo'>
          <Link to={'/'}>
            <img src={logo} className='logo'></img></Link>
        </div>
        <nav className='navig'>
            <li className='drop'>Profil
                <ul className="dropdown-menu">

                    {!isConnected &&(
                        <>
                        <li className='dm'><Link to='/login'>Se connecter</Link></li>
                    <hr/>
                    <li className='dm'><Link to='/register'>S'inscrire</Link></li>
                    </>
                        )
                    }
                    <li className='dm'><Link to='/login'>Se connecter</Link></li>
                    <hr/>
                    <li className='dm'><Link to='/register'>S'inscrire</Link></li>
                    <hr/>
                    <li className='dm'><Link to='/watchlist'>WatchList</Link></li>
                    {isConnected && (
                            <>
                                <li className='dm'><button onClick={handleLogout}>Déconnexion</button></li>
                                <hr />
                            </>
                        )}
                </ul>
            </li>
            <li className='reste' onClick={()=> {setMenu('Acceuil')}}> <Link to='/'>Accueil</Link>{menu==='Acceuil'?<hr/>:<></>}</li>
            <li className='reste' onClick={()=> {setMenu('Films')}}> <Link to='/films'>Films</Link>{menu==='Films'?<hr/>:<></>}</li>
            <li className='reste' onClick={()=> {setMenu('Séries')}}> <Link to='/séries'>Séries</Link>{menu==='Séries'?<hr/>:<></>}</li>
       
        </nav>
    </div>
  )
}
