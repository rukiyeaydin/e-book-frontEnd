import React, { useState } from 'react'
import ba from '../../images/blackaurora.jpg'
import { Link } from 'react-router-dom'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { BsFillPersonCheckFill } from 'react-icons/bs'

const Profiltakipedilenler = () => {
    const [isFollowed, setIsFollowed] = useState(false)

    const handleTakipButton = () => {
        if(isFollowed){
            setIsFollowed(false)
        } else{
            setIsFollowed(true)
        }
    }

  return (
    <div className="phaltsec">
        <h2 style={{borderBottom:'1px solid black'}} className='phaltbaslik'>Takip Edilenler</h2>
        <div className="profiller">
            <div className="profil">
                <img src={ba} alt="profil-resmi" className='profil-resmi'/>
                <div className="profil-bilgi">
                    <p>Rukiye Aydın<nav></nav></p>
                    <Link className='profilusername'>rukiyeaydin</Link>
                </div>
                <button className={isFollowed ? 'profilbuton' : 'profilbuton active'} onClick={handleTakipButton}>
                    {
                    isFollowed ? <MdPersonAddAlt1 style={{marginRight:'5px'}}/> : <BsFillPersonCheckFill style={{marginRight:'5px'}}/>
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Profiltakipedilenler
