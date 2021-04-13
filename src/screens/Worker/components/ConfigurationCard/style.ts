import styled from 'styled-components';

type Props = {
  jobs?: boolean;
};

export const Container = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 190px;
  margin-left: 5px;
  background-color: #fff;
  outline: none;
  cursor: ${(props) => (props.jobs ? 'pointer' : 'unset')};
`;
