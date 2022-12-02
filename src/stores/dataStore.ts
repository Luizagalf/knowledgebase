import { makeAutoObservable } from "mobx";
import RootStore from "stores/index";
import { Data } from "types/Data";
import javaScriptJson from "data/javaScript.json";
import htmlJson from "data/html.json";

class dataStore {
  rootStore: RootStore;
  isLoading = false;
  isError = false;

  javascript: Data = {};
  html: Data = {};
  css: Data = {};
  react: Data = {};

  language: "rus" | "en" = "en";

  getData = (name: "javascript" | "html" | "css" | "react") => {
    this.isLoading = true;
    switch (name) {
      case "javascript":
        this.javascript = javaScriptJson;
        break;
      case "html":
        this.html = htmlJson;
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  };

  setLanguage = (lang: "rus" | "en") => {
    this.language = lang;
  };

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default dataStore;
