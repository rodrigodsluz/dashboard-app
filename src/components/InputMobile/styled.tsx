import styled from 'styled-components';

export function getBottom(bottom: string): string {
  return `margin-bottom: ${bottom}`;
}

type checkBottomParams = {
  bottom: string;
  error: boolean;
};

export function checkBottom({ bottom, error }: checkBottomParams): string {
  return bottom && !error ? getBottom(bottom) : '';
}

type InputStyledProps = {
  width: string;
  error: boolean;
};

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  height: 33px;
  border: 1px solid ${(props) => (props.error ? '#F27457' : '#CCCFDE')};
  border-radius: 5px;
  position: relative;
  padding: 0 0 0 15px;
  outline: 0;
  font-size: 13px;
  color: #9196ab;
  line-height: 33px;
  ${(props) => checkBottom({ bottom: '10px', error: props.error })};
  ::placeholder {
    color: #9196ab;
  }
  :hover {
    box-shadow: 1px 1px 10px #0000001a;
  }
  :focus {
    box-shadow: 1px 1px 10px #0000001a;
  }
`;

export const ErrorStyled = styled.div`
  display: flex;
  color: #f27457;
  font-size: 12px;
  margin-top: 5px;
`;
