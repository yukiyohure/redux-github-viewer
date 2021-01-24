import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement("#root"); // アクセシビリティのために宣言

const ModalWrapper = ({isOpen, component, onRequestClose}) => {
  return (
    <>
      {/* onRequestCloseに渡した関数は、モーダルの外側をクリックしたときに実行される */}
      {isOpen && <Modal isOpen={isOpen} onRequestClose={onRequestClose}>{component}</Modal>}
    </>
  );
}

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool,
  component: PropTypes.object,
  onRequestClose: PropTypes.func,
}

export default ModalWrapper;