<script>
    import {getAttendance} from "$lib/dbManager.js"
    let total = 100;
    let present = 69;
    export let name = "Shakir"
    export let attendance = (present / total) * 100;
</script>

<div class="container">
    <div class="card"></div>
    <div class="card-body">
        <h1 class="lead">Name: {name}</h1>
        <h1 class="lead">Attendance: {attendance}</h1>
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: {attendance}%"></div>
        </div>
    </div>
</div>

<style>
    .card {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .card-body {
        height: 50vmin; 
        width: 30;
    }
</style>