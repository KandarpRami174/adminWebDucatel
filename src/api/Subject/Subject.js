import axios from "axios";

const url = "webducatel/api/";

class SubjectAPI {
  // GET Subject
  static getSubject() {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}subject/getSubject`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // GET Subject By ID
  static getSubjectByID(subID) {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}subject/getSubject/${subID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // POST Subject
  static addSubject(subTitle, subImage, subLevelID) {
    const subData = {
      subTitle,
      subImage,
      subLevelID,
    };

    return new Promise((resolve, rej) => {
      axios
        .post(`${url}subject/insertSubject`, subData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // PUT Subject
  static updateSubject(subID, subTitle, subImage, subIsBaseImg, subLevelID) {
    const subData = {
      subTitle,
      subImage,
      subIsBaseImg,
      subLevelID,
    };

    return new Promise((resolve, rej) => {
      axios
        .put(`${url}subject/updateSubject/${subID}`, subData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // DELETE Subject
  static deleteSubject(subID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}subject/deleteSubject/${subID}`)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default SubjectAPI;
