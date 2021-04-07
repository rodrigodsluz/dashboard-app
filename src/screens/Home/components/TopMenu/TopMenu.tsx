import React, { useContext } from 'react';

import { OutlineButton, Typography } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';

import { TopMenu, DateInput, ContainerDate } from './styled';

export const Menu = ({ loading, submit }): JSX.Element => {
  const { configureStartDate, configureEndDate } = useContext(HomeDataContext);
  return (
    <TopMenu>
      <Typography htmlTag="strong" fontSize="32px">
        Conference
      </Typography>
      <ContainerDate>
        <Typography fontSize="16px">Inicio:</Typography>
        <DateInput
          type="date"
          placeholder="Set the date"
          onChange={({ target }) => {
            configureStartDate(target.value);
          }}
        />

        <Typography fontSize="16px">Fim:</Typography>
        <DateInput
          type="date"
          placeholder="Set the date"
          onChange={({ target }) => {
            configureEndDate(target.value);
          }}
        />
        <OutlineButton
          type="submit"
          loading={loading}
          disabled={loading}
          onClick={() => submit()}
        >
          Atualizar
        </OutlineButton>
      </ContainerDate>
    </TopMenu>
  );
};

export default Menu;
