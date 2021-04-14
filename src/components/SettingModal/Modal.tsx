import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';

import { Input, OutlineButton, Spacing } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal } from './styled';

export const SettingModal = (): JSX.Element => {
  const { configureCloseSettingModal, openSettingModal } = useContext(
    HomeDataContext
  );

  const handleClose = () => {
    configureCloseSettingModal();
  };

  return (
    <Modal
      open={openSettingModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
        <ModalContainer>
          <Spacing vertical="10px" />
          <OutlineButton
            secondary
            handleClick={() => {}}
            onClick={() => {
              configureCloseSettingModal();
            }}
          >
            Atualizar
          </OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
