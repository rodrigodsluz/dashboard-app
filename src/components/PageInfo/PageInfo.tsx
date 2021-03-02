import React from 'react';
import { Typography, Breadcrumb } from 'd1-components';

import {
  ContentButtonStyled,
  ContentTitleStyled,
  PageInfoWrapperStyled,
} from './styled';

type BreadcrumbDataProps = {
  levelAction: () => void;
  nameRoute: string;
};

type Props = {
  title: string;
  children: React.ReactNode;
  breadcrumbData: Array<BreadcrumbDataProps>;
};

/**
 * @export
 * @component
 * @function
 * @name PageInfo
 *
 * @description
 * Responsável por montar o breadcrumb e o nome da página.
 */
export const PageInfo = ({ children, title, breadcrumbData }: Props) => {
  return (
    <PageInfoWrapperStyled>
      <ContentTitleStyled>
        <Typography color="#3E4157" bold fontSize="16px" bottom="10px">
          {title}
        </Typography>
        <Breadcrumb loading={false} levels={breadcrumbData} />
      </ContentTitleStyled>
      <ContentButtonStyled>{children}</ContentButtonStyled>
    </PageInfoWrapperStyled>
  );
};
