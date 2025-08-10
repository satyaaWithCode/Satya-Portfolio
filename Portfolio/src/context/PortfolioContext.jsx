import { createContext, useContext } from "react";
import portfolioData from "../data/portfolioData";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
