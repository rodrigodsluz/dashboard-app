import { createContext, useEffect, useState } from 'react';
import { getHomeData } from '../services/api';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData(await getHomeData());
    };

    fetchAPI();
  }, []);

  return (
    <HomeDataContext.Provider value={homeData}>
      {children}
    </HomeDataContext.Provider>
  );
};

export default HomeDataContextProvider;
