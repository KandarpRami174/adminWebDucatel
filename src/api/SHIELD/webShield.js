import axios from "axios";

const url = "webducatel/api/";

class ShieldAPI {
    // Get Members
    static getAllMember() {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${url}master/getmaster`)
                    .then((res) => {
                        const data = res.data;
                        resolve(data);
                    });
            } catch (err) {
                reject(err);
            }
        });
    }

    // Get Members by ID
    static getAllMemberID(SID) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${url}master/getmaster/${SID}`)
                    .then((res) => {
                        const data = res.data;
                        resolve(data);
                    });
            } catch (err) {
                reject(err);
            }
        });
    }

    // Add Members
    static addMyTeam(masterUserName, masterName, masterEmail, masterPass, masterRole) {
        const myTeam = {
            masterUserName,
            masterName,
            masterEmail,
            masterPass,
            masterRole
        };
        return new Promise((resolve, reject) => {
            axios
                .post(`${url}master/insertmaster`, myTeam)
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    // Update Members
    static updateMyTeam(SID, masterUserName, masterName, masterEmail, masterPass, masterRole) {
        const myTeam = {
            masterUserName,
            masterName,
            masterEmail,
            masterPass,
            masterRole
        };
        return new Promise((resolve, reject) => {
            axios
                .put(`${url}master/updatemaster/${SID}`, myTeam)
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    // Delete Members
    static deleteMyTeam(SID) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`${url}master/deletemaster/${SID}`)
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

export default ShieldAPI;
