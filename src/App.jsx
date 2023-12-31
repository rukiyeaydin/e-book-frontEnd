import './App.css';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import Anasayfa from './routes/Anasayfa';
import Politikalar from './routes/Politikalar'
import Kategoriler from './routes/Kategoriler';
import Yaz from './routes/Yaz';
import Profil from './routes/Profil'
import Ayarlar from './routes/Ayarlar';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Kitap from './routes/Kitap';
import Yaznext from './routes/Yaznext';
import Kitapbilgi from './routes/Kitapbilgi';

import Aksiyon from './routes/kategoriler/Aksiyon';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path='/kategoriler/aksiyon' element={<Aksiyon/>} />
      <Route path="/politikalar" element={<Politikalar/>} />
      <Route path='/kategoriler' element={<Kategoriler/>} />
      <Route path='/yaz' element={<Yaz/>} />
      <Route path='/profil' element={<Profil/>} />
      <Route path='/ayarlar' element={<Ayarlar/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/kitap' element={<Kitap/>} />
      <Route path='/kitapno' element={<Yaznext/>} />
      <Route path='/kitap-info' element={<Kitapbilgi/>} />
    </Routes>
    </>
  );
}

export default App;
