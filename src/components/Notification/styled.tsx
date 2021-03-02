import styled from 'styled-components';
import { NOTIFICATION_COLOR, TEXT_COLOR } from '../../styles/settings/colors';

export const NotificationStyled = styled.div`
  background-color: ${NOTIFICATION_COLOR};
  border-radius: 5px;
  color: ${TEXT_COLOR};
  display: flex;
  font-size: 12px;
  font-weight: 700;
  height: 33px;
  margin-bottom: 30px;
  padding: 10px 15px;
  width: 100%;

  span {
    cursor: pointer;
  }
`;
