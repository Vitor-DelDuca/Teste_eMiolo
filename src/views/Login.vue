<template>
    <div class="login">
        <h1>Fazer login:</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="register">Enviar</button></p>
        <p><button @click="signInWithGoogle">Login com Google</button></p>
    </div>
</template>

<script setup>

    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { useRouter } from 'vue-router';

    const email = ref("");
    const password = ref("");
    const errMsg = ref()
    const router = useRouter()

    const register = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Efetuado login com sucesso!");
            console.log(auth.currentUser);
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        });
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((result) => {
                console.log(result.user);
                router.push("/feed");
            })
            .catch((error) => {

            });
    };
</script>

<style scoped>
.login {
    margin-top: 200px;
    margin-left: 600px;
}
</style>