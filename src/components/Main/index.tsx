import "./main.scss";
import MyFoto from "assets/img/myFoto.jpeg";

const Main = () => {
  return (
    <div className="main">
      <img src={MyFoto} alt="" />
      <h1>
        Hey!
        <br />
        My name is Luiza and I'm here collecting information about Frontend
        development in the form of notes.
        <br />
        It can help you prepare for a job interview, an exam, or just for
        yourself.
        <br />
        Welcome!:)
      </h1>
    </div>
  );
};

export default Main;
