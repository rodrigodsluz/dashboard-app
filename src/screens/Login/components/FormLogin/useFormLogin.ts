import {
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
  useContext,
} from 'react';

import { redirect } from '@utils/redirect';
import { checkEmpty } from '@utils/validation';
import { setCookie } from '@utils/cookie';
import Services from '@src/services';
import { routes } from '@src/routes';
import { HomeDataContext } from '@src/context/HomeDataContext';

type UseFormLoginTypes = {
  openNotification: boolean;
  errorLogin: boolean;
  inputLogin: string;
  errorPassword: boolean;
  inputPassword: string;

  disableButtons: boolean;
  loadingButton: boolean;

  setErrorPassword: (value: boolean) => void;
  setErrorLogin: (value: boolean) => void;

  handleCloseNotification: (event: MouseEvent) => void;
  handleResetForm: (event: MouseEvent) => void;
  handleFormLogin: (event: ChangeEvent<HTMLFormElement>) => void;
  handleChangeLogin: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * @export
 * @hook
 * @name useFormLogin
 *
 * @description
 * Responsável por conter todos os estado e eventos do login.
 */
const useFormLogin = (): UseFormLoginTypes => {
  const {
    configureOcupation,
    configureURLImg,
    configureUsername,
    configureKeyUser,
  } = useContext(HomeDataContext);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [inputLogin, setInputLogin] = useState<string>('');
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [inputPassword, setInputPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [disableButtons, setDisableButtons] = useState<boolean>(false);
  const [loadingButton, setLoadingButtons] = useState<boolean>(false);

  /**
   * @function
   * @name handleCloseNotification
   *
   * @description
   * Responsável pelo evento por fechar a notificacão.
   */
  const handleCloseNotification = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setOpenNotification(false);
  }, []);

  /**
   * @function
   * @name handleFormLogin
   *
   * @description
   * Responsável pelo evento de click do botao login.
   */
  const handleFormLogin = useCallback(
    async (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      setOpenNotification(false);
      setErrorLogin(false);
      setErrorPassword(false);
      const email = event.target.login.value;
      if (checkEmpty(email)) {
        setErrorLogin(true);
        return;
      }

      const password = event.target.password.value;

      if (checkEmpty(password)) {
        setErrorPassword(true);
        return;
      }
      setLoadingButtons(true);
      setDisableButtons(true);
      const response = await Services.login.authentication({
        login: email,
        password,
      });
      if (response.error) {
        setOpenNotification(true);
        setLoadingButtons(false);
        setDisableButtons(false);
        return;
      }
      setCookie('token', response.data.access_token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('key', response.data.keyUser);

      redirect(routes.home);
    },
    []
  );

  /**
   * @function
   * @name handleChangeLogin
   *
   * @description
   * Responsável pelo evento de click do botao login.
   */
  const handleChangeLogin = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputLogin(event.target.value);
    },
    [inputLogin]
  );

  /**
   * @function
   * @name handleChangePassword
   *
   * @description
   * Responsável pelo evento de click do botao login.
   */
  const handleChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputPassword(event.target.value);
    },
    [inputPassword]
  );

  /**
   * @function
   * @name handleResetForm
   *
   * @description
   * Responsável por apagar todos os inputs.
   */
  const handleResetForm = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setInputLogin('');
    setInputPassword('');
  }, []);

  return {
    openNotification,
    inputLogin,
    errorLogin,
    inputPassword,
    errorPassword,
    disableButtons,
    loadingButton,
    handleCloseNotification,
    handleFormLogin,
    handleChangePassword,
    handleChangeLogin,
    setErrorLogin,
    setErrorPassword,
    handleResetForm,
  };
};

export default useFormLogin;
