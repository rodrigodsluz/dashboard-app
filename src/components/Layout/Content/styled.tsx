import styled from 'styled-components';
import size from '../../../styles/settings/sizes';

/**
 * @function
 * @name getWidthContent
 *
 * @description Função responsável por fazer a logica de largura do componente Content.
 */
const getWidthContent = (full: boolean, shrink: boolean) => {
  let width = size.LAYOUT_WIDTH_DEFAULT;
  if (full) {
    width = '0px';
  }
  if (shrink) {
    width = size.LAYOUT_WIDTH_SHRINK;
  }
  return `width: calc(100% - ${width});`;
};

const getLeftContent = (full: boolean, shrink: boolean) => {
  if (full) {
    return '0px';
  }
  if (shrink) {
    return size.LAYOUT_WIDTH_SHRINK;
  }
  return size.LAYOUT_WIDTH_DEFAULT;
};

type Props = {
  full: boolean;
  shrink: boolean;
};
export const ContentStyled = styled.section<Props>`
  ${({ full, shrink }) => getWidthContent(full, shrink)};
  left: ${({ full, shrink }) => getLeftContent(full, shrink)};
  background: ${({ full }) => (full ? '#f7f9fa' : '#fff')};
  position: relative;
  height: 100%;
`;
