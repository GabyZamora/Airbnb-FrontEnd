<script setup>
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
import FooterComponent from '../../components/footers/FooterComponent.vue'
</script>

<template>
<home-header-component />
<div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/Pn6iimgM-wo/1600x900/" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/tXqVe7oO-go/1600x900/" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/QfEfkWk1Uhk/1600x900/" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="nombre-lugar">
        <b>Nombre del Lugar</b>
        <h3>$60.00</h3>
    </div>
    <div class="descripcion.lugar">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut, optio. Ratione suscipit ullam, repellat veniam placeat obcaecati
            rerum accusamus mollitia, velit rem necessitatibus tempora neque perspiciatis ipsa voluptate autem cumque.</h5>
    </div>
</div>
<footer-component />
</template>

<script>
import '../../assets/css/detail.css'
</script>

<style>

</style>
