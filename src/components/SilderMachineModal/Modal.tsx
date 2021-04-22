import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import { Typography, OutlineButton, Spacing } from '@d1.cx/components';
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
          <Typography fontSize="16px" vertical="10px">
            Selecione o número de máquinas que deseja ligar:
          </Typography>
          <input type="range" min="1" max="100" value="50" id="myRange" />
          <Spacing vertical="5px" />
          <OutlineButton>Ligar máquinas</OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
