import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.div`
  width: 100%;
  img {
    display: block;
    width: 60px;
    margin-bottom: 45px;
  }
`;

/**
 * @export
 * @component
 * @name Logo
 *
 * @description
 * Reponsável por montar o componente Logo
 */
export const Logo = () => (
  <LogoStyle>
    <img src="/images/logotipo.png" alt="Logotipo" />
  </LogoStyle>
);
