

<template>
    <div class="container">
      <div class="login-card" v-if="showLogin">
        <div class="brand">
          <h1 class="title">
            <span class="title-part1">MiAyuda</span><span class="title-part2">Tics</span>
          </h1>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <input type="email" id="email" required autocomplete="email" />
            <label for="email">Email</label>
          </div>
          <div class="input-group">
            <input type="password" id="password" required autocomplete="current-password" />
            <label for="password">Password</label>
          </div>
          <button type="submit" class="submit-btn">
            <span>Sign In</span>
            <svg class="arrow" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
        <div class="links">
          <a href="#" class="forgot-password">Forgot password?</a>
          <a href@click.prevent="showRegisterForm"  class="create-account">Create account</a>
        </div>
      </div>
      <Register v-else @goBack="showLoginForm" />
    </div>
  </template>
  
  <script>
  import Register from '../components/Register.vue';
  export default {
    name: 'App',
    components: { Register },
    data() {
      return {
        showLogin: true, 
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted');
      },
      showRegisterForm() {
        this.showLogin = false; // Cambia al formulario de registro
      },
      showLoginForm() {
        this.showLogin = true; // Cambia al formulario de inicio de sesión
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
    color: var(--text-color);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .login-card {
    background: var(--card-background);
    border-radius: 20px;
    padding: 3rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 10px 25px rgba(4, 50, 77, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .login-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(4, 50, 77, 0.15);
  }
  
  .brand {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }
  
  .title-part1 {
    color: var(--secondary-color);
  }
  
  .title-part2 {
    color: var(--accent-color);
  }
  
  .input-group {
    position: relative;
    margin-bottom: 1.2rem;
  }
  
  input {
    width: 100%;
    padding: 12px 16px;
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
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #718096;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 0;
    font-size: 0.8rem;
    padding: 0 4px;
    background-color: var(--card-background);
    color: var(--secondary-color);
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
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
    margin-right: 8px;
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
  
  .submit-btn:hover .arrow {
    transform: translateX(4px);
  }
  
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .links a {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }
  
  .links a:hover {
    color: var(--accent-color);
  }
  
  @media (max-width: 480px) {
    .login-card {
      padding: 2rem;
    }
    
    .title {
      font-size: 2rem;
    }
  }
  </style>
  
  