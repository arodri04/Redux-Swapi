// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const Characters = () => dispatch => {
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
      console.log(data.results);
      dispatch({
        type: SUCCESS,
        payload: data.results
      });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    });
};
