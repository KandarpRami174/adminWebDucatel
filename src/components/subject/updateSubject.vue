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
                    <span>Add New Subject</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/subject" tag="a">Subject</router-link>
                    </li>
                    <li class="breadcrumb-item active">Add New Subject</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="col offset-m2 offset-l2 s12 m8 l8">
            <div id="basic-form" class="card card card-default scrollspy">
              <div class="card-content">
                <intersecting-circles-spinner
                  :animation-duration="1200"
                  :size="70"
                  color="#7b1fa2"
                  class="center-content"
                  v-if="isLoading"
                />
                <div
                  class="card-alert card gradient-45deg-light-blue-cyan offset-s3"
                  v-if="isLoading && isFirstLoad"
                >
                  <div class="card-content white-text">
                    <p>
                      <i class="material-icons">info_outline</i> Info : Sometime
                      it takes time to save/update data, data under encryption
                    </p>
                  </div>
                </div>

                <form
                  @submit.prevent="saveSubject"
                  enctype="multipart/form-data"
                  v-if="isLoading == false"
                >
                  <div class="row">
                    <div class="col s12 file-field input-field">
                      <div class="btn float-right">
                        <span>File</span>
                        <input type="file" v-on:change="onFileSelect" />
                      </div>
                      <div class="file-path-wrapper">
                        <input
                          class="file-path validate"
                          type="text"
                          accept="image/*"
                          v-on:change="onFileSelect"
                          placeholder="Select Image:.."
                        />
                      </div>
                      <div
                        v-if="isFileSelected"
                        class="col offset-m2 offset-l2 s12 m8 l8"
                      >
                        <br />
                        <img
                          :src="imageUrl"
                          width="400"
                          style="
                            border-radius: 10px;
                            box-shadow: 2px 3px 4px #b4b4b4;
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="text" id="fn" v-model="subjectName" />
                      <label for="fn">Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <select
                        id="drpLevelOps"
                        v-model="selectedlv"
                        class="gradient-45deg-indigo-purple dropdown-trigger btn"
                        @click="addLevel"
                      >
                        <option value disabled selected>
                          Select Level (Multiple Selection)
                        </option>
                        <option
                          v-for="data in levelData"
                          v-bind:key="data._id"
                          v-bind:value="{ id: data._id, text: data.levTitle }"
                        >
                          {{ data.levTitle }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div v-if="levelSelected">
                    <div
                      class="card-alert card purple lighten-5"
                      v-for="level in showUserLevel"
                      v-bind:item="level"
                      v-bind:key="level.id"
                    >
                      <div class="card-content purple-text">{{ level }}</div>
                      <button
                        type="button"
                        class="close purple-text"
                        aria-label="Close"
                        v-on:click="removeLevel(level)"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="input-field col s12">
                      <button
                        type="button"
                        v-on:click="saveSubject"
                        class="btn cyan waves-effect waves-light right"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div class="card-alert card green lighten-5" v-if="isMessage">
                  <div class="card-content green-text">
                    <p>{{ responseMsg }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 1rem"></div>
          </div>
        </div>
      </div>
      <masterfoot v-bind:class="[isNoData ? fixedFooter : '']"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import LevelAPI from "../../api/Level/Level";
import { IntersectingCirclesSpinner } from "epic-spinners";
import SubjectAPI from "../../api/Subject/Subject";

// Update Bitbucket
export default {
  name: "Add New Subjects",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Add New Subject";
    this.loadLevelData();

    if (sessionStorage.getItem("edit_subjetID") != null) {
      this.isLoading = true;
      this.isNoData = true;
      //   this.isFirstLoad = true;
      this.loadData();
    }
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      isLoading: false,
      isNoData: false,
      isMessage: false,
      levelSelected: false,
      isFileSelected: false,
      isNewFile: false,
      responseMsg: "",
      selectedFile: null,
      levelData: [],
      subjectName: "",
      subjectImgName: "",
      selectedlv: "",
      showUserLevel: [],
      showUserLevelID: [],
      imageUrl: null,
      image: "",
      resSaveData: [],
      resUpdateData: [],
      resGetData: [],
      resLvData: [],
      subjectID: null,
      isFirstLoad: false,
      //CSS Variable
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    async loadData() {
      this.subjectID = sessionStorage.getItem("edit_subjetID");
      this.resGetData = await SubjectAPI.getSubjectByID(this.subjectID);
      if (this.resGetData.statusCode == 200) {
        this.levelSelected = true;
        this.isFileSelected = true;
        this.subjectName = this.resGetData.subject.subTitle;
        this.imageUrl = `http://assetsmaster.fuegoinfotech.com/webducatel/uploadBase/subImages/${this.resGetData.subject.subImage}`;
        this.subjectImgName = this.resGetData.subject.subImage;
        const subLvArray = this.resGetData.subject.subLevelID;
        subLvArray.forEach((element) => {
          console.log(element);
          this.loadLvIDData(element);
        });
      }
    },
    async loadLvIDData(lvID) {
      this.resLvData = await LevelAPI.getLevelID(lvID);
      if (this.resLvData.statusCode == 200) {
        this.showUserLevel.push(`${this.resLvData.level.levTitle}`);
        this.showUserLevelID.push(`${this.resLvData.level._id}`);

        this.showUserLevel = [...new Set(this.showUserLevel)];
        this.showUserLevelID = [...new Set(this.showUserLevelID)];

        if (this.showUserLevel.length > 0 && this.showUserLevelID.length > 0) {
          this.levelSelected = true;
          this.isLoading = false;
          this.isNoData = false;
          this.isFirstLoad = false;
        }
      }
    },
    onFileSelect() {
      this.isFileSelected = true;
      this.isNewFile = true;
      const files = event.target.files[0];
      const fileName = files.name;

      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add valid file!");
      }
      this.base64(files);
    },
    base64(getFile) {
      console.log(getFile);

      const fileRender = new FileReader();

      fileRender.onload = (e) => {
        this.imageUrl = e.target.result;
        console.log(this.imageUrl);
      };

      fileRender.readAsDataURL(getFile);
    },
    async loadLevelData() {
      const lvData = await LevelAPI.getLevel();
      if (lvData.statusCode == 200) {
        this.levelData = lvData.level;
        console.log(this.levelData);
      }
    },
    addLevel() {
      if (this.selectedlv != 0) {
        this.showUserLevel.push(`${this.selectedlv.text}`);
        this.showUserLevelID.push(`${this.selectedlv.id}`);

        this.showUserLevel = [...new Set(this.showUserLevel)];
        this.showUserLevelID = [...new Set(this.showUserLevelID)];

        if (this.showUserLevel.length > 0 && this.showUserLevelID.length > 0) {
          this.levelSelected = true;
        }
      }
    },
    removeLevel(level) {
      this.selectedlv = "";
      this.showUserLevel.splice(this.showUserLevel.indexOf(level), 1);
      this.showUserLevelID.splice(this.showUserLevelID.indexOf(level), 1);
    },
    async saveSubject() {
      if (this.subjectName.trim().length == 0) {
        this.alertMessage(false, true, "Enter Subject Name!!");
      } else if (this.showUserLevel.length < 0) {
        this.alertMessage(false, true, "Select Level!!");
      } else {
        this.isLoading = true;
        this.isNoData = true;
        this.isFirstLoad = true;

        console.log("I'm in side SubID!");
        const { imageUrl } = this;
        console.log(imageUrl);

        this.resUpdateData = await SubjectAPI.updateSubject(
          this.subjectID,
          this.subjectName,
          this.isNewFile ? imageUrl : this.subjectImgName,
          this.isNewFile,
          this.showUserLevelID
        );

        console.log(this.resUpdateData);

        if (this.resUpdateData.statusCode == 200) {
          setTimeout(
            () => (
              sessionStorage.clear(),
              this.alertMessage(false, true, "Subject Updated Successfully!!"),
              this.$router.push("Subject")
            ),
            1000
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
    alertMessage(loading, message, resMsg) {
      this.isLoading = loading;
      this.isNoData = loading;
      this.isMessage = message;
      this.responseMsg = resMsg;
      setTimeout(
        () => (
          (this.responseMsg = ""),
          (this.subjectName = ""),
          (this.selectedlv = ""),
          (this.showUserLevel = []),
          (this.imageUrl = ""),
          (this.isLoading = false),
          (this.isNoData = false),
          (this.isMessage = false),
          (this.isFirstLoad = false),
          (this.isNewFile = false)
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