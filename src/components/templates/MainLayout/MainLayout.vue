<template>
  <div>
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            Welcome
          </a>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><router-link class="nav-link px-2" active-class="text-secondary" to="/home">Home</router-link></li>
            <li><router-link class="nav-link px-2" active-class="text-secondary" to="/about">About</router-link></li>
          </ul>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
              aria-label="Search">
          </form>
          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
export default {
  name: 'MainLayout',
};
</script>
<style></style>
