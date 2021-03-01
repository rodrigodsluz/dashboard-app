import { useState, useCallback } from 'react';

type useTabsTypes = {
  indexActive: number;
  handleClickChangeTab: (param: number) => void;
};

/**
 * @export
 * @function
 * @name useTabs
 *
 * @description
 * Responsável por conter todos os estado e eventos.
 */
const useTabs = (): useTabsTypes => {
  const [indexActive, setIndexActive] = useState<number>(0);

  /**
   * @function
   * @name handleClickChangeTab
   *
   * @description
   * Responsável pelo evento de mudar a tab selecionada.
   */
  const handleClickChangeTab = useCallback((index) => {
    setIndexActive(index);
  }, []);

  return {
    indexActive,
    handleClickChangeTab,
  };
};

export default useTabs;
