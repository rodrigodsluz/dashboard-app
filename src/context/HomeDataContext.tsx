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
  closeModal?: () => any;
  startDate?: string;
  endDate?: string;
  configureStartDate?: (start: string) => void;
  configureEndDate?: (end: string) => void;
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

  function configureUsername(username: string) {
    setName(username);
  }

  const configureURLImg = (url: string) => {
    setUrlImg(url);
  };

  const configureOcupation = (ocupation: string) => {
    setOcupation(ocupation);
  };
  const openModal = () => {
    setOpen(!open);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const configureStartDate = (start: string) => {
    setStartDate(start);
  };

  const configureEndDate = (end: string) => {
    setEndDate(end);
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
        closeModal
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
