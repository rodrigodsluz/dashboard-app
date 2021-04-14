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
};

type Props = {
  children: React.ReactNode;
};
export const HomeDataContext = createContext<Type>({});

const HomeDataContextProvider = ({ children }: Props): JSX.Element => {
  const [name, setName] = useState('Leo');
  const [urlImg, setUrlImg] = useState('');
  const [open, setOpen] = useState(false);
  const [ocupation, setOcupation] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openErrorModal, setErrorModal] = useState(false);

  /**
   * @function
   * @component
   * @name configureUsername
   *
   * @description
   *  Salva o nome do usuário
   */

  function configureUsername(username: string) {
    setName(username);
  }

  /**
   * @function
   * @component
   * @name configureURLImg
   *
   * @description
   *  Salva a URL da imagem de usuário
   */

  const configureURLImg = (url: string) => {
    setUrlImg(url);
  };

  /**
   * @function
   * @component
   * @name configureOcupation
   *
   * @description
   *  Salva a ocupação do usuário
   */

  const configureOcupation = (ocupation: string) => {
    setOcupation(ocupation);
  };

  /**
   * @function
   * @component
   * @name openModal
   *
   * @description
   *  Seta para abrir o modal
   */

  const openModal = () => {
    setOpen(!open);
  };

  /**
   * @function
   * @component
   * @name closeModal
   *
   * @description
   *  Fecha o modal
   */

  const closeModal = () => {
    setOpen(false);
  };

  /**
   * @function
   * @component
   * @name configureStartDate
   *
   * @description
   *  Salva a data de inicio para usar na pesquisa
   */

  const configureStartDate = (start: string) => {
    setStartDate(start);
  };

  /**
   * @function
   * @component
   * @name configureEndDate
   *
   * @description
   *  Salva a data final  para usar na pesquisa
   */

  const configureEndDate = (end: string) => {
    setEndDate(end);
  };

  /**
   * @function
   * @component
   * @name configureOpenSettingModal
   *
   * @description
   *  Abre o modal de configurações
   */

  const configureOpenSettingModal = () => {
    setOpenSettingModal(!open);
  };

  /**
   * @function
   * @component
   * @name configureCloseSettingModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureCloseSettingModal = () => {
    setOpenSettingModal(false);
  };

  /**
   * @function
   * @component
   * @name configureOpenErrorsModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureOpenErrorsModal = () => {
    setErrorModal(true);
  };

  /**
   * @function
   * @component
   * @name configureCloseErrorsModal
   *
   * @description
   *  Fecha o modal de configurações
   */

  const configureCloseErrorsModal = () => {
    setErrorModal(false);
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
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
