<template>
    <div class="register">
        <h1>Criar uma conta</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Enviar</button></p>
        <p><button @click="signInWithGoogle">Registrar com Google</button></p>
    </div>
</template>

<script>

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';
// import Registrados from '../database/connection.js';

const email = ref("");
const password = ref("");
const router = useRouter()

const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Registrado com sucesso!");
            console.log(auth.currentUser);
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });

        // Registrados.create(
        //     email.value, password.value
        // ).then((data) => {
        //     console.log("Registrado com sucesso!");
        //     router.push('/feed')
        // })
        // .catch((error) => {
        //     alert(error.message);
        // });
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((result) => {
                console.log(result.user);
                router.push("/feed");
            })
            .catch((error) => {
                alert(error.message);
            })
    };

</script>

<style scoped>
.register {
    margin-top: 200px;
    margin-left: 600px;
}
</style>