
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';
function App() {
  return (
 <BrowserRouter>
 <div>
  <Navbar/>
<Routes>
<Route path="/" element={<ArtistList />} />
<Route path="/artist/:id" element={<ArtistPage />} />
<Route path='/album/:id' element={<AlbumPage/>}/>
</Routes>

 </div>
 
 </BrowserRouter>
  );
}

export default App;
