<template>
  <main>
    <div class="2-columns" data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">
      <master-head></master-head>
      <master-nav></master-nav>
      <dash-content></dash-content>
      <masterfoot class="pos-bottom"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import DashContent from "./dashContent.vue";
import Foot from "../master/footer.vue";
export default {
  name: "Dashboard",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Dashboard";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    dashContent: DashContent,
    masterfoot: Foot,
  },
};
</script>

<style>
</style>