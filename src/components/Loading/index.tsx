import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="pencil">
        <div className="pencil__ball_point"></div>
        <div className="pencil__cap"></div>
        <div className="pencil__cap_base"></div>
        <div className="pencil__middle"></div>
        <div className="pencil__eraser"></div>
      </div>
      <div className="loading_line"></div>
      <h2 className="loading_text">Page loading...{" "}Please wait</h2>
    </div>
  );
};

export default Loading;
