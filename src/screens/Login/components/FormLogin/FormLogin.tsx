import React, { useEffect, createRef } from 'react';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3';
import {
  FlexContent,
  Input,
  Typography,
  OutlineButton,
  PrimaryButton,
} from 'd1-components';

import Notification from '@components/Notification';
import { RECAPTCHA_SITE_KEY } from '@configuration/recaptchaKey';

import { ButtonSpacingStyled } from './styled';
import useFormLogin from './useFormLogin';

/**
 * @export
 * @component
 * @function
 * @name FormLogin
 *
 * @description
 * Responsável por conter o componente FormLogin
 */
export const FormLogin = () => {
  const {
    openNotification,
    handleCloseNotification,
    handleFormLogin,
    errorLogin,
    inputLogin,
    handleChangeLogin,
    errorPassword,
    handleChangePassword,
    inputPassword,
    setErrorLogin,
    setErrorPassword,
    disableButtons,
    handleResetForm,
    loadingButton,
    verifyCallback,
  } = useFormLogin();
  /**
   * @todo
   * Temporario
   */
  const captchaRef: any = createRef();
  useEffect(() => {
    loadReCaptcha(RECAPTCHA_SITE_KEY);
  }, []);

  return (
    <form onSubmit={handleFormLogin}>
      <Notification
        text="Login e/ou senha incorretos"
        open={openNotification}
        handleClick={handleCloseNotification}
      />
      <Typography color="#484848" fontSize="12px" bold bottom="15px">
        Login
      </Typography>
      <Input
        name="login"
        error={errorLogin}
        handleChange={handleChangeLogin}
        autoFocus
        value={inputLogin}
        width="100%"
        autoComplete="off"
        setError={setErrorLogin}
        maxLength={50}
      />
      <Typography color="#484848" fontSize="12px" bold top="5px" bottom="15px">
        Senha
      </Typography>
      <Input
        type="password"
        name="password"
        error={errorPassword}
        handleChange={handleChangePassword}
        value={inputPassword}
        width="100%"
        autoComplete="off"
        setError={setErrorPassword}
        maxLength={50}
      />

      <FlexContent center>
        <ButtonSpacingStyled>
          <PrimaryButton
            type="submit"
            disabled={disableButtons}
            loading={loadingButton}
          >
            Enviar
          </PrimaryButton>
          <OutlineButton
            disabled={disableButtons}
            handleClick={handleResetForm}
          >
            Limpar
          </OutlineButton>
        </ButtonSpacingStyled>
      </FlexContent>
      <ReCaptcha
        ref={(ref) => {
          captchaRef.current = ref;
        }}
        sitekey={RECAPTCHA_SITE_KEY}
        action="submit"
        verifyCallback={verifyCallback}
      />
    </form>
  );
};