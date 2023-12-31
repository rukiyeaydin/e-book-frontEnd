import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import babalar from '../../images/seninicinoneriler/babalar.jpg'
import baslangic from '../../images/seninicinoneriler/baslangic.jpg'
import fareler from '../../images/seninicinoneriler/fareler.jpg'
import gurur from '../../images/seninicinoneriler/gurur.jpg'
import kuyucakli from '../../images/seninicinoneriler/kuyucakli.jpg'

const Favoriler = () => {
    const [isRightActive, setIsRightActive] = useState(false);

    const handleRightArrow = () => {
        setIsRightActive(true);
    }

    const handleLeftArrow = () => {
        setIsRightActive(false);
    }

  return (
    <div className='homepage'>
        <div className="favoriler">
            <p className='encokokunanlarp'>En Çok Beğenilenler #10</p>
            <div className="books">
                {!isRightActive && (
                <div className="set1">
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={babalar} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={baslangic} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={fareler} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={gurur} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={kuyucakli} alt="book" /></Link>
                    </div>
                </div>
                )}
                {isRightActive && (
                <div className="set2">
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={gurur} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={kuyucakli} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={babalar} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={baslangic} alt="book" /></Link>
                    </div>
                    <div className="book" style={{marginRight:'7px'}}>
                        <Link to='/kitap-info' target='_top'><img src={fareler} alt="book" /></Link>
                    </div>
                </div>
                )}
            </div>
            <div className="rl" style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <BsArrowLeftCircle className={`rlicon ${!isRightActive == true ? 'active' : ''}`} onClick={() => handleLeftArrow()} id='leftArrow'/>
                {isRightActive ? <p style={{width:'40px'}}>2 / 2</p> : <p style={{width:'40px'}}>1 / 2</p>}
                <BsArrowRightCircle className={`rlicon ${isRightActive == true ? 'active' : ''}`} onClick={() => handleRightArrow()} id='rightArrow'/>
            </div>
        </div>
    </div>
  )
}

export default Favoriler
