import styled from 'styled-components';

interface Circle {
  color: string;
}

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div<Circle>`
  width: 30px;
  height: 30px;
  background-color: ${(props: Circle) => props.color};
  margin: 0 20px;
  border-radius: 50%;
`;

export const Status = styled.p`
  padding-top: 5px;
`;
