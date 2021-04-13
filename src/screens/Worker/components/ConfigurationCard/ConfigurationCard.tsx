import { Typography } from '@d1.cx/components';
import { Tachometer, CcmCloud } from '@d1.cx/icons';
import { Container } from './style';
/**
 * @export
 * @component
 * @name LineHeader
 *
 * @description
 * Linha degrade exibida no começo de toda página
 */
export const ConfigurationCard = ({ color, status, number }): JSX.Element => {
  return (
    <Container>
      {status === 'Jobs Ativos' ? (
        <Tachometer width="40px" color="#ea4335" />
      ) : (
        <CcmCloud width="40px" color="#34a853" />
      )}
      <Typography fontSize="16px">{status}</Typography>
      <Typography fontSize="30px" vertical="10px">{number}</Typography>
    </Container>
  );
};
