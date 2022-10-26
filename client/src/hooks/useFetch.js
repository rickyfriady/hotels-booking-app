import axios from "axios";

export const useFetch= async (url) => {
      const response = await axios.get(url);
      const result =  response.data;
      return result;
}
