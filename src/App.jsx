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

import Aksiyon from './routes/kategoriler/Aksiyon';
import Ask from './routes/kategoriler/Ask';
import Bilimkurgu from './routes/kategoriler/Bilimkurgu';
import Fantastik from './routes/kategoriler/Fantastik';
import Korku from './routes/kategoriler/Korku';
import Macera from './routes/kategoriler/Macera';
import Mizah from './routes/kategoriler/Mizah';
import Siir from './routes/kategoriler/Siir';
import Tarih from './routes/kategoriler/Tarih';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path="/politikalar" element={<Politikalar/>} />
      <Route path='/kategoriler' element={<Kategoriler/>} />
      <Route path='/yaz' element={<Yaz/>} />
      <Route path='/profil' element={<Profil/>} />
      <Route path='/ayarlar' element={<Ayarlar/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/kitap' element={<Kitap/>} />
      <Route path='/kitapno' element={<Yaznext/>} />
      <Route path='/kategoriler/aksiyon' element={<Aksiyon/>} />
      <Route path='/kategoriler/ask' element={<Ask/>} />
      <Route path='/kategoriler/bilimkurgu' element={<Bilimkurgu/>} />
      <Route path='/kategoriler/fantastik' element={<Fantastik/>} />
      <Route path='/kategoriler/korku' element={<Korku/>} />
      <Route path='/kategoriler/macera' element={<Macera/>} />
      <Route path='/kategoriler/mizah' element={<Mizah/>} />
      <Route path='/kategoriler/siir' element={<Siir/>} />
      <Route path='/kategoriler/tarih' element={<Tarih/>} />
    </Routes>
    </>
  );
}

export default App;
