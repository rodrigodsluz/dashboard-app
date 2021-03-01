import { Circle, Container, Status } from './style';
/**
 * @export
 * @component
 * @name LineHeader
 *
 * @description
 * Linha degrade exibida no começo de toda página
 */
export const StatusCircle = ({ color, status, number }): JSX.Element => {
  return (
    <Container>
      <Circle color={color} />
      <Status>
        {status}: {number}
      </Status>
    </Container>
  );
};
