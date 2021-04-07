import React, { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';

import { Info, InfoBtn, ModalContainer } from './styled';
import { Modal, OutlineButton, Typography } from '@d1.cx/components';
import StoppedMovementsTable from '../StoppedMovementsTable';

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: 'white',
  },
  tooltip: {
    backgroundColor: 'white',
    color: '#3E4157',
    fontWeight: 'bold',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: '14px',
  },
}))(Tooltip);

export const AlertContent = ({ data, homeData }): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Alert severity="warning">
      <AlertTitle>Atenção</AlertTitle>
      Existe(m) {data ? <strong>{data} processos executando</strong> : '_'}
      processamento(s) com mais de 24hs.{' '}
      <InfoBtn onClick={() => setOpen(!open)}>
        <TooltipArrow
          title="Clique para ver os processos!"
          placement="right"
          arrow
        >
          <Info>!</Info>
        </TooltipArrow>
      </InfoBtn>
      <Modal open={open} title="Relatório para conferência">
        <Typography
          htmlTag="h2"
          fontSize="13px"
          horizontal="15px"
          vertical="10px"
        >
          Segue abaixo informações do(s) movimento(s) que precisam da sua
          atenção!
        </Typography>

        <Typography
          htmlTag="h2"
          fontSize="13px"
          horizontal="15px"
          vertical="0px"
        >
          Caso esses movimentos já estejam finalizados, por favor executar o
          comando de conclusão!
        </Typography>

        <ModalContainer>
          <StoppedMovementsTable data={homeData} />
          <OutlineButton
            secondary
            handleClick={() => {}}
            onClick={() => setOpen(false)}
          >
            Fechar
          </OutlineButton>
        </ModalContainer>
      </Modal>
    </Alert>
  );
};