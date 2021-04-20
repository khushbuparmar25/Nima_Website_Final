import axios from "axios";
import image1 from "../Images/news.png";
// https://project31-heroku.herokuapp.com/api/v11/user/alldoctors
// https://project31-heroku.herokuapp.com/api/v11/user/doctorprofile/?id=5fb8f520c063b50024f1757b
export const getBranchNews = async (id) => {
  return await axios
    .get("https://nimaaaa-project.herokuapp.com/getbranchnews")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
