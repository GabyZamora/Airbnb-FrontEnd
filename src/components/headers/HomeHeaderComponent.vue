<template>
    <div class="bg-nav">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid col">
                        <a class="navbar-brand" href="/"><img src="../../assets/img/logo-airbnb.png" width="40" alt=""> Airbnb</a>
                    </div>
                    <div class="container-fluid col d-flex justify-content-center">
                        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                    </div>
                    <div class="container-fluid col d-flex flex-row-reverse">
                        <li class="nav-item dropdown d-flex">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../assets/img/logo-airbnb.png" width="30" alt="">
                            </a>
                            <ul class="dropdown-menu" id="derecha">
                                <li>
                                    <RouterLink class="dropdown-item" v-if="$store.state.isAuthenticated" to="/panel">{{$store.state.name}}</RouterLink>
                                </li>
                                <hr v-if="$store.state.isAuthenticated">
                                <li>
                                    <RouterLink class="dropdown-item" v-if="!$store.state.isAuthenticated" to="/login">Iniciar sesión</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="dropdown-item" v-if="!$store.state.isAuthenticated" to="/register">Registrarse</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="dropdown-item" v-if="$store.state.isAuthenticated" to="/myproperties">Mis Propiedades</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="dropdown-item" v-if="$store.state.isAuthenticated" to="/mybookings">Mis Reservas</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="dropdown-item" v-if="$store.state.isAuthenticated" @click="logout()" to="/">Logout</RouterLink>
                                </li>
                                <!-- <li><hr class="dropdown-divider"></li> -->
                                <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                            </ul>
                        </li>
                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    //importing bootstrap 5 Modules
    export default {
        data() {
            return {
    
            }
        },
        methods: {
            //cerrar sesion
            async logout() {
                await this.axios.post('/user/logout')
                    .then(response => {
                        this.$store.commit('setAuthenticated', false);
                        this.$store.commit('setUserdata', '');
                        localStorage.removeItem('token');
                        localStorage.removeItem('id');
                        // this.$router.push('/');
                    })
                    .catch(error => {
                        var data = error.response.data;
                    });
            },
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
    
    #derecha {
        top: 130%;
        left: 0px;
    }
    
    .bg-nav {
        background-color: var(--orangelighting);
    }
    </style>
    