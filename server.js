const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreply.hydraulicsolutions@gmail.com', // Dirección de correo de envío
      pass: 'contraseña_de_noreply' // Contraseña o contraseña de aplicación
    }
  });

  const mailOptions = {
    from: email,
    to: 'contacto.hydraulicsolutions@gmail.com',
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado exitosamente');
    }
  });
});

app.listen(3000, () => console.log('Servidor iniciado en puerto 3000'));
