import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';

import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal } from './styled';

export const SliderMachinesModal = (): JSX.Element => {
  const {
    configureCloseSliderMachinesModal,
    openSliderMachinesModal,
  } = useContext(HomeDataContext);

  const handleClose = () => {
    configureCloseSliderMachinesModal();
  };

  return (
    <Modal
      open={openSliderMachinesModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
        <ModalContainer>
          <h2>teste</h2>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
