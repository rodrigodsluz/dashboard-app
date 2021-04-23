import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import { GripLines, User } from '@d1.cx/icons';
import { OutlineButton, Spacing, Typography } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Icon, Wrapper } from './styled';
import { ErrosModal } from './components/Metrics/Errors/Erros';
import { CreateUserModal } from './components/CreateUserModal/Modal';

export const SettingModal = (): JSX.Element => {
  const {
    configureCloseSettingModal,
    openSettingModal,
    openErrorModal,
    configureOpenErrorsModal,
    configureOpenNewUserModal,
  } = useContext(HomeDataContext);

  const handleClose = () => {
    configureCloseSettingModal();
  };

  const handleOpenErroModal = () => {
    configureOpenErrorsModal();
  };

  const handleOpenNewUserModal = () => {
    configureOpenNewUserModal();
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
            <Wrapper>
              <Icon onClick={handleOpenNewUserModal}>
                <User color="#9196ab" width="30px" />
                <Typography>Usuários</Typography>
              </Icon>
              <Icon onClick={handleOpenErroModal}>
                <GripLines color="#9196ab" width="30px" />
                <Typography>Erros</Typography>
              </Icon>
            </Wrapper>
            <Spacing vertical="10px" />
            <OutlineButton
              secondary
              handleClick={() => {}}
              onClick={() => {
                configureCloseSettingModal();
              }}
            >
              Fechar
            </OutlineButton>
          </ModalContainer>
        </CenterModal>
      </Modal>
      <ErrosModal open={openErrorModal} />
      <CreateUserModal />
    </>
  );
};
