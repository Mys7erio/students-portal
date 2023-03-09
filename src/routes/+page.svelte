<script>
  import Card from "$lib/card.svelte";
  import { LoginStatus } from "$lib/stores.js";
</script>

<div class="container">
  <div class="display-1 text-center p-4">Home Page</div>
  <div class="row">
    <Card
      href="/view/marksheet"
      icon="/marksheet3.svg"
      title="View Marksheet"
      desc="View Marksheet For Current Semester, Previous Semester, Etc"
    />
    <Card
      href="/view/attendance"
      icon="/attendance.svg"
      title="View Attendance"
      desc="View Your Attendance For This Semester, Month, Week, Etc"
    />
    {#if $LoginStatus.loggedIn}
        {#if $LoginStatus.userInfo.role === "Administrator" || $LoginStatus.userInfo.role === "Teacher"}
            <Card
            href="/view/send_mail"
            icon="/mail.svg"
            title="Send Emails"
            desc="Send Emails to Students/ Members of Kristu Jayanti Organisation"
            />
        {/if}
    {/if}
  </div>
</div>
