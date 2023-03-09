<script>
    export let icon;
    export let title;
    export let desc;
    export let href;
</script>



<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="{icon}" alt="Logo">
    <div class="card-body">
        <h4 class="card-title card-hover-text text-center">{title}</h4>
        <p class="card-hover-text text-center">{desc}</p>
        <a {href} class=" card-hover-text btn btn-primary">View</a>
    </div>
</div>



<style>
    .card {
        border: none;
        margin-left: 8vmin;
        margin-right: 8vmin;
        margin-top: 10vmin;
        margin-bottom: 10vmin;
    }
    
    .card:hover {
        border: 2px solid black;
    }

    .card-hover-text{
        display:none;
    }
    
    .card:hover .card-hover-text{
        display:block;
    }    
</style>