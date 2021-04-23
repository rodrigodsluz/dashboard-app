import { createContext, useState } from 'react';
type Type = {
  name?: string;
  urlImg?: string;
  ocupation?: string;
  open?: boolean;
  configureUsername?: (name: string) => void;
  configureURLImg?: (url: string) => void;
  configureOcupation?: (ocupation: string) => void;
  openModal?: () => void;
  closeModal?: () => void;
  startDate?: string;
  endDate?: string;
  configureStartDate?: (start: string) => void;
  configureEndDate?: (end: string) => void;
  openSettingModal?: boolean;
  configureOpenSettingModal?: () => void;
  configureCloseSettingModal?: () => void;
  openErrorModal?: boolean;
  configureOpenErrorsModal?: () => void;
  configureCloseErrorsModal?: () => void;
  keyUser?: string;
  configureKeyUser?: (key: string) => void;
  configureCloseSliderMachinesModal?: () => void;
  configureOpenSliderMachinesModal?: () => void;
  openSliderMachinesModal?: boolean;
  openNewUserModal?: boolean;
  configureOpenNewUserModal?: () => void;
  configureCloseNewUserModal?: () => void;
};

type Props = {
  children: React.ReactNode;
};
export const HomeDataContext = createContext<Type>({});

const HomeDataContextProvider = ({ children }: Props): JSX.Element => {
  const [name, setName] = useState('Leo');
  const [urlImg, setUrlImg] = useState('');
  const [keyUser, setKeyUser] = useState('');
  const [open, setOpen] = useState(false);
  const [ocupation, setOcupation] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openErrorModal, setErrorModal] = useState(false);
  const [openSliderMachinesModal, setSliderMachinesModal] = useState(false);
  const [openNewUserModal, setNewUserModal] = useState(false);
  /**
   *
   * @export
   * @function
   * @name configureUsername
   *
   * @description
   *  Salva o nome do usuário
   */

  function configureUsername(username: string) {
    setName(username);
  }

  /**
   *
   * @export
   * @function
   * @name configureURLImg
   *
   * @description
   *  Salva a URL da imagem de usuário
   */

  const configureURLImg = (url: string) => {
    setUrlImg(url);
  };

  /**
   *
   * @export
   * @function
   * @name configureOcupation
   *
   * @description
   *  Salva a ocupação do usuário
   */

  const configureOcupation = (ocupation: string) => {
    setOcupation(ocupation);
  };

  /**
   *
   * @export
   * @function
   * @name openModal
   *
   * @description
   *  Seta para abrir o modal
   */

  const openModal = () => {
    setOpen(!open);
  };

  /**
   *
   * @export
   * @function
   * @name closeModal
   *
   * @description
   *  Fecha o modal
   */

  const closeModal = () => {
    setOpen(false);
  };

  /**
   *
   * @export
   * @function
   * @name configureStartDate
   *
   * @description
   *  Salva a data de inicio para usar na pesquisa
   */

  const configureStartDate = (start: string) => {
    setStartDate(start);
  };

  /**
   *
   * @export
   * @function
   * @name configureEndDate
   *
   * @description
   *  Salva a data final  para usar na pesquisa
   */

  const configureEndDate = (end: string) => {
    setEndDate(end);
  };

  /**
   *
   * @export
   * @function
   * @name configureOpenSettingModal
   *
   * @description
   *  Abre o modal de configurações
   */

  const configureOpenSettingModal = () => {
    setOpenSettingModal(!open);
  };

  /**
   *
   * @export
   * @function
   * @name configureCloseSettingModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureCloseSettingModal = () => {
    setOpenSettingModal(false);
  };

  /**
   *
   * @export
   * @function
   * @name configureOpenErrorsModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureOpenErrorsModal = () => {
    setErrorModal(true);
  };

  /**
   *
   * @export
   * @function
   * @name configureCloseErrorsModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureCloseErrorsModal = () => {
    setErrorModal(false);
  };

  /**
   *
   * @export
   * @function
   * @name configureKeyUser
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureKeyUser = (key: string) => {
    setKeyUser(key);
  };

  /**
   * @export
   * @function
   * @name configureOpenSliderMachinesModal
   *
   * @description
   *  Abre o modal de slider de configuração de maquinas
   */

  const configureOpenSliderMachinesModal = () => {
    setSliderMachinesModal(true);
  };

  /**
   * @export
   * @function
   * @name configureCloseSliderMachinesModal
   *
   * @description
   *  Fecha o modal de slider de configuração de maquinas
   */

  const configureCloseSliderMachinesModal = () => {
    setSliderMachinesModal(false);
  };

  /**
   * @export
   * @function
   * @name configureOpenNewUserModal
   *
   * @description
   *  Abre o modal de criação de usuario
   */

  const configureOpenNewUserModal = () => {
    setNewUserModal(true);
  };

  /**
   * @export
   * @function
   * @name configureCloseNewUserModal
   *
   * @description
   *  Fecha o modal de criação de usuario
   */

  const configureCloseNewUserModal = () => {
    setNewUserModal(false);
  };


  return (
    <HomeDataContext.Provider
      value={{
        endDate,
        startDate,
        configureUsername,
        configureURLImg,
        configureOcupation,
        name,
        urlImg,
        ocupation,
        openModal,
        open,
        configureEndDate,
        configureStartDate,
        closeModal,
        configureOpenSettingModal,
        configureCloseSettingModal,
        openSettingModal,
        configureCloseErrorsModal,
        configureOpenErrorsModal,
        openErrorModal,
        configureKeyUser,
        keyUser,
        configureCloseSliderMachinesModal,
        configureOpenSliderMachinesModal,
        openSliderMachinesModal,
        configureOpenNewUserModal,
        configureCloseNewUserModal,
        openNewUserModal,
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
