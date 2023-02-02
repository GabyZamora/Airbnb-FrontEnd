import { createRouter, createWebHistory } from 'vue-router'
//Guest
import HomeView from '../views/Guest/HomeView.vue'
import CabinView from '../views/Guest/CabinView.vue'
import HouseView from '../views/Guest/HouseView.vue'
import HotelView from '../views/Guest/HotelView.vue'
import DetailView from '../views/Guest/DetailView.vue'
import MyBookingsView from '../views/Guest/MyBookingsView.vue'
//Auth
import LoginView from '../views/Auth/LoginView.vue'
import RegistroView from '../views/Auth/RegistroView.vue'
//Host
import NewProperty from '../views/Host/NewProperty.vue'
import EditProperty from '../views/Host/EditProperty.vue'
import MyProperties from '../views/Host/MyProperties.vue'

//Book
import BookRegisterView from '../views/Book/BookRegisterView.vue'
import DetailBookingView from '../views/Guest/DetailBookingView.vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://back-api.test/api/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Guest
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cabins',
      name: 'cabins',
      component: CabinView
    },
    {
      path: '/houses',
      name: 'houses',
      component: HouseView
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: HotelView
    },
    {
      path: '/propertiesdetail',
      name: 'propetiesdetail',
      component: DetailView
    },
    //Login
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegistroView
    },
    //Host
    {
      path: '/addproperty',
      name: 'addproperty',
      component: NewProperty
    },
    {
      path: '/editproperty/:id',
      name: 'editproperty',
      component: () => EditProperty
    },
    {
      path: '/myproperties',
      name: 'myproperties',
      component: MyProperties
    },
    {
      path: '/Properties',
      name: 'Properties',
      component: () => PropertiesView
    },
    //Books
    {
      path: '/bookregister/:id',
      name: 'bookregister',
      component: () => BookRegisterView
    },
    {
      path: '/mybookings',
      name: 'mybookings',
      component: MyBookingsView
    },
    {
      path: '/detailbooking/:id',
      name: 'detailbooking',
      component: () => DetailBookingView
    },
  ]
})

export default router
