import React from 'react'
import babalar from '../../images/seninicinoneriler/babalar.jpg'
import { AiFillEye, AiFillStar } from 'react-icons/ai'

const Profilkitaplar = () => {
  return (
    <div className="phalt">
        <p style={{borderBottom:'1px solid black'}} className='phaltbaslik'>Kitaplar</p>
        <div className="phkitaplar">
        <div className="phkitap">
            <img src={babalar} alt="" />
            <div className="phsag">
            <p className="phbaslik">Babalar ve Oğullar</p>
            <p className="phyazar">By Turgenyev</p>
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
            <img src={babalar} alt="" />
            <div className="phsag">
            <p className="phbaslik">Babalar ve Oğullar</p>
            <p className="phyazar">By Turgenyev</p>
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
