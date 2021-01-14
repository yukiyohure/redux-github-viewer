import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement("#root"); // アクセシビリティのため

const ModalWrapper = ({isOpen, component, onRequestClose}) => {
  return (
    <>
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