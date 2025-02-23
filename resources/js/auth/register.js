import { createApp } from "vue";
import register from "../components/Register.vue";
// import pruebaregister from "../components/pruebaregister.vue";


const registerApp = createApp({
    data() {
        return {
            mensaje : 'Hola'
        };
    },
    componets : {
        // "register": register,

        // "prueba-register" : pruebaregister
    }
});
registerApp.component("Register", register);
registerApp.mount("#register");
