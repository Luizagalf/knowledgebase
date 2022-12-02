import Error from "components/Error/index";
import Loading from "components/Loading";

type LoadedComponentProps = {
  isLoading: boolean;
  error: boolean;
  children: JSX.Element;
};

const LoadedComponent = ({
  isLoading,
  error,
  children
}: LoadedComponentProps) => {
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return children;
};

export default LoadedComponent;
