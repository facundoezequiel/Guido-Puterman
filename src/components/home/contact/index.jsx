import React, { useState } from "react";
// Styled Components
import Container from "./styled";
// Librerias
import Marquee from "react-fast-marquee";
import emailjs from "emailjs-com";
import { Slide, Fade } from "react-awesome-reveal";
// Icons
import { FiArrowUpRight } from "react-icons/fi";

export default function Contact({ idioma }) {
  // Valor a enviar por correo
  const frmContact = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };
  const [contact, setContact] = useState(frmContact);
  // Errores del formulario
  const [formErrors, setFormErrors] = useState({});
  // Loading
  const [loading, setLoading] = useState(false);
  // Mensaje de enviado
  const [showMessage, setShowMessage] = useState(false);
  // Estado del correo
  const [estadoCorreo, setEstadoCorreo] = useState(false);

  // Asigna valor correspondiente a cada estado cuando cambia el input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  // Valida el formulario y envia el correo
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validar Nombre
    if (!contact.nombre) {
      errors.nombre = "El nombre es requerido.";
    } else if (contact.nombre.length < 2) {
      errors.nombre = "El nombre tiene menos de 2 caracteres.";
    } else if (
      !/^[a-zA-Z\u00C0-\u017F!@#$%^&':"\\|,.<>\/?\s\u00f1\u00d1]*$/.test(
        contact.nombre
      )
    ) {
      errors.nombre = "El nombre ingresado no es válido.";
    }

    // Validar Apellido
    if (!contact.apellido) {
      errors.apellido = "El apellido es requerido.";
    } else if (contact.apellido.length < 2) {
      errors.apellido = "El apellido tiene menos de 2 caracteres.";
    } else if (
      !/^[a-zA-Z!@#$%^&':"\\|,.<>\/?\s\u00f1\u00d1]*$/.test(contact.apellido)
    ) {
      errors.apellido = "El apellido ingresado no es válido.";
    }

    // Validar Correo
    if (!contact.correo) {
      errors.correo = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.correo)) {
      errors.correo = "El email ingresado no es valido.";
    }

    // Validar Teléfono
    if (!contact.telefono) {
      errors.telefono = "El teléfono es requerido.";
    } else if (contact.telefono.length < 5) {
      errors.telefono = "El teléfono es menor a 5 digitos.";
    }

    // Validar Mensaje
    if (!contact.mensaje) {
      errors.mensaje = "El mensaje es requerido.";
    }

    setFormErrors(errors);

    // Si no tiene errores
    if (Object.keys(errors).length === 0) {
      // Activa el cargador
      setLoading(true);

      // Envia el correo
      emailjs
        .send(
          "default_service",
          process.env.REACT_APP_TEMPLATE_ID,
          contact,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          // Si se envia con éxito
          (response) => {
            console.log(
              "Su mensaje fue enviado con éxito",
              response.status,
              response.text
            );
            setContact(frmContact);
            setEstadoCorreo(true);
            setLoading(false);
            setShowMessage(true);
          },
          // Si falla el envio
          (err) => {
            console.log("Falló el envio del mensaje", err);
            setEstadoCorreo(false);
            setLoading(false);
            setShowMessage(true);
          }
        );
    }
  };

  return (
    <Container name="contacto">
      <div id="marquee-container">
        <Marquee gradient={false} speed="45">
          <p>
            CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;CONTACT&ensp;ME&ensp;-&ensp;
          </p>
        </Marquee>
      </div>
      <div id="max-width-container">
        <div id="titulo-container">
          <Slide direction="left" delay={0}>
            <h2>
              Let's
              <br />
              talk!
              <img alt="Chat Emoji" src="/images/emojis/charla.png"></img>
            </h2>
          </Slide>
          <Slide direction="right" delay={0}>
            <p>GUIDO@PUTERMAN.COM</p>
          </Slide>
        </div>
        <div className="formulario-container">
          {loading == true ? (
            <div className="opacidad02" id="loading-container">
              <img
                alt="Emoji Pensando"
                src="/images/emojis/pensando.png"
                className="rotando"
              ></img>
            </div>
          ) : showMessage ? (
            estadoCorreo == true ? (
              <div id="mensaje-mostrado" className="topIn06">
                <img
                  alt="Hamd Emoji"
                  src="/images/emojis/pulgarArriba.png"
                  className="flotar"
                ></img>
                <p>Su correo fue enviado con éxito!</p>
              </div>
            ) : (
              <div id="mensaje-mostrado" className="topIn06">
                <img
                  alt="Hamd Emoji"
                  src="/images/emojis/pulgarAbajo.png"
                  className="flotar"
                ></img>
                <p>Falló el envio de su correo</p>
              </div>
            )
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                name="nombre"
                value={contact.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                type="text"
                className={formErrors.nombre == null ? "" : "input-error"}
              ></input>
              <input
                name="apellido"
                value={contact.apellido}
                onChange={handleChange}
                placeholder="Apellido"
                type="text"
                className={formErrors.apellido == null ? "" : "input-error"}
              ></input>
              <input
                name="telefono"
                value={contact.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                type="tel"
                className={formErrors.telefono == null ? "" : "input-error"}
              ></input>
              <input
                name="correo"
                value={contact.correo}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className={formErrors.correo == null ? "" : "input-error"}
              ></input>
              <textarea
                name="mensaje"
                value={contact.mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                type="text"
                className={formErrors.mensaje == null ? "" : "input-error"}
              ></textarea>
              <button type="submit">
                ENVIAR
                <span>
                  <FiArrowUpRight />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
