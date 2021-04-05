import { Typography, Spacing } from '@d1.cx/components';
import React from 'react';
import { Container, TableContainer, TableContent, SubTitle } from './styled';
import StickyHeadTable from './components/SendingTable';
import Sidebar from '../../components/Sidebar';

/**
 * @export
 * @component
 * @name SendingScreen
 *
 * @description
 * Componente que contem os dados da tela de Sending.
 */
export const SendingScreen = (): JSX.Element => (
  <>
    <Container>
      <Sidebar />

      <TableContainer>
        <TableContent>
          <Typography htmlTag="strong" fontSize="32px">
            Sending Events
            <SubTitle>
              The .table-bordered class adds borders to a table:
            </SubTitle>
          </Typography>
          <Spacing vertical="10px" />
          <StickyHeadTable />
        </TableContent>
      </TableContainer>
    </Container>
  </>
);
