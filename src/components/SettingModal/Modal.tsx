import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import { GripLines } from '@d1.cx/icons';
import { OutlineButton, Spacing, Typography } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Icon } from './styled';
import { ErrosModal } from './components/Metrics/Errors/Erros';

export const SettingModal = (): JSX.Element => {
  const {
    configureCloseSettingModal,
    openSettingModal,
    openErrorModal,
    configureOpenErrorsModal,
  } = useContext(HomeDataContext);

  const handleClose = () => {
    configureCloseSettingModal();
  };

  const handleOpenErroModal = () => {
    configureOpenErrorsModal();
  };

  return (
    <>
      <Modal
        open={openSettingModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CenterModal>
          <ModalContainer>
            <Icon onClick={handleOpenErroModal}>
              <GripLines color="#9196ab" width="30px" />
              <Typography>Erros</Typography>
            </Icon>

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
      <ErrosModal open={openErrorModal} />
    </>
  );
};
