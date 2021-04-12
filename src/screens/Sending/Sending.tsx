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
          <Spacing vertical="10px" />
          <Typography htmlTag="strong" fontSize="32px">
            Sending Events
          </Typography>
          <Spacing vertical="10px" />
          <StickyHeadTable />
        </TableContent>
      </TableContainer>
    </Container>
  </>
);
