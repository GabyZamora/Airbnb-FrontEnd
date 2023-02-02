<template>
    <main>
        <div class="container">
            <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                <div class="card-img-left d-none d-md-flex">
                    <!-- Background image for card set in CSS! -->
                </div>
                <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title text-center mb-5 fw-light fs-5">Registrar</h5>
                    <form @submit.prevent="registro">

                    <div class="form-floating mb-3">
                        <input type="text" v-model="name" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus>
                        <label for="floatingInputUsername">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" v-model="email" class="form-control" id="floatingInputEmail" pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?" placeholder="name@example.com">                        
                        <label for="floatingInputEmail">Email</label>
                    </div>


                    <div class="form-floating mb-3">
                        <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                    <!-- <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password">
                        <label for="floatingPasswordConfirm">Confirm Password</label>
                    </div> -->

                    <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-submit btn-login fw-bold text-uppercase" type="submit">Registrar</button>
                    </div>

                    <a class="d-block text-center mt-2 small" href="/login">Tienes una cuenta? Iniciar sesión</a>

                    <!-- <hr class="my-4">

                    <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                        <i class="fab fa-google me-2"></i> Sign up with Google
                        </button>
                    </div>

                    <div class="d-grid">
                        <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                        <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
                        </button>
                    </div> -->

                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script>
import '../../assets/css/auth.css'

export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        //login
        /*function emailvalidate(){
            const email = document.getElementById('FloatingInputEmail')
            valido = document.getElementById('emailOK');
                
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            //Se muestra un texto a modo de ejemplo, luego va a ser un icono
            if (emailRegex.test(email.value)) {
            valido.innerText = "válido";
            } else {
            valido.innerText = "incorrecto";
            }
        },*/
    
        async registro()
        {
            var payload = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            await this.axios.post('/registro', payload)
            .then(response => {
                this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;//login bearer
                localStorage.setItem('token', response.data.token);//guardar token en storage
                localStorage.setItem('id', response.data.usuario.id);
                this.$store.commit('setAuthenticated', true);
                this.$store.commit('setUserdata', response.data.usuario.name);
                this.$router.push('/');
            })
            .catch(error => {
                var data = error.response.data;
            });
        },
    },
}
</script>