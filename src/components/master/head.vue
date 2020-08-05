<template>
  <header class="page-topbar" id="header">
    <div class="navbar navbar-fixed">
      <nav
        class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow"
      >
        <div class="nav-wrapper">
          <ul class="navbar-list right">
            <li class="dropdown-language">
              <button type="button" v-on:click="logout" class="waves-effect waves-light  btn gradient-45deg-red-pink box-shadow-none border-round mr-1 mb-1">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>