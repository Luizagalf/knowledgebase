import "./articles.scss";
import { observer } from "mobx-react-lite";
import { useStores } from "stores";
import { useEffect } from "react";
import parse from "html-react-parser";
import LoadedComponent from "components/LoadedComponent";
import { Link } from "react-router-dom";

type ArticlesProps = {
  name: "javascript" | "html" | "css" | "react";
};

const Articles = ({ name }: ArticlesProps) => {
  const { dataStore } = useStores();

  useEffect(() => {
    dataStore.getData(name);
  }, [name, dataStore.language]);

  return (
    <LoadedComponent isLoading={dataStore.isLoading} error={dataStore.isError}>
      <>
        {Object.values(dataStore[name]).length ? (
          <div className="data">
            {Object.values(dataStore[name]).map((item) => {
              return (
                <article key={item.id}>
                  <h3>{item[dataStore.language].title}</h3>
                  <div>{parse(item[dataStore.language].text)}</div>
                  {item[dataStore.language].text.length > 300 ? (
                    <Link target="_blank" to={`/${name}/id=${item.id}`}>
                      Read more
                    </Link>
                  ) : (
                    ""
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </>
    </LoadedComponent>
  );
};

export default observer(Articles);
