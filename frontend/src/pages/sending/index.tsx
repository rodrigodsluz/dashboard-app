import { Typography, Spacing } from 'd1-components';
import React from 'react';
import {
 Container, TableContainer, TableContent, SubTitle
} from './style';
import StickyHeadTable from '../../components/SendingTable/index';
import Sidebar from '../../components/Sidebar';
import useWindowDimensions from '../../hooks/useWindowDimensions';

/**
 * @export
 * @component
 * @name Sending
 *
 * @description
 * Página sending com tabela
 */

export default function Sending() {
  /*  const { height, width } = useWindowDimensions();

  console.log(width); */
  return (
    <Container>
      {/* {width > 500 ? <Sidebar /> : null} */}
      <Sidebar />

      <TableContainer>
        <TableContent>
          <Typography htmlTag="strong" fontSize="32px" >
            Sending Events
            <SubTitle>
              The .table-bordered class adds borders to a table:
            </SubTitle>
          </Typography>
          <Spacing vertical="20px" />
          <StickyHeadTable />
        </TableContent>
      </TableContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
