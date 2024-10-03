import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Portfolio from './routes/Portfolio.jsx';
import Blogs from './routes/Blogs.jsx';
import EMails from './routes/Emails.jsx';
import Contact from './routes/Contact.jsx';

// import './clock.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='my-react-app/' element={<Home/>}></Route>
        <Route path='my-react-app/about' element={<About/>}></Route>
        <Route path='my-react-app/portfolio' element={<Portfolio/>}></Route>
        <Route path='my-react-app/blogs' element={<Blogs/>}></Route>
        <Route path='my-react-app/emails' element={<EMails/>}></Route>
        <Route path='my-react-app/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  //  </StrictMode>
)
