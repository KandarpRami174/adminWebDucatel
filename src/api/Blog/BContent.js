import axios from "axios";

const url = 'webducatel/api/'

class BlogContentAPI {
  //GET Content
  static getContent() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}blogContent/getblogContent`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //GET Content By ID
  static getContentID(BCatID) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}blogContent/getblogContent/${BCatID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //POST Content
  static addContent(blogCatID, bgContImage, bgIsBaseImg, bgContTitle, bgContSortInfo, bgContDetailInfo) {
    const ContentData = {
      blogCatID,
      bgContImage,
      bgIsBaseImg,
      bgContTitle,
      bgContSortInfo,
      bgContDetailInfo
    };

    return new Promise((resolve, reject) => {
      axios
        .post(`${url}blogContent/insertblogContent`, ContentData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //PUT Content
  static updateContent(BCatID, blogCatID, bgContImage, bgIsBaseImg, bgContTitle, bgContSortInfo, bgContDetailInfo) {
    const ContentData = {
      blogCatID,
      bgContImage,
      bgIsBaseImg,
      bgContTitle,
      bgContSortInfo,
      bgContDetailInfo
    };

    return new Promise((resolve, reject) => {
      axios
        .put(`${url}blogContent/updateblogContent/${BCatID}`, ContentData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //DELETE Content
  static deleteContent(BCatID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}blogContent/deleteblogContent/${BCatID}`)
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

export default BlogContentAPI;
