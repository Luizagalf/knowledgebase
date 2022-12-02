import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Articles from "components/Articles";
import ArticlePage from "components/ArticlePage";
import Error from "components/Error";
import Main from "components/Main";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/html">
            <Route index element={<Articles name="html" />} />
            <Route path="id=:id" element={<ArticlePage name="html" />} />
          </Route>

          <Route path="/css">
            <Route index element={<Articles name="css" />} />
            <Route path="id=:id" element={<ArticlePage name="css" />} />
          </Route>

          <Route path="/javascript">
            <Route index element={<Articles name="javascript" />} />
            <Route path="id=:id" element={<ArticlePage name="javascript" />} />
          </Route>

          <Route path="/react">
            <Route index element={<Articles name="react" />} />
            <Route path="id=:id" element={<ArticlePage name="react" />} />
          </Route>

          <Route index path="/main" element={<Main />} />
          <Route index path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
