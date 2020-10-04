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
                    <span>Admin Users</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <router-link
                    to="/addAdminUser"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="col s12">
            <div class="container">
              <div class="users-list-table">
                <div class="card">
                  <div class="card-content">
                    <!-- datatable start -->
                    <intersecting-circles-spinner
                      :animation-duration="1200"
                      :size="70"
                      color="#7b1fa2"
                      class="center-content"
                      v-if="isLoading"
                    />
                    <div class="responsive-table" v-if="isLoading == false">
                      <table id="users-list-datatable" class="responsive-table">
                        <thead>
                          <tr class="center">
                            <th>User Name</th>
                            <th>Name</th>
                            <th style="width: 15rem">Email</th>
                            <th>Role</th>
                            <!-- <th>Status</th> -->
                            <th>Add On</th>
                            <th>Last Changed</th>
                            <th style="width: 4rem"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            role="row"
                            class="center"
                            v-for="data in mUserData"
                            v-bind:key="data._id"
                          >
                            <td>{{ data.masterUserName }}</td>
                            <td>{{ data.masterName }}</td>
                            <td>{{ data.masterEmail }}</td>
                            <td>{{ data.masterRole }}</td>
                            <!-- <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">{{data.}}</span>
                              </span>
                            </td> -->
                            <td>{{ data.createdAt | formatDate }}</td>
                            <td>{{ data.updatedAt | formatDate }}</td>
                            <td>
                              <button
                                type="button"
                                v-on:click="editShield(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                              >
                                <i class="material-icons">edit</i>
                              </button>
                              <br />
                              <br />
                              <button
                                type="button"
                                v-on:click="deleteShield(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                              >
                                <i class="material-icons">delete</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- datatable ends -->
                  </div>
                </div>
              </div>
            </div>
            <div class="content-overlay"></div>
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
import { IntersectingCirclesSpinner } from "epic-spinners";
import ShieldAPI from "../../api/SHIELD/webShield";

export default {
  name: "Admin User",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Admin User";

    this.getShieldData();
  },
  data() {
    return {
      isNoData: false,
      mUserData: [],
      getMUser: [],
      isLoading: false,
      //CSS Variable
      fixedFooter: "pos-bottom",
    };
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  methods: {
    async getShieldData() {
      this.isLoading = true;
      this.isNoData = true;
      try {
        this.getMUser = await ShieldAPI.getAllMember();

        if (this.getMUser.statusCode == 200) {
          this.mUserData = this.getMUser.master;
          console.log(this.mUserData);
          if (this.mUserData.length > 0) {
            if (this.mUserData.length <= 3) {
              setTimeout(
                () => ((this.isLoading = false), (this.isNoData = true)),
                3000
              );
            } else if (this.mUserData.length > 3) {
              setTimeout(
                () => ((this.isLoading = false), (this.isNoData = false)),
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
    async deleteShield(id) {
      if (confirm(`Are you sure you want to delete this User!!`)) {
        await ShieldAPI.deleteMyTeam(id);
        this.getShieldData();
      }
    },
    async editShield(id) {
      sessionStorage.setItem("edit_ShieldID", id);
      this.$router.push("addAdminUser");
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