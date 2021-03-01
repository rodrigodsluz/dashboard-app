import { createContext, useEffect, useState } from 'react';
import Services from '../services';

export const HomeDataContext = createContext(null);

const HomeDataContextProvider = ({ children }) => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData(await Services.home.get());
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
