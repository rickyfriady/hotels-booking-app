import axios from "axios";

export const useFetchHotelCity = async () => {
      const response = await axios.get("http://localhost:8800/api/hotel/countByCity?cities=jakarta,madrid,london");
      const hotel =  response.data;
      return hotel;
}
