<template>
  <main>
    <div class="1-column login-bg blank-page blank-page">
      <div class="row">
        <div class="col s12">
          <div class="container">
            <div id="login-page" class="row">
              <div
                class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8"
              >
                <intersecting-circles-spinner
                  :animation-duration="1200"
                  :size="70"
                  color="#7b1fa2"
                  class="center-content"
                  v-if="isLoading"
                />
                <form class="login-form" v-if="isLoading==false">
                  <div class="row">
                    <div class="input-field col s12">
                      <h5 class="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div class="row margin">
                    <div class="input-field col s12">
                      <i class="material-icons prefix pt-2">person_outline</i>
                      <input id="username" type="text" v-model="userName" />
                      <label for="username" class="center-align">Username</label>
                    </div>
                  </div>
                  <div class="row margin">
                    <div class="input-field col s12">
                      <i class="material-icons prefix pt-2">lock_outline</i>
                      <input id="password" type="password" v-model="userPass" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <button
                        type="button"
                        v-on:click="validateUser"
                        class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-purple col s12"
                      >Login</button>
                    </div>
                  </div>
                </form>
                <div class="card-alert card red lighten-5" v-if="isError">
                  <div class="card-content red-text">
                    <p>{{validationError}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-overlay"></div>
        </div>
      </div>
      <span>
        Photo by
        <a
          href="https://unsplash.com/@joannakosinska?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Joanna Kosinska</a> on
        <a
          href="/s/photos/stationery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Unsplash</a>
      </span>
    </div>
  </main>
</template>

<script>
import LoginAPI from "../../api/Authentication/Login";
import { IntersectingCirclesSpinner } from "epic-spinners";
export default {
  name: "Admin Login",
  components: {
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      userName: "Kandarp174",
      userPass: "Kandarp@1717",
      userData: [],
      validationError: "",
      isError: false,
      isLoading: false,
    };
  },
  created() {
    localStorage.clear();
    document.title = "WebDucatel - Login";
  },
  methods: {
    async validateUser() {
      if (
        this.userName.trim().length == 0 &&
        this.userPass.trim().length == 0
      ) {
        this.isError = true;
        this.validationError =
          "One Of The Field Is Empty (Username / Password).";
        setTimeout(
          () => ((this.isError = false), (this.validationError = "")),
          3000
        );
      } else {
        this.isLoading = true;
        this.userData = await LoginAPI.authUser(this.userName, this.userPass);
        
        for (const x in this.userData) {
          if (Object.prototype.hasOwnProperty.call(this.userData, x)) {
            const userData = this.userData[x];
            if (userData.length > 0) {
              this.isLoading = false;
              var userRole = userData[0].masterRole;
              console.log("Get User Data: " + userRole);
              localStorage.setItem("userRole",userRole);
              if (userRole == "Admin"){
                this.$router.push("Dashboard");
              }else if (userRole == "Bloger") {
                this.$router.push("Blogs");
              }
            } else {
              this.isError = true;
              this.isLoading = false;
              this.validationError = "Invalid Username / Password.";
              setTimeout(
                () => ((this.isError = false), (this.validationError = "")),
                3000
              );
            }
          }
        }
      }
    },
  },
};
</script>

<style>
.center-content {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>