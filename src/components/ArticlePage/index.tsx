import "./articlePage.scss";
import { observer } from "mobx-react-lite";
import { useStores } from "stores";
import { useEffect } from "react";
import parse from "html-react-parser";
import LoadedComponent from "components/LoadedComponent";
import { useParams } from "react-router-dom";

type DataProps = {
  name: "javascript" | "html" | "css" | "react";
};

const ArticlePage = ({ name }: DataProps) => {
  const { dataStore } = useStores();
  const { id } = useParams();

  useEffect(() => {
    dataStore.getData(name);
  }, [name, dataStore.language]);

  return (
    <LoadedComponent isLoading={dataStore.isLoading} error={dataStore.isError}>
      <>
        {id && dataStore[name][id] ? (
          <article className="oneArticle">
            <h3>{dataStore[name][id][dataStore.language].title}</h3>
            <div>{parse(dataStore[name][id][dataStore.language].text)}</div>
          </article>
        ) : (
          ""
        )}
      </>
    </LoadedComponent>
  );
};

export default observer(ArticlePage);
