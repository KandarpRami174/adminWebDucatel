import axios from "axios";

const url = "webducatel/api/";

class SubscriptionAPI {
  // GET Subscription
  static getSubscription() {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}subscription/getsubscription`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // GET Subscription By ID
  static getSubscriptionByID(subsID) {
    return new Promise((resolve, rej) => {
      try {
        axios.get(`${url}subscription/getsubscription/${subsID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  // POST Subscription
  static addSubscription(subsTitle, subsDetails, subsMonth, subsPrice) {
    const subsData = {
        subsTitle, subsDetails, subsMonth, subsPrice
    };

    return new Promise((resolve, rej) => {
      axios
        .post(`${url}subscription/insertsubscription`, subsData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // PUT Subscription
  static updateSubscription(subsID, subsTitle, subsDetails, subsMonth, subsPrice) {
    const subsData = {
        subsTitle, subsDetails, subsMonth, subsPrice
    };

    return new Promise((resolve, rej) => {
      axios
        .put(`${url}subscription/updatesubscription/${subsID}`, subsData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  // DELETE Subscription
  static deleteSubscription(subsID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}subscription/deletesubscription/${subsID}`)
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

export default SubscriptionAPI;
