import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage(){
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <div>
     <Button onClick={handleClose} primary>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept.
      </p>

  </Modal>

  // short circuit explanation
  // if showModal is true, show Modal, else if showModal is false, we show nothing

  return <div >
    <Button onClick={handleClick} primary>Open Modal</Button>
    {showModal && modal }
  </div>
}

export default ModalPage; 