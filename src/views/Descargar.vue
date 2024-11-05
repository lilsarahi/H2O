<template>
    <div class="download-page">
      <h1>Descarga nuestra App</h1>
      <p>
        ¡Bienvenido a la página de descarga de nuestra aplicación! 
        Con nuestra app, podrás gestionar el uso del agua de manera eficiente y 
        tener el control total de tus válvulas desde la palma de tu mano.
      </p>
      <div class="download-section">
        <h2>Consigue nuestra app</h2>
        <a href="/downloads/tu-aplicacion.apk" class="download-button" download>
          📥 Descargar APK
        </a>
      </div>
      <div class="info-section">
        <h3>¿Por qué elegir nuestra app?</h3>
        <ul>
          <li>✅ Control remoto de válvulas desde cualquier lugar.</li>
          <li>✅ Monitoreo en tiempo real del consumo de agua.</li>
          <li>✅ Alertas y notificaciones sobre el estado del sistema.</li>
          <li>✅ Informes detallados sobre el uso del agua.</li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .download-page {
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: auto;
    text-align: center;
  }
  
  .download-section {
    margin-top: 20px;
  }
  
  .download-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4535C1;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .download-button:hover {
    background-color: #0073e6;
  }
  
  .info-section {
    margin-top: 30px;
  }
  
  .info-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .info-section ul li {
    background: #e7f3ff;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
  }
  </style>
  