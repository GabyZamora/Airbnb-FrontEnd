<template>
<div class="busqueda">
    <div align="center">
        <input type="search" placeholder="Buscar un lugar..." name="busquedaInicio" style="padding-left:15px;">
        <br>
        <label>¿Qué estás buscando?</label>
    </div>
    <div class="icons-busqueda">
        <router-link to="/houses">
            <span>
                <i class="fa-solid fa-house"></i>
                <label class="label-icon-busqueda">Casas</label>
            </span>
        </router-link>
        <router-link to="/hotel">
            <span>
                <i class="fa-solid fa-hotel"></i>
                <label class="label-icon-busqueda">Hoteles</label>
            </span>
        </router-link>
        <router-link to="/cabins">
            <span>
                <i class="fa-solid fa-campground"></i>
                <label class="label-icon-busqueda">Cabañas</label>
            </span>
        </router-link>
    </div>
</div>
</template>


<script>
export default {
    name: 'SearchComponent',
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  
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

.busqueda input {
    margin-top: 35px;
    border-radius: 25px;
    border-color: var(--blue);
    border-width: 2.5px;
    width: 500px;
    height: 50px;
    font-family: 'Comfortaa';
}

.busqueda label {
    margin-top: 20px;
    font-family: 'Comfortaa';
    font-size: 30px;
}

.icons-busqueda {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.icons-busqueda a {
    text-decoration: none;
    color: black;
}

.icons-busqueda span i {
    font-size: 50px;
    padding-left: 60px;
    padding-right: 30px;
}

.icons-busqueda .label-icon-busqueda {
    font-family: 'Comfortaa';
    font-size: 18px;
}
</style>
