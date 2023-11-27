import React, { useState } from 'react';
import './kategorilericerik.css';
import { AiFillEye, AiFillStar } from 'react-icons/ai'
import babalar from '../../images/seninicinoneriler/babalar.jpg'

const Kategorilericerik = ({ categoryName }) => {
  const [data, setData] = useState('En çok okunanlar');

  const handleInputChange = (event) => {
    setData(event.target.value);
  }

  return (
    <div className='kategorilericerik'>
      <h1 className='kih1'>{categoryName}</h1>
      <div className="ustbilgi">
        <form className='kiform'>
          <select value={data} onChange={handleInputChange}>
            <option value="En çok okunanlar">En çok okunanlar</option>
            <option value="En çok beğenilenler">En çok beğenilenler</option>
            <option value="Son çıkanlar">Son çıkanlar</option>
          </select>
        </form>
      </div>
      <div className="kikitaplar">
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed.</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>
        <div className="kikitap">
          <img src={babalar} alt="" />
          <div className="kisag">
            <p className="kibaslik">Babalar ve Oğullar</p>
            <p className="kiyazar">By Turgenyev</p>
            <div className="kiistatik">
              <span className="read-count">
                <AiFillEye className='kiicon'/>443K
              </span>
              <span className="vote-count">
                <AiFillStar className='kiicon'/>541
              </span>
            </div>
            <div className="kitext">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, qui?</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Kategorilericerik;
