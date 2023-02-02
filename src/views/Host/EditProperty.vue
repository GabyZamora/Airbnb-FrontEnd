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
                        <div class="card-header">Editar lugar</div>
                        <div class="card-body">
                            <form>
                                <div class="row mb-3">
                                    <label for="nombre" class="col-md-4 col-form-label text-md-end">Nombre:</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" v-model="form.nombre">
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="descripcion" class="col-md-4 col-form-label text-md-end">Descripcion:</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" v-model="form.descripcion">
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="direccion" class="col-md-4 col-form-label text-md-end">Direccion:</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" v-model="form.direccion">
                                    </div>
                                </div>
                                <div class="row mb-3">
    
                                    <label for="categoria" class="col-md-4 col-form-label text-md-end">Categoria:</label>
                                    <div class="col-md-6">
                                        <div>
                                            <select class="form-select" v-model="form.categoria_id">
                                                <option v-for="dataCategoria in dataCategorias" v-bind:key="dataCategoria" v-bind:value="dataCategoria.id">
                                                    {{ dataCategoria.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label class="col-md-4 col-form-label text-md-end">Numero de Huespedes:</label>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" v-model="form.numhuesped">
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="precio" class="col-md-4 col-form-label text-md-end">Ingrese el Precio en Dolares:</label>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" v-model="form.precio">
                                    </div>
                                </div>
    
                                <!--div class="row mb-3">
                                    <div class="input-group px-2 py-2 rounded-pill bg-white shadow-sm">
                                        <input id="upload" type="file" @change="AddFile"
                                            class="form-control border-0">
                                        <label for="precio" class="col-md-4 col-form-label text-md-end">Elige una imagen</label>
                                    </div>
                                </div-->
                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-3 ">
                                        <button type="button" class="btn" v-on:click="editar()">Guardar cambios</button>
                                    </div>
                                </div>
                            </form>
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
            lugar: null,
            form: {
                    "nombre": "",
                    "descripcion": "",
                    "direccion": "",
                    "categoria_id": "",
                    "numhuesped": "",
                    "precio": "",
                    //"imagen":"",
                    "user_id": "",
                    "estado":""
            },
            dataLugares: {},
            dataCategorias: [],
        }
    },
        
    async mounted() {
        this.lugar = this.$route.params.id;
        axios.get('http://back-api.test/api/user/lugares/'+ this.lugar).then(
            response => {
            this.form.nombre = response.data.nombre;
            this.form.descripcion = response.data.descripcion;
            this.form.categoria_id = response.data.categoria.categoria_id;
            this.form.direccion = response.data.direccion;
            this.form.numhuesped = response.data.numerohuesped;
            this.form.precio = response.data.precio;
            this.form.imagen = response.data.imagen;
            this.form.estado = response.data.estado;
            //console.log(response.data)
        }),
        axios.get('http://back-api.test/api/user/categorias').then( 
                result => {
                    this.dataCategorias = result.data.data;
                    //console.log(result.data.data)
            }) 
    },
    methods:{
            /*AddFile(e) {
                this.form.imagen = e.target.files[0];
            },*/
            editar(){
                /*let form = new FormData();
                for (let key in this.form){
                    form.append(key, this.form[key])
                }*/
                axios.put('http://back-api.test/api/user/lugares/'+this.lugar, this.form).then(
                    response => {
                        console.log(this.form)
                        this.$router.push('/myproperties')
                    })
            }
        },
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
    