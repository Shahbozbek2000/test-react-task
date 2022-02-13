export function getToken() {
    return "Bearer " + JSON.parse(localStorage.getItem("userToken"));
  }
