import React from 'react'
import './kitapinfo.css'
import { Link } from 'react-router-dom'
import babalar from "../../images/seninicinoneriler/babalar.jpg"

const Kitapinfo = () => {
  return (
    <div className='kitapinfo'>
        <div className="kitapinfoinc">
            <div className="kitapinfoleft">
                <img src={babalar} alt="" />
            </div>
            <div className="kitapinforight">
                <h3 style={{marginBottom:"10px"}}>Babalar ve Oğullar</h3>
                <p className='kitapinfoshortdesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore perferendis laborum adipisci minima facere fugit natus iste, maxime rerum. Magni consectetur facere tempore eos. Nulla quas ut ex ad aperiam accusantium libero hic voluptates pariatur? Aliquid quae autem fugiat blanditiis, culpa veniam, perspiciatis maiores eveniet dolorum labore exercitationem porro illum esse facere rerum adipisci fuga cumque quod odit. Odit sint hic tempora debitis magni quod. Libero culpa est magni voluptatibus possimus cum doloremque, nulla aspernatur quibusdam sequi odio architecto eos sunt tempore exercitationem obcaecati quod numquam dolore. At cumque earum incidunt placeat labore voluptas dicta iste a, numquam corporis.</p>
                <p style={{marginTop:"20px"}}><b>Kategori :  </b> <Link className='kitapinfolinks' to="/kategoriler/aksiyon">Aksiyon</Link></p>
                <p style={{marginTop:"20px"}}><b>Yazar :  </b> <Link className='kitapinfolinks' to="/profil" >Turgenyev</Link></p>
                <button className='kitapinfobuton'><Link to="/kitap" target='_top' className='kitapinfolink'>Okumaya Başla</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Kitapinfo
