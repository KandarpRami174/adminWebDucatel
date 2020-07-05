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
                  <a class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2">Download</a>
                  <router-link
                    to="/addLevel"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <div class="container">
              <div class="section section-data-tables">
                <div class="row">
                  <div class="col s12 m12 l12">
                    <div id="button-trigger" class="card card card-default scrollspy">
                      <div class="card-content">
                        <div class="row">
                          <div class="col s12">
                            <div id="data-table-simple_wrapper" class="dataTables_wrapper">
                              <div class="dataTables_length" id="data-table-simple_length">
                                <label>
                                  Show
                                  <select
                                    name="data-table-simple_length"
                                    aria-controls="data-table-simple"
                                    class
                                  >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select> entries
                                </label>
                              </div>
                              <div id="data-table-simple_filter" class="dataTables_filter">
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    class
                                    placeholder
                                    aria-controls="data-table-simple"
                                  />
                                </label>
                              </div>
                              <table
                                id="data-table-simple"
                                class="display dataTable dtr-inline"
                                role="grid"
                                aria-describedby="data-table-simple_info"
                                style="width: 984px;"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="data-table-simple"
                                      rowspan="1"
                                      colspan="1"
                                      style="width: 200px;"
                                      aria-label="Position: activate to sort column ascending"
                                    >Name</th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="data-table-simple"
                                      rowspan="1"
                                      colspan="1"
                                      style="width: 200px;"
                                      aria-label="Age: activate to sort column ascending"
                                    >Add On</th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="data-table-simple"
                                      rowspan="1"
                                      colspan="1"
                                      style="width: 100px;"
                                      aria-label="Start date: activate to sort column ascending"
                                    >Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr role="row" class="odd">
                                    <td>Master</td>
                                    <td>2020-07-03</td>
                                    <td>
                                      <a
                                        class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                                      >
                                        <i class="material-icons">delete_forever</i>
                                      </a>
                                      <br />
                                      <a
                                        class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                                      >
                                        <i class="material-icons">edit</i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row" class="even">
                                    <td>Pro</td>
                                    <td>2020-02-06</td>
                                    <td>
                                      <a
                                        class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                                      >
                                        <i class="material-icons">delete_forever</i>
                                      </a>
                                      <br />
                                      <a
                                        class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                                      >
                                        <i class="material-icons">edit</i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <br />
                              <div
                                class="dataTables_info"
                                id="data-table-simple_info"
                                role="status"
                                aria-live="polite"
                              >Showing 1 to 10 of 57 entries</div>
                              <div
                                class="dataTables_paginate paging_simple_numbers"
                                id="data-table-simple_paginate"
                              >
                                <a
                                  class="paginate_button previous disabled"
                                  aria-controls="data-table-simple"
                                  data-dt-idx="0"
                                  tabindex="-1"
                                  id="data-table-simple_previous"
                                >Previous</a>
                                <span>
                                  <a
                                    class="paginate_button current"
                                    aria-controls="data-table-simple"
                                    data-dt-idx="1"
                                    tabindex="0"
                                  >1</a>
                                  <a
                                    class="paginate_button"
                                    aria-controls="data-table-simple"
                                    data-dt-idx="2"
                                    tabindex="0"
                                  >2</a>
                                  <a
                                    class="paginate_button"
                                    aria-controls="data-table-simple"
                                    data-dt-idx="3"
                                    tabindex="0"
                                  >3</a>
                                  <a
                                    class="paginate_button"
                                    aria-controls="data-table-simple"
                                    data-dt-idx="4"
                                    tabindex="0"
                                  >4</a>
                                  <a
                                    class="paginate_button"
                                    aria-controls="data-table-simple"
                                    data-dt-idx="5"
                                    tabindex="0"
                                  >5</a>
                                </span>
                                <a
                                  class="paginate_button next"
                                  aria-controls="data-table-simple"
                                  data-dt-idx="6"
                                  tabindex="0"
                                  id="data-table-simple_next"
                                >Next</a>
                              </div>
                            </div>
                          </div>
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
      <masterfoot></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
export default {
  name: "Level",
  created() {
    document.title = "Level";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot
  }
};
</script>

<style>
</style>