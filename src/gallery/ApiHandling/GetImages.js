import axios from "axios";
export const getGallery = async () => {
  return await axios
  .get('https://nimaaaa-project.herokuapp.com/gallery')
  .then((response)=> {
    console.log("api",response.data)
    return response.data
  })
  .catch((error)=> {
    console.log(error);
});
};
