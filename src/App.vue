<template>
  <div>
    <div class="header">
      <h2 style="font-family: Arial, Helvetica, sans-serif;">HYDRAULIC SOLUTIONS</h2>
    </div>

    <div class="menu">
      <img src="/img/HSO.jpg" alt="Logo" class="logo">
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/products">Nuestros productos</RouterLink>
        <RouterLink to="/descargar">Consigue nuestra App</RouterLink>
        <RouterLink to="/about">Sobre nosotros</RouterLink>
        <RouterLink to="/contacto">Contactanos</RouterLink>
        <RouterLink to="/buy" class="button">Comprar</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HeaderMenu',
  components: {
    RouterLink
  }
}
</script>

<style scoped>

.header {
  background-color: #7cd8ff;
  color: white;
  text-align: center;
  padding: 8px;
}

.header h2 {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  margin: 0;
  letter-spacing: 1px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.menu .logo {
  height: 60px;
  margin-right: 15px;
}

.menu nav {
  display: flex;
  align-items: center;
  gap: 15px; 
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

.menu a:hover {
  color: #0073e6;
}

.menu .button {
  background-color: #4535C1;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
}

.menu .button:hover {
  background-color: #00CCDD;
}
</style>


<!-- <script>
export default {
  name: 'HeaderMenu'
}
</script>

<template>
  <div>
    <div class="header">
      <h2>HYDRAULIC SOLUTIONS</h2>
    </div>

    <div class="menu">
      <img src="/img/HSO.jpg" alt="Logo" class="logo">
      <a href="#">Sobre nosotros</a>
      <a href="#">Nuestros productos</a>
      <a href="#">Consigue nuestra App</a>
      <a href="#">Contactanos</a>
      <a href="#" class="button">Comprar</a>
    </div>
  </div>
</template>


<style scoped>
.header {
  background-color: #7cd8ff;
  color: white;
  text-align: center;
  padding: 8px;
}

.header h2 {
  font-size: 1rem;
  font-weight: bold;
  color: black;
  margin: 0;
  letter-spacing: 1px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 10px 20px;
}

.menu .logo {
  height: 60px;
  margin-right: 15px;
}

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 14px;
}

.menu a:hover {
  color: #0073e6;
}

.menu .button {
  background-color: #4535C1;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
}

.menu .button:hover {
  background-color: #00CCDD;
}
</style> -->
