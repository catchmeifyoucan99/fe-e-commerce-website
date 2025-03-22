import Button from '../components/ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useRef } from 'react';
import { closeModal } from '../../../core/store/auth/modalSlice.jsx';
import InputField from '../components/ui/InputField.jsx';
import ModalStyle from '../components/ui/ModalStyle.jsx';
import Checkbox from '../components/ui/Checkbox.jsx';
import SocialButton from '../components/ui/SocialButton.jsx';

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
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      {/* Modal content */}
      <ModalStyle ref={modalRef}>
        <span className="flex text-xl font-medium mb-9">
          Register with your e-mail
        </span>
        <InputField label="USERNAME (*)" placeholder="Username"/>
        <InputField label="EMAIL (*)" placeholder="E-mail"/>
        <div className="flex justify-between space-x-3">
          <InputField label="PASSWORD (*)" placeholder="Password"/>
          <InputField label="REPEAT PASSWORD (*)" placeholder="Repeat Password"/>
        </div>
        <span className="text-sm font-normal text-left">
          HL With You may keep me informed with personalized emails about products and services. See our
          {' '}
          <span className="font-medium">Privacy Policy</span>
          {' '}
          for more details.
        </span>
        <div className="flex flex-col space-y-6 mt-5">
          <Checkbox label="Please contact me via e-mail"/>
          <Checkbox label="I have read and accept the Terms and Conditions"/>
        </div>
        <span className="font-light text-xs text-black/70 mt-9">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </span>
        <Button className="py-6 mt-9">
          <span className="text-lg">Create Account</span>
        </Button>
        <span className="flex text-sm mt-9 mb-5">Or register with</span>
        <div className="flex justify-between items-center space-x-4">
          <SocialButton label="Facebook" icon="/src/assets/react.svg" />
          <SocialButton label="Github" icon="/src/assets/react.svg" />
          <SocialButton label="Google" icon="/src/assets/react.svg" />
        </div>
      </ModalStyle>
    </div>
  );
};

export default React.memo(LoginModal);