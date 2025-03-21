import Button from '../components/ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useRef } from 'react';
import { closeModal } from '../../../core/store/auth/modalSlice.jsx';
import InputField from '../components/ui/InputField.jsx';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(closeModal());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen, handleClickOutside]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {/* Background hình ảnh */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/images/background.jpg')` }}
      ></div>

      {/* Modal content */}
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-2xl w-96 relative z-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Đăng nhập</h2>

        {/* Email Input */}
        <InputField
          label="Email"
          type="text"
          placeholder="Nhập email của bạn"
        />

        {/* Password Input */}
        <InputField
          label="Mật khẩu"
          type="password"
          placeholder="Nhập mật khẩu của bạn"
        />

        {/* Login Button */}
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Đăng nhập
        </Button>

        {/* Close Button */}
        <Button
          className="mt-4 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => dispatch(closeModal())}
        >
          Đóng
        </Button>
      </div>
    </div>
  );
};

export default React.memo(LoginModal);