import { Tachometer } from '@d1.cx/icons';
import { Circle, Container, Status } from './style';
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
       <Tachometer width="60px" color="#000"  /> 
      <Status>
        {status}: {number}
      </Status>
    </Container>
  );
};
