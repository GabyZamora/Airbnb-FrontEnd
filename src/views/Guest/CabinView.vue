<script setup>
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
import CabinComponent from '../../components/guest/CabinComponent.vue'
import FooterComponent from '../../components/footers/FooterComponent.vue';
import SearchComponent from '../../components/guest/SearchComponent.vue'
</script>

<template>
  <HomeHeaderComponent />
  <SearchComponent />
  <CabinComponent />
  <FooterComponent />
</template>

<script>
import '../../assets/css/guest.css'
</script>