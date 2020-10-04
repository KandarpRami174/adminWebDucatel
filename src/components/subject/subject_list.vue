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
                    <span>Subject</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <a
                    class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2 mt-5"
                    >Download</a
                  >
                  <router-link
                    to="/addSubject"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right mt-5"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col s12 m12 l12">
              <div
                id="responsive-table"
                class="card card card-default scrollspy"
              >
                <div class="card-content">
                  <div class="row">
                    <div class="col s12">
                      <intersecting-circles-spinner
                        :animation-duration="1200"
                        :size="70"
                        color="#7b1fa2"
                        class="center-content"
                        v-if="isLoading"
                      />
                      <div
                        class="card-alert card gradient-45deg-amber-amber col s6 offset-s3"
                        v-if="isLoading == false && isNoData == true"
                      >
                        <div class="card-content white-text">
                          <p>
                            <i class="material-icons">warning</i> WARNING : Data
                            Not Available
                          </p>
                        </div>
                      </div>
                      <table
                        class="responsive-table"
                        v-if="isLoading == false && isNoData == false"
                      >
                        <thead>
                          <tr role="row">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Add On</th>
                            <th>Last Changed</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            role="row"
                            v-for="data in subjectData"
                            v-bind:key="data._id"
                          >
                            <td>
                              <img
                                v-bind:src="
                                  'http://assetsmaster.fuegoinfotech.com/webducatel/uploadBase/subImages/' +
                                  data.subImage
                                "
                                width="150"
                                style="
                                  border-radius: 10px;
                                  box-shadow: 2px 3px 4px #b4b4b4;
                                "
                              />
                            </td>
                            <td>{{ data.subTitle }}</td>
                            <td>{{ data.level }}</td>
                            <td style="width: 15rem">
                              {{ data.createdAt | formatDate }}
                            </td>
                            <td style="width: 15rem">
                              {{ data.updatedAt | formatDate }}
                            </td>
                            <td style="width: 5rem">
                              <button
                                type="button"
                                v-on:click="deleteLV(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                              >
                                <i class="material-icons">delete_forever</i>
                              </button>
                              <br />
                              <button
                                type="button"
                                v-on:click="editLV(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                              >
                                <i class="material-icons">edit</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <masterfoot v-bind:class="[isLimitData ? fixedFooter : '']"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
// import LevelAPI from "../../api/Level/Level";
import SubjectAPI from "../../api/Subject/Subject";
import { IntersectingCirclesSpinner } from "epic-spinners";

export default {
  name: "Subjects",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Subject";
    this.getSubjectData();
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      getSubject: [],
      subjectData: [],
      isLoading: false,
      isNoData: false,
      isLimitData: false,
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    async getSubjectData() {
      this.isLoading = true;
      this.isNoData = true;
      this.isLimitData = true;
      try {
        this.getSubject = await SubjectAPI.getSubject();

        console.log(this.getSubject);

        if (this.getSubject.statusCode == 200) {
          this.subjectData = this.getSubject.subject;

          console.log(this.subjectData);

          if (this.subjectData.length > 0) {
            if (this.subjectData.length == 2) {
              setTimeout(() => (this.isLoading = false, this.isNoData = false), 3000);
            } else {
              setTimeout(
                () => ((this.isLoading = false), (this.isNoData = false, this.isLimitData = false)),
                3000
              );
            }
          } else {
            setTimeout(
              () => ((this.isLoading = false), (this.isNoData = true)),
              3000
            );
          }
        }
      } catch (err) {
        setTimeout(() => (this.isLoading = false), 3000);
        console.log(err);
      }
    },
    async deleteLV(id) {
      if (confirm(`Are you sure you want to delete this Subject!!`)) {
        await SubjectAPI.deleteSubject(id);
        this.getSubjectData();
      }
    },
    async editLV(id) {
      sessionStorage.setItem("edit_subjetID", id);
      this.$router.push("updateSubject");
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