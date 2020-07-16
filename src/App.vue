<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    // vendors min js
    let vendorsJS = document.createElement('script')
    vendorsJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/vendors.min.js'
    )
    document.body.appendChild(vendorsJS)
    
    // plugins js
    let pluginsJS = document.createElement('script')
    pluginsJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/plugins.js'
    )
    document.body.appendChild(pluginsJS)
    
    // search js
    let searchJS = document.createElement('script')
    searchJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/search.js'
    )
    document.body.appendChild(searchJS)
    
    // custom js
    let customJS = document.createElement('script')
    customJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/custom/custom-script.js'
    )
    document.body.appendChild(customJS)
    
    // customizer js
    let customizerJS = document.createElement('script')
    customizerJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/scripts/customizer.js'
    )
    document.body.appendChild(customizerJS)

    // DataTable js
    // let DataTableJS = document.createElement('script')
    // DataTableJS.setAttribute(
    //   'src',
    //   'http://webducatel.assets.fuegoinfotech.com/app-assets/vendors/data-tables/js/jquery.dataTables.min.js'
    // )
    // document.body.appendChild(DataTableJS)
    
    // // responsive js
    // let responsiveJS = document.createElement('script')
    // responsiveJS.setAttribute(
    //   'src',
    //   'http://webducatel.assets.fuegoinfotech.com/app-assets/vendors/data-tables/extensions/responsive/js/dataTables.responsive.min.js'
    // )
    // document.body.appendChild(responsiveJS)
    
    // // DataSelect js
    // let DataSelectJS = document.createElement('script')
    // DataSelectJS.setAttribute(
    //   'src',
    //   'http://webducatel.assets.fuegoinfotech.com/app-assets/vendors/data-tables/js/dataTables.select.min.js'
    // )
    // document.body.appendChild(DataSelectJS)
    
    // Modals js
    let ModalsJS = document.createElement('script')
    ModalsJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/scripts/advance-ui-modals.js'
    )
    document.body.appendChild(ModalsJS)
    
    // Users js
    let UsersJS = document.createElement('script')
    UsersJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/scripts/page-users.js'
    )
    document.body.appendChild(UsersJS)
    
    // select2 js
    let select2JS = document.createElement('script')
    select2JS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/vendors/select2/select2.full.min.js'
    )
    document.body.appendChild(select2JS)
    
    // formEditor js
    let formEditorJS = document.createElement('script')
    formEditorJS.setAttribute(
      'src',
      'http://webducatel.assets.fuegoinfotech.com/app-assets/js/scripts/form-editor.js'
    )
    document.body.appendChild(formEditorJS)
  },
};
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import '../src/app-assets/vendors/vendors.min.css';
@import '../src/app-assets/css/themes/vertical-modern-menu-template/materialize.css';
@import '../src/app-assets/css/themes/vertical-modern-menu-template/style.css';
@import '../src/app-assets/css/pages/login.css';
@import '../src/app-assets/css/custom/custom.css';
@import '../src/app-assets/vendors/data-tables/css/jquery.dataTables.min.css';
@import '../src/app-assets/vendors/data-tables/extensions/responsive/css/responsive.dataTables.min.css';
@import '../src/app-assets/vendors/data-tables/css/select.dataTables.min.css';
@import '../src/app-assets/css/pages/data-tables.css';
@import '../src/app-assets/css/pages/pricing.css';
@import '../src/app-assets/css/pages/page-users.css';
@import '../src/app-assets/vendors/select2/select2.min.css';
@import '../src/app-assets/vendors/select2/select2-materialize.css';
@import '../src/app-assets/vendors/quill/katex.min.css';
@import '../src/app-assets/vendors/quill/monokai-sublime.min.css';
@import '../src/app-assets/vendors/quill/quill.snow.css';
@import '../src/app-assets/vendors/quill/quill.bubble.css';
/* 
@import 'http://webducatel.assets.fuegoinfotech.com/';
@import 'http://webducatel.assets.fuegoinfotech.com/';
@import 'http://webducatel.assets.fuegoinfotech.com/';
@import 'http://webducatel.assets.fuegoinfotech.com/';
@import 'http://webducatel.assets.fuegoinfotech.com/'; */
</style>