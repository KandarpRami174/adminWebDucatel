<template>
  <header class="page-topbar" id="header">
    <div class="navbar navbar-fixed">
      <nav
        class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow"
      >
        <div class="nav-wrapper">
          <ul class="navbar-list right">
            <li class="dropdown-language">
              <a
                class="waves-effect waves-block waves-light translation-button"
                href="#"
                data-target="translation-dropdown"
              >
                <span class="flag-icon flag-icon-gb"></span>
              </a>
            </li>
            <li>
              <a
                class="waves-effect waves-block waves-light profile-button"
                href="javascript:void(0);"
                data-target="profile-dropdown"
              >
                <span class="avatar-status avatar-online">
                  <img
                    src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/avatar/admin.png"
                    alt="avatar"
                  />
                  <i></i>
                </span>
              </a>
            </li>
          </ul>
          <!-- translation-button-->
          <ul class="dropdown-content" id="translation-dropdown">
            <li class="dropdown-item">
              <a class="grey-text text-darken-1" href="#!" data-language="en">
                <i class="flag-icon flag-icon-gb"></i> English
              </a>
            </li>
            <li class="dropdown-item">
              <a class="grey-text text-darken-1" href="#!" data-language="fr">
                <i class="flag-icon flag-icon-fr"></i> French
              </a>
            </li>
          </ul>
          <!-- profile-dropdown-->
          <ul class="dropdown-content" id="profile-dropdown">
            <li>
              <a class="grey-text text-darken-1" href="#">
                <i class="material-icons">keyboard_tab</i> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>