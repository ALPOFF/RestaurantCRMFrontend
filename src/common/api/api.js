import * as axios from "axios";

export const mainAPI = {
  getOrders() {
    return axios
      .get(
        `https://bonch-hack-restaurant-crm-api.herokuapp.com/api/v1/claims?login=Alex`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  getRestaurantInfo() {
    return axios
      .get(
        `https://bonch-hack-restaurant-crm-api.herokuapp.com/api/v1/restaurant_info?login=Alex`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  getTablesConf() {
    return axios
      .get(
        `https://bonch-hack-restaurant-crm-api.herokuapp.com/api/v1/tables_configuration?login=Alex`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  getDishesList() {
    return axios
      .get(
        `https://bonch-hack-restaurant-crm-api.herokuapp.com/api/v1/dishes_list?login=Alex`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};
