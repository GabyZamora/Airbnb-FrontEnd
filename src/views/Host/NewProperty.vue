<template>
    <home-header-component />
    <main>
        <div class="container" id="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Agregar Nuevo Alojamiemto</div>
                        <div class="card-body">
                            <form enctype="multipart/form-data">
                                <div class="row mb-3">
                                    <label for="nombre" class="col-md-4 col-form-label text-md-end">Nombre del alojamiento:</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" v-model="form.nombre">
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="descripcion" class="col-md-4 col-form-label text-md-end">Descripción:</label>
                                    <div class="col-md-6">
                                        <textarea name="descripcion" class="form-control" v-model="form.descripcion" id="descripcion" cols="50"></textarea>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="direccion" class="col-md-4 col-form-label text-md-end">Dirección:</label>
                                    <div class="col-md-6">
                                        <input type="text" v-model="form.direccion" id="icon" class="form-control" placeholder="&#xf3c5;">
                                    </div>
                                </div>
                                <div class="row mb-3">
    
                                    <label for="categoria" class="col-md-4 col-form-label text-md-end">Categoría:</label>
                                    <div class="col-md-6">
                                        <div>
                                            <select class="form-select" v-model="form.categoria_id" id="idCategoria">
                                                <option v-for="dataCategoria in dataCategorias" v-bind:key="dataCategoria" v-bind:value="dataCategoria.id">
                                                    {{ dataCategoria.nombre }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label class="col-md-4 col-form-label text-md-end">Numero de Huéspedes:</label>
                                    <div class="col-md-6">
                                        <input type="number" v-model="form.numhuesped" id="numhuesped" name="numhuesped" class="form-control" autofocus min="1" pattern="^[0-9]+">
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label for="precio" class="col-md-4 col-form-label text-md-end">Ingrese el Precio en Dolares:</label>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" id="precio" name="precio" v-model="form.precio">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="input-group px-2 py-2 rounded-pill bg-white shadow-sm">
                                        <input id="upload" type="file" @change="AddFile"
                                            class="form-control border-0">
                                        <label for="precio" class="col-md-4 col-form-label text-md-end">Elige una imagen</label>
                                    </div>
                                </div>
                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-3 ">
                                        <button type="button" class="btn" v-on:click="guardar()">Registrar Lugar</button>
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
    import '../../assets/css/host.css'
    import axios from 'axios'
    import FooterComponent from '../../components/footers/FooterComponent.vue'
    import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue'
    export default {
        name: 'NewProperty',
        data() {
            return{
                form: {
                    "nombre": "",
                    "descripcion": "",
                    "direccion": "",
                    "categoria_id": "",
                    "numhuesped": "",
                    "precio": "",
                    "imagen":"",
                    "user_id": ""
                },
                dataCategorias: [],
            }
        },
    
        async mounted(){
            axios.get('http://back-api.test/api/user/categorias').then( 
                result => {
                    this.dataCategorias = result.data.data;
                }) 
        },
    
        methods:{
            AddFile(e) {
                this.form.imagen = e.target.files[0];
            },
            guardar(){
                let form = new FormData();
                for (let key in this.form){
                    form.append(key, this.form[key])
                }
                axios.post('http://back-api.test/api/user/lugares',form).then(
                    response => {
                        this.$router.push('/myproperties')
                    })
            }
        },
        components: { HomeHeaderComponent, FooterComponent },
    
    
    }
    </script>
    