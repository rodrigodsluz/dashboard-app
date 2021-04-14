import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import { OutlineButton, Spacing } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Icon } from './styled';

export const ErrosModal = ({ open }): JSX.Element => {
  const { configureCloseErrorsModal } = useContext(HomeDataContext);

  const handleOpenErroModal = () => {
    configureCloseErrorsModal();
  };
  return (
    <Modal
      open={open}
      onClose={() => {}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
        <ModalContainer>
          <h2>erro</h2>
          <Spacing vertical="10px" />
          <OutlineButton secondary handleClick={handleOpenErroModal}>
            Voltar
          </OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
