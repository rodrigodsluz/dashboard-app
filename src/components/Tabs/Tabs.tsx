import React from 'react';

import TabItem from '@components/Tabs/components/TabItem';

import { TabsStyled } from '@components/Tabs/styled';
import useTabs from '@components/Tabs/useTabs';

type TabDataType = {
  id: string;
  text: string;
  index: number;
  active?: boolean;
};

type Props = {
  data: Array<TabDataType>;
  setTabActive: (param: number) => void;
  tabActive: number;
};

/**
 * @export
 * @component
 * @name Tabs
 *
 * @description
 * Responsável por agrupar o conteudo
 */
export const Tabs = ({ data, setTabActive, tabActive }: Props): JSX.Element => {
  const { indexActive, handleClickChangeTab } = useTabs();
  return (
    <TabsStyled>
      {data.map((item, index) => {
        return (
          <TabItem
            key={item.id}
            text={item.text}
            active={index === tabActive}
            onChangeTabs={() => {
              handleClickChangeTab(item.index);
              setTabActive(item.index);
            }}
          />
        );
      })}
    </TabsStyled>
  );
};
