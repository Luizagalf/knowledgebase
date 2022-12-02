import DataStore from "./dataStore";
import { createContext, useContext } from "react";

export default class RootStore {
  dataStore: DataStore;

  constructor() {
    this.dataStore = new DataStore(this);
  }
}

const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
