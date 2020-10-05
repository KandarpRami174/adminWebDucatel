import axios from "axios";

const url = "webducatel/api/";

class LocationAPI {
  // GET Location
  static getLocation() {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}location/getLocation`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // GET Location By ID
  static getLocationByID(locaID) {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}location/getLocation/${locaID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // POST Location
  static addLocation(locaCountry, locaState, locaCity, locaImage) {
    const locaData = {
      locaCountry,
      locaState,
      locaCity,
      locaImage,
    };

    return new Promise((resolve, rej) => {
      axios
        .post(`${url}location/insertLocation`, locaData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // PUT Location
  static updateLocation(locaID, locaCountry, locaState, locaCity, locaImage) {
    const locaData = {
      locaCountry,
      locaState,
      locaCity,
      locaImage,
    };

    return new Promise((resolve, rej) => {
      axios
        .put(`${url}location/updateLocation/${locaID}`, locaData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // DELETE Location
  static deleteLocation(locaID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}location/deleteLocation/${locaID}`)
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

export default LocationAPI;
