import { CardBody, CardHeader } from '@d1.cx/components';
import React from 'react';
import { CardContainer, PanelCard, Card, CardStatus, Count } from './styled';

export const CardContent = ({ setStatus, data }): JSX.Element => {
  return (
    <CardContainer>
      <PanelCard>
        <Card onClick={setStatus('FINISHED')} status="finalizados">
          <CardHeader>
            <CardStatus>Finalizados</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[2]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
      <PanelCard>
        <Card onClick={setStatus('RUNNING')} status="executando">
          <CardHeader>
            <CardStatus>Executando</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[1]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
      <PanelCard>
        <Card onClick={setStatus('ERROR')} status="erros">
          <CardHeader>
            <CardStatus>Erros</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[0]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
    </CardContainer>
  );
};

export default CardContent;
