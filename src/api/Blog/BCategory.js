import axios from "axios";

const url = 'webducatel/api/'

class BlogCategoryAPI {
  //GET Category
  static getCategory() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}blogCategory/getblogCategory`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //GET Category By ID
  static getCategoryID(BCatID) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}blogCategory/getblogCategory/${BCatID}`).then((res) => {
          const data = res.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //POST Category
  static addCategory(blogCatTitle) {
    const CategoryData = {
        blogCatTitle
    };

    return new Promise((resolve, reject) => {
      axios
        .post(`${url}blogCategory/insertblogCategory`, CategoryData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //PUT Category
  static updateCategory(BCatID, blogCatTitle) {
    const CategoryData = {
        blogCatTitle
    };

    return new Promise((resolve, reject) => {
      axios
        .put(`${url}blogCategory/updateblogCategory/${BCatID}`, CategoryData)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //DELETE Category
  static deleteCategory(BCatID) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}blogCategory/deleteblogCategory/${BCatID}`)
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

export default BlogCategoryAPI;
