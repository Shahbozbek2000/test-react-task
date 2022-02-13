const formatDate = (date, format) => {
  let dt = new Date(date);
  let month = ("00" + (dt.getMonth() + 1)).slice(-2);
  let day = ("00" + dt.getDate()).slice(-2);
  let year = dt.getFullYear();
  let hours = ("00" + dt.getHours()).slice(-2);
  let minutes = ("00" + dt.getMinutes()).slice(-2);
  let seconds = ("00" + dt.getSeconds()).slice(-2);

  switch (format) {
    case "DD-MM-YYYY":
      return day + "-" + month + "-" + year;
    case "DD.MM.YYYY / HH:mm:ss":
      return (
        day +
        "." +
        month +
        "." +
        year +
        " / " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    case "DD.MM.YYYY/HH:mm:ss":
      return (
        day +
        "." +
        month +
        "." +
        year +
        "/" +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    case "DD.MM.YYYY / HH:mm":
      return day + "." + month + "." + year + " / " + hours + ":" + minutes;
    default:
      return day + "." + month + "." + year;
  }
};

const getUserStatus = (status) => {
  switch (status) {
    case 0:
      return "Deleted";
    case 3:
      return "Бан";
    case 1:
      return "Активный";
    case 2:
      return "Не активный";
    case null:
      return "-";

    default:
      return "";
  }
};
const getUserStatusColor = (status) => {
  switch (status) {
    case 0:
      return "red";
    case 1:
      return "green";
    case 2:
      return "orange";
    case 3:
      return "red";
    default:
      return "";
  }
};

const getQAStatus = (status) => {
  switch (status) {
    case 0:
      return "в модерации";
    case 1:
      return "одобрен";
    case 2:
      return "отклонено";
    case null:
      return "-";

    default:
      return "";
  }
};

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const getQAColorStatus = (status) => {
  switch (status) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "red";
    default:
      return "";
  }
};

export default {
  formatDate,
  formatBytes,
  getUserStatus,
  getUserStatusColor,
  getQAStatus,
  getQAColorStatus,
};
