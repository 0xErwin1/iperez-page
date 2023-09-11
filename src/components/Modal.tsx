import React, { useRef } from "react";

interface ModalProps {
  show: boolean;
  title: string;
  titleStyle: string;
  onClose: () => void;
  children: React.ReactNode;
  icon: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  title,
  icon,
  titleStyle
}) => {
  const modalRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
      onKeyDown={handleKeyDown}
    >
      <div ref={modalRef} className="bg-white p-10 rounded-lg relative  max-w-5xl">
        <div className="flex justify-between items-center mb-5">
          <h2 className={titleStyle}>
            <i className={`${icon} mr-2`} />
            {title}
          </h2>
          <button className="text-red text-5xl" onClick={onClose} type="button">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
