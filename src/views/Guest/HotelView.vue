<script setup>
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
import HotelComponent from '../../components/guest/HotelComponent.vue'
import FooterComponent from '../../components/footers/FooterComponent.vue';
import SearchComponent from '../../components/guest/SearchComponent.vue'
</script>

<template>
  <HomeHeaderComponent />
  <SearchComponent />
  <HotelComponent />
  <FooterComponent />
</template>

<script>
import '../../assets/css/guest.css'
</script>