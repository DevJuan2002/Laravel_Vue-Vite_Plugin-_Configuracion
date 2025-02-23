<template>
  <div class="container">
    <div class="login-card">
      <div class="brand">
        <h1 class="title">
          <span class="title-part1">MiAyuda</span><span class="title-part2">Tics</span>
        </h1>
         
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <input v-model="formData.name" type="text" id="name" required autocomplete="name">
          <label for="name">Nombre</label>
          <div v-if="errors.name" class="error">{{ errors.name }}</div>
        </div>
        <div class="input-group">
          <input v-model="formData.email" type="email" id="email" required autocomplete="email">
          <label for="email">Correo</label>
          <div v-if="errors.email" class="error">{{ errors.email }}</div>
        </div>
        <div class="input-group">
          <input v-model="formData.role" type="text" id="role" required autocomplete="role">
          <label for="role">Rol</label>
          <div v-if="errors.role" class="error">{{ errors.role }}</div>
        </div>
        <div class="input-group">
          <input v-model="formData.phone" type="tel" id="phone" required autocomplete="tel">
          <label for="phone">Telefono</label>
          <div v-if="errors.phone" class="error">{{ errors.phone }}</div>
        </div>
        <div class="input-group">
          <input v-model="formData.password" type="password" id="password" required autocomplete="new-password">
          <label for="password">Correo</label>
          <div v-if="errors.password" class="error">{{ errors.password }}</div>
        </div>
        <div class="input-group">
          <input v-model="formData.confirmPassword" type="password" id="confirm-password" required autocomplete="new-password">
          <label for="confirm-password">Confirmar contraseña</label>
          <div v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</div>
        </div>
        <button type="submit" class="submit-btn">
          <span>Register</span>
          <svg class="arrow" viewBox="0 0 24 24" width="24" height="24">
            <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      formData: {
        name: 'Juan Valencia',
        email: 'juanvalencia.dev@hotmail.com',
        role: 'instructor',
        phone: '3142575734',
        password: 'juan123',
        confirmPassword: 'juan123',
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Las contraseñas no coinciden';
        return;
      }
      console.log('Formulario enviado:', this.formData);

      
      axios.post('/login/register', this.formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          if (error.response && error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary-color: #ffffff;
  --secondary-color: #04324d;
  --accent-color: #39a900;
  --text-color: #333333;
  --background-color: #f0f4f8;
  --card-background: #ffffff;
  --input-background: #f8fafc;
  --input-border: #d1d5db;
  --input-focus: #39a900;
  --button-color: #04324d;
  --button-hover: #39a900;


  --background-overlay: linear-gradient(135deg, rgba(169, 169, 169, 0.7), rgba(57, 169, 0, 0.6));
  /* --background-overlay: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(200, 200, 200, 0.7) 100%); */
  /* --background-overlay: linear-gradient(135deg, rgba(4, 50, 77, 0.8), rgba(169, 115, 0, 0.7)); */
 

  

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  background-image: var(--background-overlay);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
}

.login-card {
  background: var(--card-background);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.brand {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
}

.title-part1 {
  color: var(--secondary-color);
}

.title-part2 {
  color: var(--accent-color);
}

.input-group {
  position: relative;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--input-border);
  border-radius: 8px;
  background-color: var(--input-background);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--input-focus);
  box-shadow: 0 0 0 3px rgba(57, 169, 0, 0.1);
}

label {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: 0.9rem;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 0.75rem;
  padding: 0 0.25rem;
  background-color: var(--card-background);
  color: var(--secondary-color);
}

.error {
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background: var(--button-color);
  color: var(--primary-color);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover {
  background: var(--button-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(57, 169, 0, 0.2);
}

.submit-btn span {
  margin-right: 0.5rem;
}

.arrow {
  transition: transform 0.3s ease;
  width: 1.25rem;
  height: 1.25rem;
}

.submit-btn:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.75rem;
  }

  input, .submit-btn {
    font-size: 0.9rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .login-card {
    max-width: 80%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .login-card {
    max-width: 60%;
  }
}

@media (min-width: 1025px) {
  .login-card {
    max-width: 400px;
  }
}

@media (max-height: 600px) {
  .container {
    align-items: flex-start;
    padding-top: 2rem;
  }
}
</style>

