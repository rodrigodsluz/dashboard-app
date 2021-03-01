import React from 'react';

import Template from '@screens/Login/components/Template';
import FormLogin from '@screens/Login/components/FormLogin';

/**
 * @export
 * @component
 * @name Body
 *
 * @description
 * Componente que exibe inputs email e senha para realizar login.
 */
export const Body = (): JSX.Element => {
  return (
    <Template.Content>
      <FormLogin />
    </Template.Content>
  );
};

export default Body;
