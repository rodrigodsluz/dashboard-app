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

  useEffect(() => {
    async () => {
      await setHomeData({
        processes: await Services.home.getProcesses(),
        graphic: await Services.home.getGraphicData(),
        stoppedAmount: await Services.home.getStoppedMovementsAmount(),
        stoppedMovements: await Services.home.getStoppedMovements(),
        btnNotification: await Services.home.getBtnNotification(),
      });
    };
  }, []);

  return (
    <HomeDataContext.Provider value={{ homeData }}>
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
