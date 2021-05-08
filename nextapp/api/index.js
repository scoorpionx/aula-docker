import api from "./config";

const service = async ({ route, id, body, reqType }) => {
  let data;
  let error;
  let res;
  switch (reqType.toUpperCase()) {
    case "GET":
      res = await api.get(route);
      data = res.data;
      error = res.error;
      if (error) throw error;
      return data;
    case "POST":
      res = await api.post(route, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res);
      data = res.data;
      error = res.error;
      if (error) throw error;
      return data;
    case "PUT":
      res = await api.put(`${route}/${id}`, body);
      data = res.data;
      error = res.error;
      if (error) throw error;
      return data;
    case "PATCH":
      res = await api.patch(`${route}/${id}`, body);
      data = res.data;
      error = res.error;
      if (error) throw error;
      return data;
    case "DELETE":
      res = await api.delete(`${route}/${id}`);
      data = res.data;
      error = res.error;
      if (error) throw error;
      return data;
  }
};

export default service;
