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
        <Tachometer width="60px" color="#ea4335" />
      ) : (
        <CcmCloud width="60px" color="#34a853" />
      )}
      <Typography fontSize="20px">{status}</Typography>
      <Typography fontSize="40px" vertical="40px">{number}</Typography>
    </Container>
  );
};
