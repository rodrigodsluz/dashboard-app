import React from 'react';

import TabLine from '@components/Tabs/components/TabLine';
import { TabItemStyled, TabTextStyled } from './styled';

type Props = {
  text: string;
  active?: boolean;
  onChangeTabs: () => void;
};

/**
 * @export
 * @component
 * @name TabItem
 *
 * @description
 * Responsável por conter as opcoes das tabs
 */
export const TabItem = ({
  text,
  active = false,
  onChangeTabs,
}: Props): JSX.Element => {
  return (
    <TabItemStyled>
      <TabTextStyled active={active} onClick={onChangeTabs}>
        {text}
      </TabTextStyled>
      {active && <TabLine />}
    </TabItemStyled>
  );
};
