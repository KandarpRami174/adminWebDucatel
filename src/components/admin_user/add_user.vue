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
                    <span>Add Users</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/adminUser" tag="a"
                        >User List</router-link
                      >
                    </li>
                    <li class="breadcrumb-item active">Add User</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="col s12 m6 l6 offset-m3 offset-l3">
                  <div id="basic-form" class="card card card-default scrollspy">
                    <div class="card-content">
                      <h4 class="card-title" v-if="!isInUpdate">Add New Master User</h4>
                      <h4 class="card-title" v-if="isInUpdate">Update Master User</h4>
                      <intersecting-circles-spinner
                        :animation-duration="1200"
                        :size="70"
                        color="#7b1fa2"
                        class="center-content"
                        v-if="isLoading"
                      />
                      <form
                        _lpchecked="1"
                        @submit.prevent="callAPIEvent"
                        enctype="multipart/form-data"
                        v-if="isLoading == false"
                      >
                        <div class="card-alert card cyan lighten-5">
                          <div class="card-content cyan-text">
                            <p>NOTE : All Field Is Required</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input
                              class="validate"
                              required=""
                              id="username"
                              type="text"
                              name="username"
                              v-model="userName"
                            />
                            <label for="username">Username **</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input
                              class="validate"
                              required=""
                              id="fullName"
                              type="text"
                              name="fullName"
                              v-model="fullName"
                            />
                            <label for="Name">Full Name **</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input
                              class="validate"
                              required=""
                              id="email"
                              type="email"
                              name="email"
                              v-model="userEmail"
                            />
                            <label for="email" class>Email **</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input
                              class="validate"
                              required=""
                              id="password"
                              type="text"
                              name="password"
                              v-model="userPass"
                            />
                            <label for="password" class>Password **</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select
                              id="drpRoleOps"
                              v-model="selectedRole"
                              class="gradient-45deg-indigo-purple dropdown-trigger btn"
                              @click="selectUserRole"
                            >
                              <option value disabled selected>
                                Select User Role
                              </option>
                              <option
                                v-for="role in roleData"
                                v-bind:key="role"
                                v-bind:value="{
                                  role,
                                }"
                              >
                                {{ role }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <div
                          class="chip gradient-45deg-indigo-light-blue white-text gradient-shadow"
                          v-if="isInUpdate"
                        >
                          {{ userSelectedRole }}
                        </div>
                        <br />
                        <div class="row">
                          <div class="row center">
                            <div class="input-field col s12">
                              <button
                                type="submit"
                                class="btn teal darken-1 border-round"
                                v-if="!isInUpdate"
                                v-bind:click="callAPIEvent"
                              >
                                Add Member
                              </button>
                              <button
                                type="submit"
                                class="btn yellow darken-4 border-round"
                                v-if="isInUpdate"
                                v-bind:click="callAPIEvent"
                              >
                                Update Member
                              </button>
                            </div>
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
  name: "Add Admin User",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Add Admin User";
    if (sessionStorage.getItem("edit_ShieldID") != null) {
      this.userID = sessionStorage.getItem("edit_ShieldID");
      this.isInUpdate = true;
      this.loadMasterData();
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
      userID: "",
      isInUpdate: false,
      isSelectHide: false,
      isLoading: false,
      isNoData: false,
      roleData: [],
      resData: [],
      isMessage: false,
      responseMsg: "",
      selectedRole: "",
      userSelectedRole: "",
      userName: "",
      fullName: "",
      userEmail: "",
      userPass: "",
      // Email Validate
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      // CSS Variable
      fixedFooter: "pos-bottom",
    };
  },
  mounted() {
    setTimeout(
      () => (this.roleData = ["Admin", "Bloger", "HR", "Marketing"]),
      1000
    );
  },
  methods: {
    selectUserRole() {
      this.userSelectedRole = this.selectedRole.role;
    },
    async loadMasterData() {
      this.resData = await ShieldAPI.getAllMemberID(this.userID);

      if (this.resData.statusCode == 200) {
        this.userName = this.resData.master.masterUserName;
        this.fullName = this.resData.master.masterName;
        this.userEmail = this.resData.master.masterEmail;
        this.userPass = this.resData.master.masterPass;
        this.userSelectedRole = this.resData.master.masterRole;
      }
    },
    async callAPIEvent() {
      // User Name
      if (this.userName.trim().length == 0) {
        this.responseMsg = "Enter User Name!!";
      }

      // Full Name
      else if (this.fullName.trim().length == 0) {
        this.responseMsg = "Enter Full Name!!";
      }

      // User Email
      else if (this.userEmail.trim().length == 0) {
        this.responseMsg = "Enter Email ID!!";
      } else if (!this.reg.test(this.userEmail)) {
        this.responseMsg = "Email ID Not Validate!!";
      }

      // User Password
      else if (this.userPass.trim().length == 0) {
        this.responseMsg = "Enter Password!!";
      }

      // User Role
      else if (this.selectedRole.role == "") {
        this.responseMsg = "Select User Role!!";
      } else {
        this.isLoading = true;
        this.isNoData = true;

        if (sessionStorage.getItem("edit_ShieldID") != null) {
          // Update Data
          this.resData = await ShieldAPI.updateMyTeam(
            this.userID,
            this.userName,
            this.fullName,
            this.userEmail,
            this.userPass,
            this.selectedRole.role
          );

          if (this.resData.statusCode == 200) {
            this.alertMessage(false, true, "User Update Successfully!!");
            this.$router.push("adminUser");
          } else {
            this.alertMessage(
              false,
              true,
              "Oops, Something went wrong, please try again!!"
            );
          }
        } else {
          // Save Data
          this.resData = await ShieldAPI.addMyTeam(
            this.userName,
            this.fullName,
            this.userEmail,
            this.userPass,
            this.selectedRole.role
          );

          if (this.resData.statusCode == 201) {
            this.alertMessage(false, true, "User Save Successfully!!");
          } else {
            this.alertMessage(
              false,
              true,
              "Oops, Something went wrong, please try again!!"
            );
          }
        }
      }
    },
    alertMessage(loading, message, resMsg) {
      this.isLoading = loading;
      this.isMessage = message;
      this.responseMsg = resMsg;
      this.imageUrl = "";
      setTimeout(
        () => (
          (this.isMessage = false),
          (this.responseMsg = ""),
          (this.userName = ""),
          (this.fullName = ""),
          (this.userEmail = ""),
          (this.userPass = ""),
          (this.showUserLevel = []),
          (this.isLoading = false),
          (this.isNoData = false)
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