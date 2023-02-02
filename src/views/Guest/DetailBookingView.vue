<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router'
import FooterComponent from '../../components/footers/FooterComponent.vue'
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
//import BookRegister from '../../components/book/BookRegisterComponent.vue'

const route = useRoute()
console.log(route.params)
</script>
<template>
    <home-header-component />
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Detalles de la Reserva</div>
                        <div class="card-body">
                            <div  v-for="dataReserva in dataReservas" :key="dataReserva.id">
                                <div class="row mb-3">
                                    <label for="nombre" class="col-md-4 col-form-label text-md-end">Lugar:</label>
                                    <div class="col-md-6">
                                        <h5>{{ dataReserva.lugar.nombre}}</h5>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="descripcion" class="col-md-4 col-form-label text-md-end">Fecha de entrada:</label>
                                    <div class="col-md-6">
                                        <h5>{{dataReserva.checkin}}</h5> 
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="direccion" class="col-md-4 col-form-label text-md-end">Fecha de salida:</label>
                                    <div class="col-md-6">
                                        <h5>{{dataReserva.checkout}}</h5>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-md-4 col-form-label text-md-end">Numero de Huespedes:</label>
                                    <div class="col-md-6">
                                        <h5>{{dataReserva.numerohuesped}}</h5>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="precio" class="col-md-4 col-form-label text-md-end">Precio total de la reserva</label>
                                    <div class="col-md-6">
                                        <h5>${{dataReserva.preciototal}}</h5> 
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="" class="col-md-4 col-form-label text-md-end">Propietario</label>
                                    <div class="col-md-6">
                                        <h5>{{dataReserva.author.user}}</h5> 
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="" class="col-md-4 col-form-label text-md-end">Contacto</label>
                                    <div class="col-md-6">
                                        <h5>{{dataReserva.author.email}}</h5> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer-component />
    </template>
    
    <script>

    export default {
    name: 'EditProperty',
    components: { HomeHeaderComponent, FooterComponent },
    data() {
        return{
            dataReservas: null,
        }
    },
        
    async mounted() {
        this.reserva = this.$route.params.id;
        axios.get('http://back-api.test/api/user/reservas/'+ this.reserva).then(
            response => {
            this.dataReservas = response.data
            console.log(response.data)
        })
    }
    
    }
    </script>
    
    <style scoped>
    * {
        --orangelight: #ffa364;
        --pomegranate: #eb3e1b;
        --orangelighting: #fb6d10;
        --darkorange: #fc7643;
        --orange: #af4f41;
        --navblue: #273248;
        --blue: #2e2e41;
        --cream: #ffebd2;
    }
    
    .btn {
        background-color: orange;
    }
    
    .container {
        margin-top: 25px;
        margin-bottom: 25px;
    
    }
    
    input {
        border-radius: 5px;
        height: 40px;
    }
    
    #terminos {
        padding-top: 0%;
    }
    </style>
    