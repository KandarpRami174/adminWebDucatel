<template>
  <!-- BEGIN: SideNav-->
  <aside
    class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square"
  >
    <div class="brand-sidebar">
      <h1 class="logo-wrapper">
        <a class="brand-logo darken-1" href="index.html">
          <img
            class="hide-on-med-and-down"
            src="https://webducatel.assets.fuegoinfotech.com/app-assets/images/logo/Fab.png"
            alt="webducatel logo"
            width="12%"
          />
          <span class="logo-text hide-on-med-and-down">Web Ducatel</span>
        </a>
        <!-- <router-link to="/dashboard" active-class="active"><a class="brand-logo darken-1"><span class="logo-text hide-on-med-and-down">Web Ducatel</span></a></router-link> -->
      </h1>
    </div>
    <ul
      class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow nav-scroll"
      id="slide-out"
      data-menu="menu-navigation"
      data-collapsible="menu-accordion"
    >
      <li>
        <router-link to="/dashboard" active-class="active" tag="a">
          <i class="material-icons dp48">dashboard</i>Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/user" active-class="active" tag="a">
          <i class="material-icons dp48">person_add</i>Users
        </router-link>
      </li>
      <li class="navigation-header">
        <a class="navigation-header-text">Subject & Level</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li>
        <router-link to="/subject" active-class="active" tag="a">
          <i class="material-icons dp48">book</i>Subjects
        </router-link>
      </li>
      <li>
        <router-link to="/level" active-class="active" tag="a">
          <i class="material-icons dp48">trending_up</i>Level
        </router-link>
      </li>
      <li class="navigation-header">
        <a class="navigation-header-text">Parents</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li>
        <router-link to="/parent" active-class="active" tag="a">
          <i class="material-icons dp48">person</i>Parent
        </router-link>
      </li>
      <li>
        <router-link to="/parentStu" active-class="active" tag="a">
          <i class="material-icons dp48">people</i>Parent's Students
        </router-link>
      </li>
      <li class="navigation-header">
        <a class="navigation-header-text">Students</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li>
        <router-link to="/student" active-class="active" tag="a">
          <i class="material-icons dp48">face</i>Student
        </router-link>
      </li>
      <li>
        <router-link to="/stuParent" active-class="active" tag="a">
          <i class="material-icons dp48">people_outline</i>Student's Parent
        </router-link>
      </li>
      <li class="navigation-header">
        <a class="navigation-header-text">Tutor</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
      </li>
      <li>
        <router-link to="/tutor" active-class="active" tag="a">
          <i class="material-icons dp48">book</i>Tutors
        </router-link>
      </li>
      <li>
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
export default {};
</script>

<style>
.nav-scroll {
  overflow-y: scroll;
  scrollbar-color: rgba(12, 0, 80, 0.2) rgb(255, 255, 255);
  scrollbar-width: thin;
}
</style>