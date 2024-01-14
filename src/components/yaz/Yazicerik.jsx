import React, { useState, useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import './yazicerik.css'
import 'quill/dist/quill.snow.css'; 

const Yazicerik = () => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        
            [{ color: [] }, { background: [] }],
            ['clean'],
            [{ size: ['small', false, 'large', 'huge'] }],
        ],
    };
    const { quill, quillRef } = useQuill({modules});
    const [value,setValue]=useState();

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

      const handleKaydet = () => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML('');
         // quill.setText('')  /* veya bu satır */
        }
      }


  return (
    <div className='yazicerik'>
        <h2>Babalar ve Oğullar</h2>
        <div className="yazicerikbb">
          <p className='yhbaslik'>Bölüm Başlığı</p>
          <input type="text" placeholder='Bölüm başlığı' className='yazicerikinput'/>
        </div>
        <div className='quill'>
            <div ref={quillRef} />
        </div>
        <button className='yazicerikbtn' onClick={handleKaydet}>Kaydet</button>
    </div>
  )
}

export default Yazicerik
