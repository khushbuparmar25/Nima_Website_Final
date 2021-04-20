// "state": "MAHARASHTRA",
//             "pincode": "400603",
//             "num1": "25322138",
//             "num2": "25322139",
//             "fname": "Nachiket",
//             "lname": "Moghe",
//             "email": "nachiket.moghe@somaiya.edu",
//             "city": "Mumbai",

import axios from "axios";

export const sendRegisterForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/registration", data, {
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
