<script setup>
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
import HouseComponent from '../../components/guest/HouseComponent.vue'
import FooterComponent from '../../components/footers/FooterComponent.vue';
import SearchComponent from '../../components/guest/SearchComponent.vue'
</script>

<template>
  <HomeHeaderComponent />
  <SearchComponent />
  <HouseComponent />
  <FooterComponent />
</template>

<script>
import '../../assets/css/guest.css'
</script>