import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Comedy from './pages/Comedy'
import Home from './pages/Home'
import Serials from './pages/Serials'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import OneMovie from './components/OneMovie'
import Movies from './pages/Movies'


const App = () => {
  return <BrowserRouter>
    <Routes>

      <Route element={<SharedLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/comedy' element={<Comedy/>}/>
        <Route path='/serials' element={<Serials/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='all-movies/:movieId' element={<OneMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
}

export default App

// * znamená cokoli jiného

// BrowserRouter = umožňuje přecházet mezi stránkami
