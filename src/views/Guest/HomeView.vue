<script setup>
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
import CardComponent from '../../components/guest/CardComponent.vue'
import FooterComponent from '../../components/footers/FooterComponent.vue';
import SearchComponent from '../../components/guest/SearchComponent.vue'
</script>

<template>
  <HomeHeaderComponent />
  <SearchComponent />
  <CardComponent />
  <FooterComponent />
</template>

<script>
import '../../assets/css/guest.css'
</script>