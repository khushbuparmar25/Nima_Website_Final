import axios from "axios";

export const sendStudentForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/studentForum", data, {
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
// firstName : {
//     type : String
// },
// middleName : {
//     type : String
// },
// lastName : {
//     type : String
// },
// address : {
//     type : String
// },
// DateOfBirth : {
//     type : String
// },
// bloodGroup : {
//     type : String
// },
// gender: {
//     type: String,
//     enum: {
//         values: ['male', 'female','other'],
//         message: 'gender is either male, female or other'
//     }
// },
// contactNo : {
//     type : Number,
//     unique : true
// },
// alternateNo : {
//     type : Number,
//     unique : true
// },
// email : {
//     type : String,
//     unique : true,
//     validate : [validator.isEmail,  'Please provide valid email']
// },
// collegeName : {
//     type : String
// },
// yearOfPassing : {
//     type : Number
// },
// memberType : {
//     type : String
// }
