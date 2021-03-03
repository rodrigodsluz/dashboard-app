import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
    stoppedAmount: 0,
  });

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData({
        processes: await Services.home.getData(),
        graphic: await Services.home.getGraphicData(),
        stoppedAmount: await Services.home.getStoppedMovementsAmount(),
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
