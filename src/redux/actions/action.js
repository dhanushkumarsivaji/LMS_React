
import { push } from "connected-react-router";



export const changePage = () => dispatch => {
    dispatch(push("/"));
  };