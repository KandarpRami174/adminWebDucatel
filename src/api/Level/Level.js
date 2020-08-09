import axios from "axios";

const url = 'webducatel/api/'

class LevelAPI {
  //GET Level
  static getLevel() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}level/getLevel`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //GET Level By ID
  static getLevelID(levelID) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}level/getLevel/${levelID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //POST Level
  static addLevel(levTitle, levImage) {
    const levelData = {
      levTitle,
      levImage,
    };

    return new Promise((resolve, reject) => {
      axios
        .post(`${url}level/insertLevel`, levelData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //PUT Level
  static updateLevel(levelID, levTitle, levImage) {
    const levelData = {
      levTitle,
      levImage,
    };

    return new Promise((resolve, reject) => {
      axios
        .put(`${url}level/updateLevel/${levelID}`, levelData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //DELETE Level
  static deleteLevel(levelID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}level/deleteLevel/${levelID}`)
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

export default LevelAPI;
