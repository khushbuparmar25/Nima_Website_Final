export const dateHelper = (date) => {
  let dateArray = [];
  let month = date.split("-");

  switch (month[1]) {
    case "1": {
      dateArray.push("January");
      break;
    }
    case "2": {
      dateArray.push("February");
      break;
    }
    case "3": {
      dateArray.push("March");
      break;
    }
    case "4": {
      dateArray.push("April");
      break;
    }
    case "5": {
      dateArray.push("May");
      break;
    }
    case "6": {
      dateArray.push("June");
      break;
    }
    case "7": {
      dateArray.push("July");
      break;
    }
    case "8": {
      dateArray.push("August");
      break;
    }
    case "9": {
      dateArray.push("September");
      break;
    }
    case "10": {
      dateArray.push("October");
      break;
    }
    case "11": {
      dateArray.push("November");
      break;
    }
    case "12": {
      dateArray.push("December");
      break;
    }
    default:
  }
  dateArray.push(month[0]);
  return dateArray;
};
