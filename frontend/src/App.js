import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Acceuil } from './Pages/Acceuil';
import { ListeCat } from './Pages/ListeCat';
import { Footer } from './Components/Footer/Footer';
import { Details } from './Pages/Details';
import { WatchListProvider } from './Components/Context/WatchListContext';
import { WatchList } from './Pages/WatchList';


function App(){
  return(
    <div className='App'>
      <BrowserRouter>
    <Navbar/>
    <WatchListProvider>
    <Routes>
    <Route path='/' element={<Acceuil/>}/>
    <Route path='/films' element={ <ListeCat category="films"/> } />
    <Route path='/séries' element={ <ListeCat category="séries"/> } />
    <Route path='/details/:entiteId/:category' element={<Details/>}/>
    <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
    </WatchListProvider>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App;