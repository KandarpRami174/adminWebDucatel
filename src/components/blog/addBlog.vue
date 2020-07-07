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
                    <span>Create New Blog</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/blogs" tag="a">Blogs</router-link>
                    </li>
                    <li class="breadcrumb-item active">Create New Blog</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="col offset-m1 offset-l1 s12 m10 l10">
            <div id="basic-form" class="card card card-default scrollspy">
              <div class="card-content">
                <form>
                  <div class="row">
                    <div class="col s12 file-field input-field">
                      <div class="btn float-right">
                        <span>File</span>
                        <input type="file" />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Select Image:.." />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <div class="select-wrapper">
                        <input
                          class="select-dropdown dropdown-trigger"
                          type="text"
                          data-target="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf"
                        />
                        <ul
                          id="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf"
                          class="dropdown-content select-dropdown"
                          tabindex="0"
                          style
                        >
                          <li
                            class="disabled selected"
                            id="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf0"
                            tabindex="0"
                          >
                            <span>Choose Blog Category</span>
                          </li>
                          <li
                            id="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf1"
                            tabindex="0"
                          >
                            <span>Manager</span>
                          </li>
                          <li
                            id="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf2"
                            tabindex="0"
                          >
                            <span>Developer</span>
                          </li>
                          <li
                            id="select-options-a819002b-624c-3245-1d7d-0482a5fb2ddf3"
                            tabindex="0"
                          >
                            <span>Business</span>
                          </li>
                        </ul>
                        <svg
                          class="caret"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 10l5 5 5-5z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </div>
                      <label>Select Blog Category</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="text" id="title" />
                      <label for="title">Title</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="srtCnt" class="materialize-textarea" spellcheck="false"></textarea>
                      <label for="srtCnt">Sort Content</label>
                    </div>
                  </div>
                  <vue-editor v-model="content"></vue-editor>
                  <div class="row">
                    <div class="input-field col s12">
                      <router-link to="/blogs" class="btn cyan waves-effect waves-light right">
                        Submit
                        <i class="material-icons right">send</i>
                      </router-link>
                    </div>
                  </div>
                </form>
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
import { VueEditor } from "vue2-editor";
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";

export default {
  name: "Create New Blog",
  created() {
    document.title = "Create New Blog";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    VueEditor
  }
};
</script>

<style>
</style>