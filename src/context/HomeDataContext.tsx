import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
    stoppedAmount: 0,
    stoppedMovements: []
  });

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData({
        processes: await Services.home.getProcesses(),
        graphic: await Services.home.getGraphicData(),
        stoppedAmount: await Services.home.getStoppedMovementsAmount(),
        stoppedMovements: await Services.home.getStoppedMovements(),
      });
    };
    fetchAPI();
  }, []);

  return (
    <HomeDataContext.Provider value={{ homeData }}>
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
