import React from 'react'
import { Link } from 'react-router-dom'
import './okumayabasla.css'
import concat from '../../images/concat.png'

const Okumayabasla = () => {
  return (
    <div className='okumayabasla'>
      <p className='okumayabaslap'>RKM'yi Yanında Taşı</p>
      <p style={{fontWeight:'bold'}} className='okumayabaslaptwo'>Her yerde, çevrimdışı olduğunda bile, oku ve yaz.</p>
      <br />
      <button><Link to='/yaz' className='okumayabaslalink' target='_top'>Yazmaya Başla</Link></button>
      <img src={concat} alt="rkm" className='concat'/>
    </div>
  )
}

export default Okumayabasla
