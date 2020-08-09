import axios from "axios";

const url = "webducatel/api/";

class LoginAPI {
  //Auth User
  static authUser(userName, userPass) {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${url}master/getmaster/${userName}/${userPass}`)
          .then((res) => {
            const data = res.data;
            resolve(data);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default LoginAPI;
