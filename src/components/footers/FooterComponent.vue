<template>
<footer class="bg-link">
    <div class="container p-4">
        <!--Social Media-->
        <section class="mb-4">
            <!-- Facebook -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
            <!-- Twitter -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee" href="#!" role="button"><i class="fab fa-twitter"></i></a>
            <!-- Instagram -->
            <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac" href="#!" role="button"><i class="fab fa-instagram"></i></a>
        </section>

        <!--Links-->
        <section>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 mb-md0">
                    <ul class="list-unstyled mb-0">
                        <li>
                            <router-link to="/about" class="text-light">Sobre Nosotros</router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="text-light">Contactanos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <hr>

        <div class="text-center p-3" id="copyright">
            © 2022 Todos los derechos reservados
        </div>
    </div>
</footer>
</template>

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

footer {
    padding: 10px 10px 0 10px;
    margin-bottom: 0px;
    margin-top: 10px;
    background-color: var(--navblue);
    color: white;
}
</style>
