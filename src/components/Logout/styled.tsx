import styled from 'styled-components';
import { PRIMARY_BLUE } from '@styles/settings/colors';

export const LogoutTextStyled = styled.div`
  color: ${PRIMARY_BLUE};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

export const LogoutWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 18px;
`;
