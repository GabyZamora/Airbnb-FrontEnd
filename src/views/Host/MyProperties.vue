<template>
    <home-header-component />
    <main>        
        <div class="container" id="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="col-sm-14">
                        <router-link class="btn" to="/addproperty">Nuevo Lugar</router-link>
                    </div>
                    <br>                                       
                    <div>   
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Alojamiento</th>
                                    <th>Descripcion</th>
                                    <th>Ubicacion</th>
                                    <th>Número de Huespedes</th>
                                    <th>Precio</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>                     
                                <tbody  v-for="dataLugar in dataLugares" :key="dataLugar.id">                            
                                    <tr>
                                        <td>{{ dataLugar.nombre }}</td>
                                        <td>{{ dataLugar.descripcion }}</td>
                                        <td>{{ dataLugar.direccion }}</td>
                                        <td>{{dataLugar.numerohuesped}}</td>
                                        <td>${{ dataLugar.precio }}</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm" @click.prevent="verPropiedad(dataLugar.id)"><i class="fa fa-edit"></i></button>
                                        </td>
                                        <td>
                                            <button @click="deleteProperties(properties)" class="btn btn-danger">
                                                <i class="fa fa-trash"></i>
                                            </button>
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
    import '../../assets/css/host.css'
    import axios from 'axios'
    import FooterComponent from '../../components/footers/FooterComponent.vue'
    import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
    export default {
        name: 'MyProperties',
        data: () => ({
            dataLugares: null,
        }),
        components: {
            FooterComponent,
            HomeHeaderComponent
        },
    
        created(){
            axios.get('http://back-api.test/api/user/lugaruser').then( 
                result =>{
                    this.dataLugares = result.data.data
                })
        },
        methods:{
        verPropiedad(idServicio)  {
            this.$router.push('/editproperty/' + idServicio)
        },
    }
    
    }
    </script>
    