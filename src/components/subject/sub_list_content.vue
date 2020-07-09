<template>
  <div id="main">
    <div class="row">
      <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
      <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
        <!-- Search for small screen-->
        <div class="container">
          <div class="row">
            <div class="col s10 m6 l6">
              <h5 class="breadcrumbs-title mt-0 mb-0">
                <span>Subject</span>
              </h5>
              <ol class="breadcrumbs mb-0">
                <li class="breadcrumb-item active"></li>
              </ol>
            </div>
            <div class="col s2 m6 l6">
              <a
                class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2 mt-5"
              >Download</a>
              <router-link
                to="/addSubject"
                class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right mt-5"
              >
                <a>Add</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col s12 m12 l12">
          <div id="responsive-table" class="card card card-default scrollspy">
            <div class="card-content">
              <div class="row">
                <div class="col s12">
                  <table class="responsive-table">
                    <thead>
                      <tr role="row">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Add On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd">
                        <td tabindex="0" class="sorting_1">
                          <img
                            src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/gallery/1.png"
                            width="160px"
                            alt="sample"
                          />
                        </td>
                        <td>Account</td>
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
                        <td class="sorting_1" tabindex="0">
                          <img
                            src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/gallery/2.png"
                            width="160px"
                            alt="sample"
                          />
                        </td>
                        <td>Managment</td>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>