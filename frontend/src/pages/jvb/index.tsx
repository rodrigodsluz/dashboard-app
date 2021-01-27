import { Container, TableContainer, CardContainer } from './style';
import {
  Table,
  THead,
  TBody,
  Td,
  Tr,
  Th,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FlexContent,
  Typography,
  Spacing,
} from 'd1-components';

import StickyHeadTable from '../../components/Table/index';
import { Alert, AlertTitle } from '@material-ui/lab';
/**
 * @export
 * @component
 * @name LineHeader
 *
 * @description
 * Linha degrade exibida no começo de toda página
 */
export default function jvb() {
  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Container>
      <TableContainer>
        <Typography htmlTag="strong" fontSize="32px">
          Conference
        </Typography>
        <Spacing vertical="20px" />
        <StickyHeadTable />
        <Alert severity="warning">
          <AlertTitle>Atenção</AlertTitle>
          Existem <strong>56 processos executando!</strong> a mais de 24 horas.
        </Alert>
        <CardContainer>
          <Card>
            <CardHeader>
              <h2>Finalizado(s)</h2>
            </CardHeader>
            <CardBody>
              <h2>2</h2>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2>Executando</h2>
            </CardHeader>
            <CardBody>
              <h2>2</h2>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2>Erro(s)</h2>
            </CardHeader>
            <CardBody>
              <h2>2</h2>
            </CardBody>
          </Card>
        </CardContainer>
      </TableContainer>
    </Container>
  );
}

const getInitialProps = async ctx => {
  return {};
};
