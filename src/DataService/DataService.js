import axios from "axios";

export const getDeskData = async (data) => {
  console.log(data);
  return await axios
    .get("https://nimaaaa-project.herokuapp.com/desk")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
