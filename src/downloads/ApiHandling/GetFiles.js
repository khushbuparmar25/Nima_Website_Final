import axios from "axios";
export const getFiles = async () => {
  return await axios
  .get('https://nimaaaa-project.herokuapp.com/downloads')
  .then((response)=> {
    console.log("api",response.data)
    return response.data
  })
  .catch((error)=> {
    console.log(error);
});
};
