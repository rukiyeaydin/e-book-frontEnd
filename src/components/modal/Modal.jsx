import React, { useState } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    // <>
    //   <div onClick={toggleModal} className="btn-modal"><FaSearch className="modalikon"/></div>

    //   {modal && (
    //     <div className="modal">
    //       <div onClick={toggleModal} className="overlaymodal"></div>
    //       <div className="modal-content">
    //         <input type="text" placeholder="Kitap Ara" className="modalinput"/>
    //         <div className="modal-results">
    //           <Link to="/kitap" className="modal-result" onClick={toggleModal}>Babalar ve Oğullar</Link>
    //           <Link to="/kitap" className="modal-result" onClick={toggleModal}>Babalar ve Oğullar</Link>
    //           <Link to="/kitap" className="modal-result" onClick={toggleModal}>Babalar ve Oğullar</Link>
    //           <Link to="/kitap" className="modal-result" onClick={toggleModal}>Babalar ve Oğullar</Link>
    //           <Link to="/kitap" className="modal-result" onClick={toggleModal}>Babalar ve Oğullar</Link>
    //         </div>
    //         <div className="close-modal" onClick={toggleModal}><IoIosClose className="close-modal-icon"/></div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <>
      <div onClick={toggleModal} className="btn-modal"><FaSearch className="modalikon"/></div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlaymodal"></div>
          <div className="modal-content">
            <div className="modalinput">
              <input type="text" placeholder="Kitap Adı" className="modalinputin"/>
            </div>
            <div className="modal-results">
              <div className="modal-result">
                <Link className="modal-result-link">Babalar ve Oğullar</Link>
              </div>
              <div className="modal-result">
                <Link className="modal-result-link">Babalar ve Oğullar</Link>
              </div>
              <div className="modal-result">
                <Link className="modal-result-link">Babalar ve Oğullar</Link>
              </div>
            </div>
            <div className="close-modal" onClick={toggleModal}><IoIosClose className="close-modal-icon"/></div>
          </div>
        </div>
      )}
    </>
  );
}