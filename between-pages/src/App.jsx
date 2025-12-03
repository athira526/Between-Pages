import Entry from './pages/Entries.jsx';
import Hero_section from './pages/Hero_section.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import CategoryDashboard from './pages/CategoryDashboard.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero_section />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/category/:categoryId" element={<CategoryDashboard/>}/>
          <Route path="/category/:categoryId/entry/:entryId" element={<Entry/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
