<script>
  export let form;
  import { LoginStatus } from "../../lib/stores";
  import { redirect } from "@sveltejs/kit";

  function setLogin(context) {
    LoginStatus.set({
      loggedIn: true,
      userInfo: context,
    });
  }
</script>

<section class="vh-100">
  <div class="container-fluid h-custom">
    <div
      class="row d-flex justify-content-center align-items-center text-center h-100"
    >
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img
          src="/kjc logo.png"
          class="img-fluid"
          alt="Kristu Jayanti College Logo"
        />
        <h1 class="display-5 py-5">Kristu Jayanti Students Portal</h1>
      </div>

      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <!-- <form on:submit|preventDefault={handleLogin}> -->
        <form method="POST">
          <div class="p-5">
            <h1 class="display-1 text-center"><b>Sign in</b></h1>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <!-- <input type="email" name="email" class="form-control form-control-lg" -->
            <input
              name="email"
              class="form-control form-control-lg"
              placeholder="Enter college email address"
            />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input
              type="password"
              name="password"
              class="form-control form-control-lg"
              placeholder="Enter password"
            />
          </div>

          {#if form?.incorrect}
            <p class="text-danger">Invalid Username or Password</p>
          {/if}

          {#if form?.success}
            {setLogin(form?.userInfo)}
          {/if}

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
              />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <!-- <a href="#!" class="text-body">Forgot password?</a> -->
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <a href="#!" class="link-danger">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .h-custom {
    height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
    .h-custom {
      height: 100%;
    }
  }
</style>
