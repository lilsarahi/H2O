<template>
  <div class="about">
    <h1>Sobre Hydraulic Solutions</h1>
    <p>
      Bienvenidos a <strong>Hydraulic Solutions</strong>, un innovador sistema de gestión de agua inteligente y automatizado diseñado para optimizar la distribución y el uso eficiente del recurso hídrico. Basado en la plataforma Arduino, nuestro sistema permite un control preciso y flexible de válvulas, facilitando la programación de horarios de apertura y cierre a través de una interfaz intuitiva.
    </p>

    <h2>¿Qué Hacemos?</h2>
    <p>
      Integramos un sistema que permite adaptarse y  automatizar procesos para mejorar la eficiencia en el flujo del agua. Desde la agricultura hasta la industria y comunidades rurales, ofrecemos una solución versátil y escalable que garantiza un suministro de agua confiable y sostenible.
    </p>

    <h2>Beneficios Clave</h2>
    <ul>
      <li>🔧 <strong>Control Remoto: </strong>  Controla las válvulas de manera remota a través de nuestra aplicación móvil o web.</li>
      <li>🕒 <strong>Programación de Horarios: </strong>  Establece horarios de apertura y cierre de válvulas para optimizar el suministro de agua.</li>
      <li>📊 <strong>Monitoreo en Tiempo Real: </strong> Visualiza el estado de las válvulas y otros parámetros relevantes en tiempo real.</li>
      <li>📈 <strong>Generación de Reportes: </strong>  Accede a informes históricos sobre el consumo de agua y fallas en el sistema.</li>
      <li>🚨 <strong>Alertas: </strong>  Recibe notificaciones sobre fugas o bajo nivel de agua en los tanques.</li>
    </ul>

    <h2>Compromiso con la Sostenibilidad</h2>
    <p>
      En <strong>Hydraulic Solutions</strong>, no solo mejoramos la gestión del agua, sino que también contribuimos a la sostenibilidad ambiental, ayudando a reducir el desperdicio y optimizar los costos operativos.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
}

.about h1 {
  color: #4535C1;
  text-align: center;
  margin-bottom: 40px;
}

.about h2 {
  color: #0073e6;
  margin-top: 20px;
}

.about p {
  line-height: 1.6;
}

.about ul {
  list-style-type: none;
  padding: 0;
}

.about ul li {
  background: #e7f3ff;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
}

.link {
  color: #4535C1;
  text-decoration: underline;
}

.link:hover {
  color: #0073e6;
}
</style>
