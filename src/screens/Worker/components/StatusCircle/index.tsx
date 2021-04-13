import { Circle, Container, Status } from './style';
/**
 * @export
 * @component
 * @name StatusCircle
 *
 * @description
 *  Responsável por montar os cards de status indicando quantos estão exucutando, com erros e afins...
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
