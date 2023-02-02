<template>
    <main>
        <div class="container">
            <div class="row">
                <div v-for="dataLugar in dataLugares" v-bind:key="dataLugar.id">
                    <div class="card d-flex col-sm-3 flex-column justify-content-between" style="width: 19rem;">
                        <div class="card-image-home my-2">
                            <img :src="'http://back-api.test/storage/Imagen/'+dataLugar.imagen" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{dataLugar.nombre}}</h5>
                            <p class="card-text">{{ dataLugar.descripcion }}</p> 
                            <h5 class="card-title">${{ dataLugar.precio }}</h5>
                            <button class="btn btn-primary btn-sm" @click.prevent="verReserva(dataLugar.id)">Reservar</button>
                            <!-- <a class="card-img-overlay"><i class="far fa-heart"></i></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </main>
</template>

<script>
import '../../assets/css/guest.css'
import axios from 'axios'

export default{
    name: 'Home',
    data: () => ({
        dataLugares: null,
    }),

    created(){
        axios.get('http://back-api.test/api/user/lugares').then( 
            result =>{
                this.dataLugares = result.data.data
                console.log(result.data.data)
            })
    },

    methods:{
        verReserva(idServicio)  {
            this.$router.push('/bookregister/' + idServicio)
        },
    }

}
</script>