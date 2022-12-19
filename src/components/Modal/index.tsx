import style from './modal.module.scss';
import { useEffect } from "react";

interface Modal {
  isOpen: boolean,
  setIsOpen: boolean,
  children: String,
  closeButton: boolean,
}
export default function Modal<Modal>({ children,  isOpen, setIsOpen, closeButton = true, id="modal" }) {

  useEffect(() => {
    if (!window) return;
    const keyUpListener = (e) => {
      console.log(e.keyCode);
      if (e.keyCode === 27) setIsOpen(false);
    }
  
    window.addEventListener("keyup", keyUpListener);
    return () => {
      window.removeEventListener('keyup',keyUpListener);
    }

  },[]);
  

  const handleBackdropClick = (e) => {
    if (e) e.preventDefault();
    if (e.target.id !== id) return;
    setIsOpen(false)
  }


  if (!isOpen) return null;
  return (
    <div id={id} className={style.backdrop}  onClick={handleBackdropClick}>
      <div className={style.modal}>
        {closeButton ? <button type="button" className={style.modalClose} onClick={()=> setIsOpen(false)}/> : null}
        {children}
      </div>
    </div>
  )
}
