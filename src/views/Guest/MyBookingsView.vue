<template>
    <home-header-component />
<main>
    <div class="container" id="container">
        <div class="row justify-content-center">                
            <div class="col-md-12">
                <h3>Mis Reservas</h3>                         
                <div> 
                    <table class="table">            
                        <thead>
                            <tr>
                                <th>Alojamiento</th>
                                <th>Fecha de llegada</th>
                                <th>Fecha de salida</th>
                                <th>Precio</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody v-for="dataReserva in dataReservas" :key="dataReserva.id">
                                <tr>
                                    <td>{{dataReserva.lugar.nombre}}</td>
                                    <td>{{ dataReserva.checkin }}</td>
                                    <td>{{ dataReserva.checkout }}</td>
                                    <td>${{ dataReserva.preciototal }}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" @click.prevent="verReserva(dataReserva.id)"><i class="fa fa-eye"></i></button>
                                    </td>
                                </tr>
                        </tbody>                    
                    </table>                    
                </div>    
            </div>
        </div>
    </div>
</main>
<footer-component />
</template>

<script>
import '../../assets/css/book.css'
import axios from 'axios'
import FooterComponent from '../../components/footers/FooterComponent.vue'
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
export default {
    name: 'MyBookings',
    data: () => ({
        dataReservas: null,
    }),
    components: {
        FooterComponent,
        HomeHeaderComponent
    },

    created(){
        axios.get('http://back-api.test/api/user/reservauser').then( 
            result =>{
                this.dataReservas = result.data.data
            })
    },
    methods:{
        verReserva(idServicio)  {
            this.$router.push('/detailbooking/' + idServicio)
        },
    }
}
</script>