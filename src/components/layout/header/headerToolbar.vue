<template>
  <!-- Topbar Navbar -->
  <ul class="navbar-nav ml-auto">
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <li class="nav-item dropdown no-arrow d-sm-none">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="searchDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-search fa-fw"></i>
      </a>
      <!-- Dropdown - Messages -->
      <div
        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
        aria-labelledby="searchDropdown"
      >
        <form class="form-inline mr-auto w-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <!-- Nav Item - Alerts -->
    <li class="nav-item">
      <cmp-selector>
        <template v-slot:label>
          <i class="fas fa-bell fa-fw"></i>
          <!-- Counter - Alerts -->
          <span class="badge badge-danger badge-counter">3+</span>
        </template>
        <template v-slot:body>
          <h6 class="dropdown-header">Alerts Center</h6>
          <a class="dropdown-item" href="#">
            <span class="icon-circle bg-primary mr-3 p-2 float-left">
              <i class="fas fa-file-alt text-white"></i>
            </span>
            <div class="text-truncate">
              <div class="small text-gray-500">December 12, 2019</div>
              <span class="font-weight-bold">A new monthly report is ready to download!</span>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <span class="icon-circle bg-success mr-3 p-2 float-left">
              <i class="fas fa-donate text-white"></i>
            </span>
            <div class="text-truncate">
              <div class="small text-gray-500">December 7, 2019</div>$290.29 has been deposited into your account!
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <span class="icon-circle bg-warning mr-3 p-2 float-left">
              <i class="fas fa-exclamation-triangle text-white"></i>
            </span>
            <div class="text-truncate">
              <div class="small text-gray-500">December 2, 2019</div>Spending Alert: We've noticed unusually high spending for your account.
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </template>
      </cmp-selector>
    </li>

    <!-- Nav Item - Messages -->
    <li class="nav-item mx-1">
      <cmp-selector>
        <template v-slot:label>
          <i class="fas fa-envelope fa-fw"></i>
          <span class="badge badge-danger badge-counter">7</span>
        </template>
        <template v-slot:body>
          <h6 class="dropdown-header">Message Center</h6>
          <a class="dropdown-item" href="#">
            <div class="font-weight-bold">
              <div
                class="text-truncate"
              >Hi there! I am wondering if you can help me with a problem I've been having.</div>
              <div class="small text-gray-500">Emily Fowler · 58m</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >I have the photos that you ordered last month, how would you like them sent to you?</div>
              <div class="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
              <div class="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
              <div class="small text-gray-500">Chicken the Dog · 2w</div>
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </template>
      </cmp-selector>
    </li>

    <div class="topbar-divider d-none d-sm-block"></div>

    <!-- Nav Item - User Information -->
    <li class="nav-item mx-1">
      <cmp-selector>
        <template v-slot:label>
          <span class="mr-2 d-none d-lg-inline small">Leonardo Mattevi</span>&nbsp;
          <span class="border border-secondary rounded-circle alg-user-align">
            <i class="fa fa-user"></i>
          </span>
        </template>
        <template v-slot:body>
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </template>
      </cmp-selector>
    </li>
  </ul>
</template>

<script>
import CmpSelector from "@/components/shared/CmpSelector.vue";
export default {
  name: "HeaderToolbar",
  data() {
    return {};
  },
  components: {
    CmpSelector
  }
};
</script>
