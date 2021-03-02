import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
  });

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData({
        processes: await Services.home.getData(),
        graphic: await Services.home.getGraphicData(),
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
