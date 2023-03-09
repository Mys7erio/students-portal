<script>
  import { LoginStatus } from "./stores";
</script>

{#if $LoginStatus.loggedIn}
  <h1 class="display-3">{$LoginStatus.userInfo.first_name} ({$LoginStatus.userInfo.role})</h1>
{:else}
  <h1 class="display-3">You are logged out</h1>
{/if}
