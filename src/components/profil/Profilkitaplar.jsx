import React from 'react'
import { Link } from 'react-router-dom'
import babalar from '../../images/seninicinoneriler/babalar.jpg'
import { AiFillEye, AiFillStar } from 'react-icons/ai'

const Profilkitaplar = () => {
  return (
    <div className="phalt">
        <p style={{borderBottom:'1px solid black'}} className='phaltbaslik'>Kitaplar</p>
        <div className="phkitaplar">
            <div className="phkitap">
                <Link to="/kitap"><img src={babalar} alt="" /></Link>
                <div className="phsag">
                    <Link to="/kitap" className="phbaslik" target='_top'>Babalar ve Oğullar</Link>
                    <Link to="/profil" target='_top' className='phyazarl'><p className="phyazar">By Turgenyev</p></Link>
                    <div className="phstat">
                        <span className="read-count">
                        <AiFillEye className='phicon'/>443K
                        </span>
                        <span className="vote-count">
                        <AiFillStar className='phicon'/>541
                        </span>
                    </div>
                    <div className="phtext">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
                    </div>
                </div>
            </div>
            <div className="phkitap">
                <Link to="/kitap"><img src={babalar} alt="" /></Link>
                <div className="phsag">
                    <Link to="/kitap" className="phbaslik" target='_top'>Babalar ve Oğullar</Link>
                    <Link to="/profil" target='_top' className='phyazarl'><p className="phyazar">By Turgenyev</p></Link>
                    <div className="phstat">
                        <span className="read-count">
                        <AiFillEye className='phicon'/>443K
                        </span>
                        <span className="vote-count">
                        <AiFillStar className='phicon'/>541
                        </span>
                    </div>
                    <div className="phtext">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profilkitaplar
