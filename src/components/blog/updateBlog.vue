<template>
  <main>
    <div
      class="2-columns"
      data-open="click"
      data-menu="vertical-modern-menu"
      data-col="2-columns"
    >
      <master-head></master-head>
      <master-nav></master-nav>
      <div id="main">
        <div class="row">
          <div
            class="content-wrapper-before gradient-45deg-indigo-purple"
          ></div>
          <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
            <!-- Search for small screen-->
            <div class="container">
              <div class="row">
                <div class="col s10 m6 l6">
                  <h5 class="breadcrumbs-title mt-0 mb-0">
                    <span>Create New Blog</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/blogs" tag="a">Blogs</router-link>
                    </li>
                    <li class="breadcrumb-item active">
                      View &amp; Update Blog
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="col offset-m1 offset-l1 s12 m10 l10">
            <div class="row" v-if="isLoading">
              <div class="col offset-m3 offset-l3 s12 m6 l6">
                <div class="card-panel border-radius-6 mt-10 card-animation-1">
                  <intersecting-circles-spinner
                    :animation-duration="1200"
                    :size="70"
                    color="#7b1fa2"
                    class="center-content"
                  />
                </div>
              </div>
            </div>
            <div v-if="isLoading == false && isViewMode == true">
              <div class="row">
                <div class="col s12 m12 l12">
                  <div
                    class="card-panel border-radius-6 mt-10 card-animation-1"
                  >
                    <div>
                      <img
                        class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                        v-bind:src="
                          'http://assetsmaster.fuegoinfotech.com/webducatel/uploadBase/blogImage/' +
                          BGDImg
                        "
                        alt
                      />
                    </div>
                    <div class="mt-7 row">
                      <h5 style="color: #004d40" class="ml-1">
                        {{ BGDTitle }}
                      </h5>
                      <div v-for="data in BGDCat" v-bind:key="data">
                        <span
                          class="new badge gradient-45deg-light-blue-cyan left mt-2"
                          >{{ data }}</span
                        >
                      </div>
                    </div>
                    <br />
                    <h6 style="color: #004d40">{{ BGDSrCnt }}</h6>
                    <br />
                    <div v-html="BGDMCnt[0]"></div>
                    <br />
                    <br />
                    <div
                      style="bottom: 60px; right: 19px"
                      class="fixed-action-btn direction-top"
                    >
                      <button
                        class="btn-floating btn-large gradient-45deg-deep-orange-orange gradient-shadow"
                        type="button"
                        v-on:click="deleteBlog(getBGCID)"
                      >
                        <i class="material-icons">delete</i>
                      </button>
                      <br />
                      <br />
                      <button
                        class="btn-floating btn-large gradient-45deg-cyan-light-green gradient-shadow"
                        type="button"
                        v-on:click="editBlog"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isLoading == false && isEditMode == true">
              <div class="col offset-m1 offset-l1 s12 m10 l10">
                <div id="basic-form" class="card card card-default scrollspy">
                  <div class="card-content">
                    <form>
                      <!-- Image Selections & Display -->
                      <div class="row">
                        <div class="col s12 file-field input-field">
                          <div class="btn float-right">
                            <span>File</span>
                            <input type="file" v-on:change="selectBGFile" />
                          </div>
                          <div class="file-path-wrapper">
                            <input
                              class="file-path validate"
                              type="text"
                              accept="image/*"
                              v-on:change="selectBGFile"
                              placeholder="Select Image:.."
                            />
                          </div>
                          <div
                            v-if="isFileSelected"
                            class="col offset-m4 offset-l4 s12 m6 l6"
                          >
                            <br />
                            <img
                              :src="bgImageUrl"
                              width="300"
                              style="
                                border-radius: 10px;
                                box-shadow: 2px 3px 4px #b4b4b4;
                              "
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Dropdownlist -->
                      <div class="row">
                        <div class="input-field col s12">
                          <!-- Dropdown -->
                          <div class="select-wrapper">
                            <select
                              id="drpBGCat"
                              v-model="BGCatSelect"
                              class="gradient-45deg-indigo-purple dropdown-trigger btn"
                              @click="addBGCategory"
                            >
                              <option value disabled selected>
                                Select Blog Category (Multiple Selection)
                              </option>
                              <option
                                v-for="data in BGCatLoadData"
                                v-bind:key="data._id"
                                v-bind:value="{
                                  id: data._id,
                                  text: data.blogCatTitle,
                                }"
                              >
                                {{ data.blogCatTitle }}
                              </option>
                            </select>
                          </div>
                          <!-- DRP Selected Value -->
                          <div v-if="isDRPBGSelect">
                            <div
                              class="card-alert card purple lighten-5"
                              v-for="BGCats in selectedListText"
                              v-bind:item="BGCats"
                              v-bind:key="BGCats.id"
                            >
                              <div class="card-content purple-text">
                                {{ BGCats }}
                              </div>
                              <button
                                type="button"
                                class="close purple-text"
                                aria-label="Close"
                                v-on:click="removeBGCategory(BGCats)"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <input type="text" id="title" v-model="blogTitle" />
                          <label for="title">Title</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea
                            id="srtCnt"
                            class="materialize-textarea"
                            v-model="blogSrtCnt"
                            spellcheck="true"
                          ></textarea>
                          <label for="srtCnt">Sort Content</label>
                        </div>
                      </div>
                      <vue-editor
                        v-model="content"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                      <div class="row">
                        <div class="input-field col s12">
                          <button
                            type="button"
                            v-on:click="updateBlog"
                            class="btn cyan waves-effect waves-light right"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                    <div
                      class="card-alert card green lighten-5"
                      v-if="isMessage"
                    >
                      <div class="card-content green-text">
                        <p>{{ responseMsg }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <masterfoot v-bind:class="[isNoData ? fixedFooter : '']"></masterfoot>
    </div>
  </main>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import { IntersectingCirclesSpinner } from "epic-spinners";
import BlogCategoryAPI from "../../api/Blog/BCategory";
import BlogContentAPI from "../../api/Blog/BContent";

export default {
  name: "Create New Blog",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Create New Blog";

    this.getBGDData();
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    VueEditor,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      // View Variable
      getBGCID: "",
      isLoading: false,
      isNoData: false,
      isViewMode: false,
      isEditMode: false,
      BGDIDs: "",
      BGDImg: "",
      BGDTitle: "",
      BGDSrCnt: "",
      BGDCat: [],
      BGDMCnt: "",
      //Edit Variable
      isMessage: false,
      BGCatLoadData: [],
      BGCatSelect: "",
      isDRPBGSelect: false,
      selectedListText: [],
      selectedListIDs: [],
      blogTitle: "",
      blogSrtCnt: "",
      content: "",
      customToolbar: [
        [{ header: [true, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"],
        [
          {
            align: "",
          },
          {
            align: "center",
          },
          {
            align: "right",
          },
          {
            align: "justify",
          },
        ],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        ["link"],
        ["clean"],
      ],
      isFileSelected: false,
      isNewFileUploaded: false,
      responseMsg: "",
      bgImageUrl: null,
      //CSS Variable
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    // Get Blog Data
    async getBGDData() {
      this.isLoading = true;
      this.isNoData = true;

      this.getBGCID = sessionStorage.getItem("edit_ContentID");

      const BGDDatas = await BlogContentAPI.getContentID(this.getBGCID);

      const BGData = BGDDatas.blogContent;

      // View Mode
      this.BGDIDs = BGData._id;
      this.BGDImg = BGData.bgContImage;
      this.BGDTitle = BGData.bgContTitle;
      this.BGDSrCnt = BGData.bgContSortInfo;
      this.BGDMCnt = BGData.bgContDetailInfo;

      // Edit Mode
      this.bgImageUrl = `http://assetsmaster.fuegoinfotech.com/webducatel/uploadBase/blogImage/${BGData.bgContImage}`;
      this.blogTitle = BGData.bgContTitle;
      this.blogSrtCnt = BGData.bgContSortInfo;
      this.content = BGData.bgContDetailInfo;

      const BGCatIDs = BGData.blogCatID;

      if (BGData.blogCatID.length > 0) {
        BGCatIDs.forEach((getID) => {
          this.loadCatName(getID);
        });
      }else{
        setTimeout(
        () => (
          (this.isLoading = false),
          (this.isNoData = false),
          (this.isViewMode = true),
          (this.isEditMode = false)
        ),
        3000
      );
      }
    },
    // Load Cat Name
    async loadCatName(BGCID) {
      const BGCategory = await BlogCategoryAPI.getCategoryID(BGCID);
      const blogCategory = BGCategory.blogCategory.blogCatTitle;
      const blogCategoryID = BGCategory.blogCategory._id;

      this.BGDCat.push(blogCategory);
      this.selectedListText.push(`${blogCategory}`);
      this.selectedListIDs.push(`${blogCategoryID}`);

      this.selectedListText = [...new Set(this.selectedListText)];
      this.selectedListIDs = [...new Set(this.selectedListIDs)];

      setTimeout(
        () => (
          (this.isLoading = false),
          (this.isNoData = false),
          (this.isViewMode = true),
          (this.isEditMode = false)
        ),
        3000
      );
    },
    // Add Blog Category
    addBGCategory() {
      if (this.BGCatSelect != 0) {
        this.selectedListText.push(`${this.BGCatSelect.text}`);
        this.selectedListIDs.push(`${this.BGCatSelect.id}`);

        this.selectedListText = [...new Set(this.selectedListText)];
        this.selectedListIDs = [...new Set(this.selectedListIDs)];

        if (
          this.selectedListText.length > 0 &&
          this.selectedListIDs.length > 0
        ) {
          this.isDRPBGSelect = true;
        }
      }
    },
    // Remove Blog Cat
    removeBGCategory(BGCats) {
      this.BGCatSelect = "";
      this.selectedListText.splice(this.selectedListText.indexOf(BGCats), 1);
      this.selectedListIDs.splice(this.selectedListIDs.indexOf(BGCats), 1);
    },
    // Select File
    selectBGFile() {
      this.isFileSelected = true;
      this.isNewFileUploaded = true;
      const files = event.target.files[0];
      const fileName = files.name;

      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add valid file!");
      }
      this.fileBase64(files);
    },
    // Base64
    fileBase64(getFile) {
      console.log(getFile);

      const fileRender = new FileReader();

      fileRender.onload = (e) => {
        this.bgImageUrl = e.target.result;
        console.log(this.bgImageUrl);
      };

      fileRender.readAsDataURL(getFile);
    },
    // Edit Blog
    async editBlog() {
      this.isLoading = true;
      this.isNoData = true;
      setTimeout(
        () => (
          (this.isLoading = false),
          (this.isNoData = false),
          (this.isViewMode = false),
          (this.isEditMode = true),
          (this.isDRPBGSelect = true),
          (this.isFileSelected = true)
        ),
        3000
      );
      const BGCat = await BlogCategoryAPI.getCategory();
      if (BGCat.statusCode == 200) {
        this.BGCatLoadData = BGCat.blogCategory;
      }
    },
    // Update Blog Data
    async updateBlog() {
      const { bgImageUrl } = this;
      if (
        this.blogTitle.trim().length == 0 &&
        this.selectedListText.length < 0 &&
        this.content.trim().length == 0 &&
        bgImageUrl == ""
      ) {
        this.alertMessage(
          false,
          true,
          "Something Wrong, please check all field and save again!!"
        );
      } else {
        this.isLoading = true;
        this.isNoData = true;
        console.log(this.isNewFileUploaded);
        this.resData = await BlogContentAPI.updateContent(
          this.getBGCID,
          this.selectedListIDs,
          this.isNewFileUploaded ? bgImageUrl : this.BGDImg,
          this.isNewFileUploaded,
          this.blogTitle,
          this.blogSrtCnt,
          this.content
        );

        if (this.resData.statusCode == 200) {
          this.isLoading = true;
          this.isNoData = true;
          setTimeout(
            () => (
              (this.isLoading = false),
              (this.isNoData = false),
              (this.isViewMode = true),
              (this.isEditMode = false),
              (this.isDRPBGSelect = false),
              (this.isFileSelected = false),
              (this.isNewFileUploaded = false),
              (this.isMessage = false),
              (this.responseMsg = ""),
              (this.blogTitle = ""),
              (this.blogSrtCnt = ""),
              (this.content = ""),
              (this.BGCatSelect = ""),
              (this.selectedListText = []),
              (this.selectedListIDs = []),
              this.getBGDData()
            ),
            3000
          );
        } else {
          this.alertMessage(
            false,
            true,
            "Oops, Something went wrong, please try again!!"
          );
        }
      }
    },
    //Delete Blog
    async deleteBlog(id) {
      if (confirm(`Are you sure you want to delete this Blog!!`)) {
        await BlogContentAPI.deleteContent(id);
        this.$router.push("blogs");
      }
    },
    // Alert Message
    alertMessage(loading, message, resMsg) {
      this.isLoading = loading;
      this.isMessage = message;
      this.responseMsg = resMsg;
      this.bgImageUrl = "";
      setTimeout(
        () => (
          (this.isMessage = false),
          (this.responseMsg = ""),
          (this.blogTitle = ""),
          (this.blogSrtCnt = ""),
          (this.content = ""),
          (this.BGCatSelect = ""),
          (this.selectedListText = []),
          (this.selectedListIDs = []),
          (this.isLoading = false)
        ),
        3000
      );
    },
  },
};
</script>

<style>
.pos-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>