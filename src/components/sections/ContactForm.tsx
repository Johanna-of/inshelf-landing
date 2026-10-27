import React, { useState } from 'react';
import whatsappIcon from '@/assets/icono-what.webp';
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
  const [showPolicy, setShowPolicy] = useState(false); // Estado para abrir/cerrar el modal de políticas

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

    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      role: formData.role,
      phone: formData.phone,
    };

    emailjs
      .send(
        'service_yg9y9tn',
        'template_adeos02',
        templateParams,
        'Vu9krCROEJba1dNys',
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

            {/* BOTÓN DE WHATSAPP */}
            <div className="pt-4">
              <a
                href="https://wa.me/573146361640"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#ff5743] bg-transparent px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-[#ff5743]/30"
              >
                <svg
                  style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  className="fill-none stroke-white stroke-[1.0]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.5c-1.65 0-3.23-.42-4.63-1.16L3 21.5l1.22-4.22A9.45 9.45 0 013 12.5C3 7.25 7.25 3 12.5 3S22 7.25 22 12.5 17.75 21.5 12 21.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 9.5c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3 0 .6.4.7 1.1 1.4 1.8 1.8.3.2.5.1.6 0l.5-.4c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-.5.2-1.6.4-3.5-.4-2.1-.9-3.8-2.6-4.7-4.7-.8-1.9-.6-3-.4-3.5z"
                  />
                </svg>
                <span>Escríbenos al WhatsApp</span>
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
                      <button
                        type="button"
                        onClick={() => setShowPolicy(true)}
                        className="font-medium text-slate-700 underline hover:text-[#ff5743] focus:outline-none"
                      >
                        política de tratamiento de datos
                      </button>
                      .
                    </label>
                  </div>

                  {/* Botón de envío */}
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

      {/* MODAL DE POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES */}
      {showPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-10">
            {/* Botón flotante para cerrar */}
            <button
              onClick={() => setShowPolicy(false)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
            >
              ✕
            </button>

            <div className="space-y-6 pr-2">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                  InShelf
                </span>
                <h2 className="text-2xl font-extrabold text-[#152136] sm:text-3xl">
                  POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 text-xs text-slate-700 sm:text-sm">
                <p className="mb-2 font-bold">
                  Responsable del tratamiento de datos personales:
                </p>
                <ul className="space-y-1">
                  <li>
                    • <strong>Razón social:</strong> Mentorías Directivas S.A.S.
                  </li>
                  <li>
                    • <strong>NIT:</strong> 901935534-2
                  </li>
                  <li>
                    • <strong>Domicilio:</strong> Bogotá D. C., Colombia.
                  </li>
                  <li>
                    • <strong>Dirección:</strong> Carrera 5 # 79-35, Bogotá D.
                    C.
                  </li>
                  <li>
                    • <strong>Correo electrónico:</strong>{' '}
                    asisgerencia@mentodir.com
                  </li>
                  <li>
                    • <strong>Teléfono:</strong> 314 636 1640
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                <div>
                  <h4 className="mb-1 font-bold text-[#152136]">
                    1. Finalidad del tratamiento de los datos personales
                  </h4>
                  <p>
                    Mentorías Directivas S.A.S., en calidad de responsable del
                    tratamiento de los datos personales asociados a InShelf,
                    podrá recolectar, almacenar, utilizar, actualizar y
                    gestionar los datos personales suministrados por los
                    usuarios a través de formularios, landing pages y demás
                    canales de contacto, con las siguientes finalidades:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Contactar a los usuarios para responder sus solicitudes y
                      consultas.
                    </li>
                    <li>
                      Brindar información sobre InShelf, sus productos,
                      servicios y soluciones.
                    </li>
                    <li>
                      Realizar actividades de seguimiento comercial relacionadas
                      con el interés manifestado por los usuarios.
                    </li>
                    <li>
                      Enviar comunicaciones comerciales, publicidad,
                      promociones, novedades y ofertas relacionadas con los
                      productos y servicios.
                    </li>
                    <li>
                      Gestionar las relaciones comerciales y mantener
                      comunicación con clientes potenciales y clientes.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Las comunicaciones podrán enviarse a través de los canales
                    de contacto proporcionados por el titular, de acuerdo con la
                    autorización otorgada.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-bold text-[#152136]">
                    2. Derechos de los titulares de los datos
                  </h4>
                  <p>
                    De conformidad con la Ley 1581 de 2012 y las normas que la
                    reglamentan, los titulares de los datos personales tienen
                    derecho a:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Conocer, actualizar y rectificar sus datos personales.
                    </li>
                    <li>
                      Solicitar prueba de la autorización otorgada para el
                      tratamiento de sus datos.
                    </li>
                    <li>
                      Conocer el uso que se ha dado a sus datos personales.
                    </li>
                    <li>
                      Presentar consultas y reclamos relacionados con el
                      tratamiento de sus datos.
                    </li>
                    <li>
                      Solicitar la revocatoria de la autorización o la supresión
                      de sus datos cuando sea procedente conforme a la normativa
                      aplicable.
                    </li>
                    <li>
                      Acceder gratuitamente a sus datos personales objeto de
                      tratamiento.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-1 font-bold text-[#152136]">
                    3. Canales para consultas y reclamos
                  </h4>
                  <p>
                    Para ejercer sus derechos, presentar consultas, formular
                    reclamos o solicitar la actualización de sus datos
                    personales, los titulares podrán comunicarse a través de los
                    siguientes canales:
                  </p>
                  <p className="mt-1">
                    <strong>Correo electrónico:</strong>{' '}
                    asisgerencia@mentodir.com
                    <br />
                    <strong>Teléfono:</strong> 314 636 1640
                  </p>
                  <p className="mt-1">
                    Las solicitudes serán atendidas de acuerdo con los
                    procedimientos y plazos establecidos en la normativa
                    colombiana aplicable.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-bold text-[#152136]">
                    4. Autorización para el tratamiento de datos personales
                  </h4>
                  <p>
                    Al marcar la casilla de autorización dispuesta en los
                    formularios de InShelf, el titular declara que ha sido
                    informado sobre el tratamiento de sus datos personales y
                    autoriza a Mentorías Directivas S.A.S. a recolectarlos,
                    almacenarlos, utilizarlos y tratarlos para las finalidades
                    descritas en esta política, incluido el envío de información
                    comercial, publicidad, promociones y novedades, según el
                    alcance de la autorización otorgada.
                  </p>
                  <p className="mt-2">
                    La autorización deberá ser previa, expresa e informada. El
                    titular podrá solicitar su revocatoria o la supresión de sus
                    datos cuando sea procedente, sin perjuicio de las
                    obligaciones legales o contractuales aplicables.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-bold text-[#152136]">
                    5. Legislación aplicable
                  </h4>
                  <p>
                    Esta política se rige por la Ley 1581 de 2012, el Decreto
                    1074 de 2015 y las demás normas colombianas aplicables en
                    materia de protección de datos personales.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Última actualización: 27 de octubre del 2026
                  </p>
                </div>
              </div>

              <div className="flex justify-end border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPolicy(false)}
                  className="rounded-xl bg-[#152136] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
