<template>
  <main>
    <div class="2-columns" data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">
      <master-head></master-head>
      <master-nav></master-nav>
      <sub-content></sub-content>
      <masterfoot></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import SubContent from "./sub_list_content.vue";
import Foot from "../master/footer.vue";
export default {
  name: "Subjects",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }
    document.title = "Subject";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    subContent: SubContent,
    masterfoot: Foot
  }
};
</script>

<style>
</style>