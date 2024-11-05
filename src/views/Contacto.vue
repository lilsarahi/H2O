<template>
    <div class="contact-page">
      <h1>Contacto</h1>
      <p>
        Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. 
        Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
      </p>
  
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
  
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
  
        <button type="submit" class="submit-button">Enviar</button>
      </form>
  
      <div class="contact-info">
        <h2>Información de Contacto</h2>
        <p>📞 Teléfono: +1 234 567 890</p>
        <p>✉️ Correo Electrónico: contacto.hydraulicsolutions@gmail.com</p>
        <p>🌐 Sitio Web: www.hydraulicsolutions.com</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
    submitForm() {
        fetch('http://localhost:5174/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
        })
        .then(response => {
            if (response.ok) {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            } else {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
    }
    }

  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  
  .contact-form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #4535C1;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0073e6;
  }
  
  .contact-info {
    margin-top: 30px;
  }
  </style>
  