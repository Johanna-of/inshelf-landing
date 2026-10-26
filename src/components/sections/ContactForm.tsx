import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    authorized: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
      return;
    }

    // Validación: solo letras y espacios para el nombre
    if (name === 'name') {
      const filteredValue = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      return;
    }

    // Validación: solo números y máximo 10 dígitos para celular
    if (name === 'phone') {
      const filteredValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: filteredValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación estricta
    if (!formData.authorized || formData.phone.length !== 10) {
      return;
    }

    setLoading(true);

    // Parámetros que recibirá tu plantilla en EmailJS
    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      role: formData.role,
      phone: formData.phone,
    };

    // Reemplaza con tus claves reales de EmailJS
    emailjs
      .send(
        'service_yg9y9tn', // Tu Service ID
        'template_adeos02', // Tu Template ID
        templateParams,
        'Vu9krCROEJba1dNys', // Tu Public Key
      )
      .then(
        (response) => {
          console.log(
            'Correo enviado exitosamente!',
            response.status,
            response.text,
          );
          setLoading(false);
          setSubmitted(true);
        },
        (err) => {
          console.error('Error al enviar el correo:', err);
          setLoading(false);
          alert('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
        },
      );
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0b1528] px-4 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LADO IZQUIERDO: INFORMACIÓN DE LA REUNIÓN */}
          <div className="space-y-8 lg:col-span-6">
            <div>
              <span className="mb-3 block text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                Primera Conversación
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                30 minutos.
                <br />
                <span className="text-[#ff5743]">
                  Tu operación sobre la mesa.
                </span>
              </h2>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                Una reunión de trabajo, no una presentación comercial. Sales con
                claridad sobre dónde se te está yendo la venta, decidas lo que
                decidas.
              </p>
            </div>

            {/* TIMELINE DE LA REUNIÓN */}
            <div className="ml-2 space-y-4 border-l-2 border-slate-800 pl-6">
              <div className="relative">
                <span className="mb-1 block text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                  Min 0–10
                </span>
                <p className="text-sm text-slate-300 sm:text-base">
                  Entendemos tu cobertura, tus canales y cómo trabaja hoy tu
                  equipo de campo.
                </p>
              </div>

              <div className="relative pt-2">
                <span className="mb-1 block text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                  Min 10–25
                </span>
                <p className="text-sm text-slate-300 sm:text-base">
                  Te mostramos la torre de control con un escenario parecido al
                  tuyo.
                </p>
              </div>

              <div className="relative pt-2">
                <span className="mb-1 block text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                  Min 25–30
                </span>
                <p className="text-sm text-slate-300 sm:text-base">
                  Te decimos con franqueza si InShelf tiene sentido para tu
                  operación.
                </p>
              </div>
            </div>

            {/* WHATSAPP DIRECTO */}
            <div className="pt-2 text-sm text-slate-400">
              ¿Prefieres WhatsApp? Escríbenos al{' '}
              <a
                href="https://wa.me/573146361640"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline decoration-[#ff5743] underline-offset-4 transition-colors hover:text-[#ff5743]"
              >
                +57 314 636 1640
              </a>
            </div>
          </div>

          {/* LADO DERECHO: TARJETA BLANCA CON FORMULARIO */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl sm:p-10">
              {!submitted && (
                <div className="mb-8">
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#152136]">
                    Agenda tu reunión
                  </h3>
                  <p className="text-sm text-slate-500">
                    Déjanos tus datos y te escribimos para cuadrar la hora.
                  </p>
                </div>
              )}

              {submitted ? (
                <div className="space-y-4 py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white shadow-lg shadow-emerald-500/30">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#152136]">
                    ¡Solicitud enviada con éxito!
                  </h3>
                  <p className="mx-auto max-w-md text-base leading-relaxed text-slate-600">
                    Gracias{' '}
                    <span className="font-bold text-[#152136]">
                      {formData.name}
                    </span>
                    . Te hemos enviado un correo de confirmación y te
                    escribiremos a la brevedad para coordinar la sesión.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre y Apellido */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-600 uppercase">
                      Nombre y apellido
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-600 uppercase">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu marca o empresa"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
                    />
                  </div>

                  {/* Cargo */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-600 uppercase">
                      Cargo
                    </label>
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
                    >
                      <option value="" disabled>
                        Selecciona tu cargo
                      </option>
                      <option value="Gerencia de trade marketing">
                        Gerencia de trade marketing
                      </option>
                      <option value="Gerencia comercial o de ventas">
                        Gerencia comercial o de ventas
                      </option>
                      <option value="Key account manager">
                        Key account manager
                      </option>
                      <option value="Gerencia o dirección general">
                        Gerencia o dirección general
                      </option>
                      <option value="Otro cargo">Otro cargo</option>
                    </select>
                  </div>

                  {/* Celular o WhatsApp */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-600 uppercase">
                      Celular o WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="3000000000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
                    />
                  </div>

                  {/* Checkbox de Privacidad */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      name="authorized"
                      id="authorized"
                      required
                      checked={formData.authorized}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-[#ff5743] focus:ring-[#ff5743]"
                    />
                    <label
                      htmlFor="authorized"
                      className="cursor-pointer text-xs leading-relaxed text-slate-500"
                    >
                      Autorizo a InShelf a tratar mis datos personales para
                      contactarme, conforme a la Ley 1581 de 2012 y su{' '}
                      <span className="font-medium text-slate-700 underline">
                        política de tratamiento de datos
                      </span>
                      .
                    </label>
                  </div>

                  {/* Botón nativo con soporte completo para disabled */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#ff5743] py-4 text-base font-bold text-white shadow-lg shadow-[#ff5743]/30 transition-all hover:bg-[#e04837] disabled:opacity-50"
                    >
                      {loading ? 'Enviando...' : 'Agendar reunión →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
