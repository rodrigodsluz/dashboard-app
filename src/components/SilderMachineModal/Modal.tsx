import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Modal } from '@material-ui/core';
import { Typography, OutlineButton, Spacing } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal } from './styled';

export const SliderMachinesModal = (): JSX.Element => {
  const {
    configureCloseSliderMachinesModal,
    openSliderMachinesModal,
  } = useContext(HomeDataContext);

  const [value, setValue] = useState('0');
  const handleClose = () => {
    configureCloseSliderMachinesModal();
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [value]
  );

  const handleSubmit = useCallback(() => {
    alert('Funcionaliade em desenvolvimento');
  }, [value]);

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
          <Typography
            fontSize="56px"
            vertical="30px"
            bottom="30px"
            align="center"
          >
            {value}
          </Typography>
          <input
            type="range"
            min="1"
            max="1000"
            value={value}
            id="myRange"
            onChange={handleChange}
          />
          <Spacing vertical="5px" />
          <OutlineButton onClick={handleSubmit}>Ligar máquinas</OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
