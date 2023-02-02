
<script setup>
import '../../assets/css/book.css'
import axios from 'axios';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router'
import FooterComponent from '../../components/footers/FooterComponent.vue';
import HomeHeaderComponent from '../../components/headers/HomeHeaderComponent.vue';
//import BookRegister from '../../components/book/BookRegisterComponent.vue'

const route = useRoute()
console.log(route.params)
</script>
<template>
    <home-header-component />
    <main>
        <div class="containerbook">
            <div class="row">
                <div class="col-lg-10 col-xl-9 mx-auto">
                    <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div class="card mt-3 px-2 ms-3 col-md-3 col-lg-3 mt-2" style="width: 19rem;">
                            <div class="card-image-home my-2" posit>
                                <img :src="'http://back-api.test/storage/Imagen/'+dataLugares.imagen" class="card-img-top" alt="...">
                            </div>                    
                            <div class="card-body">
                            <h5 class="card-title">{{ dataLugares.nombre }} </h5>                                  
                                <p>{{ dataLugares.descripcion }}</p>
                                <div class="form-floating mb-3">
                                    <input type="num" class="form-control" id="floatingInputPrice" name="precio" v-model="dataLugares.precio"
                                    readonly>
                                    <label for="floatingInputPrice">Precio por noche</label>
                                </div>
                                <h5><b>Dirección:</b> {{ dataLugares.direccion }}</h5>
                                <h5><b>Número de huespedes:</b> {{ dataLugares.numerohuesped }}</h5>

                                <!--h5><b>Propietario:</b> {{dataLugares.author.user}}</h5>
                                <h5><b>Contacto:</b> {{dataLugares.author.email}}</h5-->
                            </div>
                        </div>
                        <div class="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">Realiza tu reserva aquí</h5>
                            <form>    
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" required
                                    autofocus min="1" pattern="^[0-9]+" id="numhuesped">
                                    <label for="floatingInputPeaple">Número de huéspedes</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="date" class="form-control" id="checkin" max="2023-12-31" required autofocus @input="calculated(), validateIn()">
                                    <label for="checkIn">Fecha de llegada</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="date" class="form-control" id="checkout" required autofocus @input="calculated()">
                                    <label for="checkOut">Fecha de salida</label>
                                </div>
                            
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" readonly id="totaldias">
                                    <label for="totalDays">Noches agendadas</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="preciototal" readonly>
                                    <label for="preciototal">Precio total de reserva</label>
                                </div>
                                <!-- Button -->
                                <div class="d-grid mb-2">
                                    <button class="btn btn-lg btn-submit btn-book fw-bold text-uppercase"
                                    type="submit" @click.prevent="calculate()">Reservar</button>
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
    name: 'book',
    data() { 
        
        return {
            dataLugares: {},      
        }
    },
    

    async mounted() {
        this.lugar = this.$route.params.id;
        axios.get('http://back-api.test/api/user/lugares/'+ this.lugar).then(
            response => {
            this.dataLugares = response.data
            console.log(response.data)
        })
    },


    methods: {
        validateIn(){
            checkin.min = new Date().toISOString().split("T")[0];
            checkout.min = new Date().toISOString().split("T")[0];
        },
        calculate: function () {
            const checkIn = new Date(document.getElementById("checkin").value);

            const checkOut = new Date(document.getElementById("checkout").value);

            if (checkOut > checkIn) {
                const diff = checkOut.getTime() - checkIn.getTime();
                document.getElementById("totaldias").value = Math.round(diff / (1000 * 60 * 60 * 24));
                const totalDays = document.getElementById("totaldias").value;
                const precio = document.getElementById("floatingInputPrice").value;
                document.getElementById("preciototal").value  = totalDays * precio;
                const total = document.getElementById("preciototal").value;
                const numhuesped = document.getElementById("numhuesped").value
                const checkInn = new Date(checkIn).toISOString().slice(0, 10);
                const checkOutt = new Date(checkOut).toISOString().slice(0, 10);
                if(total > 0) {
                    axios({
                    method: 'POST',
                    url: 'http://back-api.test/api/user/reservas',
                    data: {
                        checkin: checkInn,
                        checkout: checkOutt,
                        lugar_id: this.lugar,
                        numhuesped: numhuesped,
                        preciototal: total,
                    }
                    }).then(response => this.$router.push('/mybookings')).catch(function (error) {
                        console.log('Falló');
                    })
                }
            else{
                console.log('Debe ser mayor')
            }
        }
        else{
            alert("No se puede realizar la reserva");
        }
    },

    calculated: function(){
        const checkIn = new Date(document.getElementById("checkin").value);

            const checkOut = new Date(document.getElementById("checkout").value);

            if (checkOut > checkIn) {
                const diff = checkOut.getTime() - checkIn.getTime();
                document.getElementById("totaldias").value = Math.round(diff / (1000 * 60 * 60 * 24));
                const totalDays = document.getElementById("totaldias").value;
                const precio = document.getElementById("floatingInputPrice").value;
                document.getElementById("preciototal").value  = totalDays * precio;
                const total = document.getElementById("preciototal").value;
            }  
            else if (checkOut != null && checkOut < checkIn) {
                alert("La fecha de salida debe ser mayor a la fecha de llegada");
                document.getElementById("totaldias").value = 0;
                document.getElementById("preciototal").value = 0;
            }
        },


        // Funcion para que fechas pasadas no sean seleccionadas en fecha de salida
        validateOut: function () {
            var today = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
            console.log(date.toLocaleDateString('en-US'));
            var year = today.getFullYear();
            var day = today.getDate();
            var _month = today.getMonth(); //viene con valores de 0 al 11
            _month = _month + 1; //ahora lo tienes de 1 al 12
            if (_month < 10) //ahora le agregas un 0 para el formato date
            {
                var month = "0" + _month;
            } else {
                var month = _month.toString;
            }

            var minDate = year + '-' + month + '-' + day; // Nueva variable

            document.getElementById("checkOut").setAttribute('min', minDate);
        },
        
    },
    components: { HomeHeaderComponent, FooterComponent },

}

</script>