<template>
  <!-- BEGIN: SideNav-->
  <aside
    class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-rounded"
  >
    <div class="brand-sidebar">
      <h1 class="logo-wrapper">
        <router-link to="/dashboard" active-class="active">
          <a class="brand-logo darken-1">
            <img
              class="hide-on-med-and-down"
              src="http://assetsmaster.fuegoinfotech.com/webducatel/app-assets/images/logo/Fab.png"
              alt="webducatel logo"
              width="12%"
            />
            <span class="logo-text hide-on-med-and-down">Web Ducatel</span>
          </a>
        </router-link>
      </h1>
    </div>
    <ul
      class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow nav-scroll"
      id="slide-out"
      data-menu="menu-navigation"
      data-collapsible="menu-accordion"
    >
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/dashboard" active-class="active" tag="a">
          <i class="material-icons dp48">dashboard</i>Dashboard
        </router-link>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/adminUser" active-class="active" tag="a">
          <i class="material-icons dp48">person_add</i>Users
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true && imBloger==true">
        <a class="navigation-header-text">Subject & Level</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/subject" active-class="active" tag="a">
          <i class="material-icons dp48">book</i>Subjects
        </router-link>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/level" active-class="active" tag="a">
          <i class="material-icons dp48">trending_up</i>Level
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true && imBloger==true">
        <a class="navigation-header-text">Others</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <!-- <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/location" active-class="active" tag="a">
          <i class="material-icons dp48">add_location</i>Location
        </router-link>
      </li> -->
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/subscription" active-class="active" tag="a">
          <i class="material-icons dp48">attach_money</i>Subscriptions
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true || imBloger==true">
        <a class="navigation-header-text">Blog</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li v-if="imAdmin==true || imBloger==true">
        <router-link to="/blogCat" active-class="active" tag="a">
          <i class="material-icons dp48">playlist_add</i>Category
        </router-link>
      </li>
      <li v-if="imAdmin==true || imBloger==true">
        <router-link to="/blogs" active-class="active" tag="a">
          <i class="material-icons dp48">art_track</i>Blog
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true && imBloger==true">
        <a class="navigation-header-text">Parents</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/parents" active-class="active" tag="a">
          <i class="material-icons dp48">person</i>Parent
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true && imBloger==true">
        <a class="navigation-header-text">Students</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/students" active-class="active" tag="a">
          <i class="material-icons dp48">face</i>Student
        </router-link>
      </li>
      <li class="navigation-header" v-if="imAdmin==true && imBloger==true">
        <a class="navigation-header-text">Tutor</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/tutor" active-class="active" tag="a">
          <i class="material-icons dp48">book</i>Tutors
        </router-link>
      </li>
      <li v-if="imAdmin==true && imBloger==true">
        <router-link to="/tutorReq" active-class="active" tag="a">
          <i class="material-icons dp48">trending_up</i>Register Request
        </router-link>
      </li>
    </ul>
    <div class="navigation-background"></div>
    <a
      class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
      href="#"
      data-target="slide-out"
    >
      <i class="material-icons">menu</i>
    </a>
  </aside>
  <!-- END: SideNav-->
</template>

<script>
export default {
  data() {
    return {
      imAdmin: false,
      imBloger: false,
    };
  },
  created() {
    const userRole = localStorage.getItem("userRole");
    if (userRole == "Admin") {
      this.imAdmin = true;
      this.imBloger = true;
    } else if (userRole == "Bloger") {
      this.imAdmin = false;
      this.imBloger = true;
    }
  },
};
</script>

<style>
.nav-scroll {
  overflow-y: scroll;
  scrollbar-color: rgba(12, 0, 80, 0.2) rgb(255, 255, 255);
  scrollbar-width: thin;
}
</style>