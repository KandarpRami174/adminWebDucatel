<template>
  <main>
    <div class="2-columns" data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">
      <master-head></master-head>
      <master-nav></master-nav>
      <div id="main">
        <div class="row">
          <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
          <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
            <!-- Search for small screen-->
            <div class="container">
              <div class="row">
                <div class="col s10 m6 l6">
                  <h5 class="breadcrumbs-title mt-0 mb-0">
                    <span>Level</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <a
                    class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2 mt-5"
                  >Download</a>
                  <router-link
                    to="/addLevel"
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
              <div id="responsive-table" class="card card card-default scrollspy">
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
                      <table class="responsive-table" v-if="isLoading==false">
                        <thead>
                          <tr role="row">
                            <th>Name</th>
                            <th>Add On</th>
                            <th>Last Changed</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" v-for="data in levelData" v-bind:key="data._id">
                            <td>{{data.levTitle}}</td>
                            <td style="width: 15rem">{{data.createdAt | formatDate}}</td>
                            <td style="width: 15rem">{{data.updatedAt | formatDate}}</td>
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
      <masterfoot></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import LevelAPI from "../../api/Level/Level";
import { IntersectingCirclesSpinner } from "epic-spinners";

export default {
  name: "Level",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Level";
    this.getLevelData();
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner
  },
  data() {
    return {
      getLevel: [],
      levelData: [],
      isLoading: false,
    };
  },
  methods: {
    async getLevelData() {
      this.isLoading = true;
      try {
        this.getLevel = await LevelAPI.getLevel();
        if (this.getLevel.statusCode == 200) {
          this.levelData = this.getLevel.level;
          if (this.levelData.length > 0) {
            setTimeout(() => (this.isLoading = false), 3000);
          }
        }
      } catch (err) {
        setTimeout(() => (this.isLoading = false), 3000);
        console.log(err);
      }
    },
    async deleteLV(id) {
      if (confirm(`Are you sure you want to delete this Level!!`)) {
        await LevelAPI.deleteLevel(id);
        this.getLevelData();
      }
    },
    async editLV(id) {
      sessionStorage.setItem("edit_levelID", id);
      this.$router.push("addLevel");
    },
  },
};
</script>

<style>
</style>