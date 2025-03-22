import React, { forwardRef } from 'react';

const ModalStyle = forwardRef(({ children }, ref) => {
  return (
    <div className="bg-white grid grid-cols-2 w-11/12 max-w-6xl h-auto min-h-11/12 rounded-2xl shadow-2xl overflow-hidden" ref={ref}>
      {/*left*/}
      <div className="bg-gray-100 p-12 flex flex-col justify-between h-full relative">
        <div className="flex text-xl">Welcome!</div>
        <img
          src="/src/assets/react.svg"
          alt="Logo"
          className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-32 h-32 object-contain"
        />
        <div className="flex items-center">
          <span className="flex text-sm text-black/80 mr-1">Are you a member?</span>
          <span className="flex relative text-sm font-medium cursor-pointer after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-0">
            Log in now
          </span>
        </div>
      </div>

      {/*right*/}
      <div className="p-12 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
});

export default React.memo(ModalStyle);