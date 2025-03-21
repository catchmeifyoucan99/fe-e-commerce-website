import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../store/auth/modalSlice.jsx';
import LoginModal from '../../modules/auth/popup/LoginModal.jsx';
import React from 'react';

const HomePage = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return(
    <div>
      <h1 className="">Trang chủ</h1>
      <button onClick={handleOpenModal}>Mở Modal</button>
      {isOpen && <LoginModal/>}
    </div>

  )
}

export default React.memo(HomePage);