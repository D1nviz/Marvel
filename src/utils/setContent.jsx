import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';
import Skeleton from "../components/skeleton/Skeleton";

const setContent = (proc, Component, data) => {
  switch (proc) {
    case "waiting":
      return <Skeleton/>
    case "loading":
      return <Spinner/>
    case "confirmed":
      return <Component data={data}/>
    case "error":
      return <ErrorMessage/>
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContent;