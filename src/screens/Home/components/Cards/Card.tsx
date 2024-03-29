import React, { useState } from 'react';
import { CardBody, CardHeader } from '@d1.cx/components';
import { CardContainer, PanelCard, Card, CardStatus, Count } from './styled';

/**
 * @export
 * @component
 * @name CardContent
 *
 * @description
 * Responsavel por exibir os cards que filtram por status
 */

export const CardContent = ({ setStatus, data, selected }): JSX.Element => {
  return (
    <CardContainer>
      <PanelCard>
        <Card
          onClick={setStatus('FINISHED', !selected.finished)}
          status="finalizados"
          selected={selected.finished}
        >
          <CardHeader>
            <CardStatus>Finalizados</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[2]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
      <PanelCard>
        <Card
          onClick={setStatus('RUNNING', !selected.running)}
          status="executando"
          selected={selected.running}
        >
          <CardHeader>
            <CardStatus>Executando</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[1]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
      <PanelCard>
        <Card
          onClick={setStatus('ERROR', !selected.error)}
          status="erros"
          selected={selected.error}
        >
          <CardHeader>
            <CardStatus>Erros</CardStatus>
          </CardHeader>
          <CardBody>{data ? <Count>{data[0]}</Count> : null}</CardBody>
        </Card>
      </PanelCard>
    </CardContainer>
  );
};
