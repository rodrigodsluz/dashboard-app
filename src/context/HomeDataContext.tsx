import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
    stoppedAmount: 0,
    stoppedMovements: [],
    btnNotification: [],
  });

  return (
    <HomeDataContext.Provider value={{ homeData }}>
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
