import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import { Spacing } from '@d1.cx/components';
import { ArrowLeft } from '@d1.cx/icons';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Row, BackButtuon } from './styled';
import PieGraph from '@src/components/PieGraph/PieGraph';
import SimpleTable from '../../Table/Table';

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
          <BackButtuon onClick={handleOpenErroModal}>
            <ArrowLeft width="45px" color="#000" />
          </BackButtuon>
          <Row>
            <PieGraph />
            <SimpleTable />
          </Row>
          <Spacing vertical="10px" />
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
