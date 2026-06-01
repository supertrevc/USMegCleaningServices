import type { Lang } from "../i18n/utils";
import { business } from "./business";

export interface LegalSection {
  heading: string;
  body: string[]; // each item is a paragraph; lines starting with "- " render as a bullet list
}
export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
}

const E = business.email;
const P = business.phoneDisplay;
const EFFECTIVE = { en: "June 1, 2026", es: "1 de junio de 2026" };

type Key = "privacy" | "terms" | "cookies" | "accessibility";

export const legal: Record<Lang, Record<Key, LegalDoc>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      intro: `This Privacy Policy explains how US Meg Cleaning Services ("we," "us," "our") collects, uses, and protects your information when you visit our website or request our residential cleaning services in Tampa Bay, Florida. By using our site you agree to this policy.`,
      sections: [
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly to us, such as your name, phone number, email address, service address details, and any message you send when you request a quote, book a service, or apply for a job.",
            "When you use our website, we may automatically collect limited technical data such as your IP address, browser type, device information, and pages viewed. Analytics data is only collected after you consent through our cookie banner.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "- To respond to quote requests and schedule, confirm, and perform cleaning services.",
            "- To send appointment and on-the-way (ETA) text messages.",
            "- To process payments collected at the end of service.",
            "- To improve our website and services (only with analytics consent).",
            "- To respond to job applications.",
          ],
        },
        {
          heading: "Text messaging",
          body: [
            `Our primary point of contact is SMS. By texting us at ${P} or submitting a form with your phone number, you consent to receive text messages from us related to your inquiry and service. Message and data rates may apply. You can opt out at any time by replying STOP.`,
          ],
        },
        {
          heading: "How we share information",
          body: [
            "We do not sell your personal information. We share information only with service providers who help us operate (for example, email delivery and website analytics) and when required by law.",
          ],
        },
        {
          heading: "Data retention & security",
          body: [
            "We keep your information only as long as needed to provide services and meet legal obligations, and we use reasonable safeguards to protect it. No method of transmission over the internet is 100% secure.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `Depending on your location, you may have the right to access, correct, or delete your personal information. To make a request, email ${E} or call ${P}.`,
          ],
        },
        {
          heading: "Children's privacy",
          body: [
            "Our services and website are intended for adults. We do not knowingly collect personal information from children under 13.",
          ],
        },
        {
          heading: "Changes & contact",
          body: [
            `We may update this policy from time to time. Questions? Email ${E} or call ${P}.`,
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro: `These Terms of Service govern your use of the US Meg Cleaning Services website and the cleaning services we provide in Tampa Bay, Florida. By using our site or booking a service, you agree to these terms.`,
      sections: [
        {
          heading: "Services",
          body: [
            "We provide residential cleaning services including regular cleaning, deep cleaning, closet organization, and move-in/move-out cleaning, by appointment. Service scope is confirmed by text before your visit.",
          ],
        },
        {
          heading: "Booking & scheduling",
          body: [
            `Bookings are made by text, call, or message. We send an ETA text when our team is on the way. If you cancel or reschedule after 3:00 PM the day before your appointment, a $40 last-minute change fee may apply.`,
          ],
        },
        {
          heading: "Pricing & payment",
          body: [
            "Prices are based on home size, number of pets, and frequency. Any online estimate is a non-binding starting point; the final quote is confirmed for your home. Payment is due at the end of service. We accept Cash, Wire Transfer, Check, Apple Cash, Venmo, and Zelle.",
          ],
        },
        {
          heading: "Satisfaction guarantee",
          body: [
            "If you are not completely satisfied, contact us within 24 hours of your cleaning and we will return to make it right at no additional charge for the original scope.",
          ],
        },
        {
          heading: "What we do not clean",
          body: [
            "For health and safety reasons, our teams do not clean blood, feces, vomit, or urine (human or animal), and we may decline tasks that are unsafe or outside our scope.",
          ],
        },
        {
          heading: "Access & liability",
          body: [
            "You are responsible for providing safe access to your home. Please secure valuables and fragile items. We are not liable for pre-existing damage or normal wear; report any concern within 24 hours.",
          ],
        },
        {
          heading: "Changes & contact",
          body: [
            `We may update these terms. Questions? Email ${E} or call ${P}.`,
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      intro: `This Cookie Policy explains how US Meg Cleaning Services uses cookies and similar technologies on our website.`,
      sections: [
        {
          heading: "What are cookies?",
          body: [
            "Cookies are small text files stored on your device that help a website function and remember your preferences.",
          ],
        },
        {
          heading: "Categories we use",
          body: [
            "- Essential: required for the site to function and to remember your cookie choices. Always active.",
            "- Analytics: with your consent, Google Analytics and Microsoft Clarity help us understand how the site is used so we can improve it.",
          ],
        },
        {
          heading: "Managing your choices",
          body: [
            'Analytics cookies are blocked until you accept them in our cookie banner. You can change your choice anytime using the "Cookie Preferences" link in the footer, or by clearing cookies in your browser.',
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about cookies? Email ${E}.`],
        },
      ],
    },
    accessibility: {
      title: "Accessibility Statement",
      intro: `US Meg Cleaning Services is committed to making our website accessible to everyone, including people with disabilities.`,
      sections: [
        {
          heading: "Our commitment",
          body: [
            "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. This includes semantic structure, keyboard navigation, visible focus indicators, sufficient color contrast, and descriptive alternative text for images.",
          ],
        },
        {
          heading: "Ongoing effort",
          body: [
            "Accessibility is an ongoing effort. We regularly review our site and work to fix issues as they are found.",
          ],
        },
        {
          heading: "Need help or found a barrier?",
          body: [
            `If you have trouble using any part of this website, or need information in another format, please email ${E} or text ${P} and we will help.`,
          ],
        },
      ],
    },
  },

  es: {
    privacy: {
      title: "Política de Privacidad",
      intro: `Esta Política de Privacidad explica cómo US Meg Cleaning Services ("nosotros") recopila, usa y protege tu información cuando visitas nuestro sitio web o solicitas nuestros servicios de limpieza residencial en Tampa Bay, Florida. Al usar nuestro sitio, aceptas esta política.`,
      sections: [
        {
          heading: "Información que recopilamos",
          body: [
            "Recopilamos la información que nos proporcionas directamente, como tu nombre, número de teléfono, correo electrónico, datos de la dirección del servicio y cualquier mensaje que envíes al solicitar una cotización, reservar un servicio o postularte a un empleo.",
            "Cuando usas nuestro sitio, podemos recopilar automáticamente datos técnicos limitados como tu dirección IP, tipo de navegador, información del dispositivo y páginas vistas. Los datos de análisis solo se recopilan después de tu consentimiento en el banner de cookies.",
          ],
        },
        {
          heading: "Cómo usamos tu información",
          body: [
            "- Para responder solicitudes de cotización y agendar, confirmar y realizar los servicios de limpieza.",
            "- Para enviar mensajes de cita y de hora estimada de llegada (ETA).",
            "- Para procesar pagos cobrados al final del servicio.",
            "- Para mejorar nuestro sitio y servicios (solo con consentimiento de análisis).",
            "- Para responder a solicitudes de empleo.",
          ],
        },
        {
          heading: "Mensajes de texto",
          body: [
            `Nuestro principal medio de contacto es el SMS. Al escribirnos al ${P} o enviar un formulario con tu número de teléfono, aceptas recibir mensajes de texto relacionados con tu consulta y servicio. Pueden aplicarse tarifas de mensajes y datos. Puedes darte de baja respondiendo STOP.`,
          ],
        },
        {
          heading: "Cómo compartimos la información",
          body: [
            "No vendemos tu información personal. La compartimos únicamente con proveedores que nos ayudan a operar (por ejemplo, envío de correos y análisis del sitio) y cuando la ley lo exige.",
          ],
        },
        {
          heading: "Conservación y seguridad",
          body: [
            "Conservamos tu información solo el tiempo necesario para prestar los servicios y cumplir obligaciones legales, y usamos medidas razonables para protegerla. Ningún método de transmisión por internet es 100% seguro.",
          ],
        },
        {
          heading: "Tus derechos",
          body: [
            `Según tu ubicación, puedes tener derecho a acceder, corregir o eliminar tu información personal. Para hacer una solicitud, escribe a ${E} o llama al ${P}.`,
          ],
        },
        {
          heading: "Privacidad de menores",
          body: [
            "Nuestros servicios y sitio están dirigidos a adultos. No recopilamos a sabiendas información personal de menores de 13 años.",
          ],
        },
        {
          heading: "Cambios y contacto",
          body: [
            `Podemos actualizar esta política ocasionalmente. ¿Preguntas? Escribe a ${E} o llama al ${P}.`,
          ],
        },
      ],
    },
    terms: {
      title: "Términos del Servicio",
      intro: `Estos Términos del Servicio rigen el uso del sitio web de US Meg Cleaning Services y los servicios de limpieza que prestamos en Tampa Bay, Florida. Al usar nuestro sitio o reservar un servicio, aceptas estos términos.`,
      sections: [
        {
          heading: "Servicios",
          body: [
            "Ofrecemos servicios de limpieza residencial que incluyen limpieza regular, limpieza profunda, organización de clósets y limpieza de mudanza, con cita previa. El alcance se confirma por mensaje de texto antes de tu visita.",
          ],
        },
        {
          heading: "Reservas y horarios",
          body: [
            "Las reservas se hacen por mensaje de texto, llamada o mensaje. Enviamos un aviso con la hora estimada de llegada cuando nuestro equipo va en camino. Si cancelas o reprogramas después de las 3:00 PM del día anterior a tu cita, puede aplicarse una tarifa de cambio de último momento de $40.",
          ],
        },
        {
          heading: "Precios y pago",
          body: [
            "Los precios se basan en el tamaño del hogar, el número de mascotas y la frecuencia. Cualquier estimación en línea es un punto de partida no vinculante; la cotización final se confirma para tu hogar. El pago se realiza al final del servicio. Aceptamos Efectivo, Transferencia, Cheque, Apple Cash, Venmo y Zelle.",
          ],
        },
        {
          heading: "Garantía de satisfacción",
          body: [
            "Si no quedas completamente satisfecho, contáctanos dentro de las 24 horas posteriores a tu limpieza y volveremos para corregirlo sin cargo adicional por el alcance original.",
          ],
        },
        {
          heading: "Lo que no limpiamos",
          body: [
            "Por razones de salud y seguridad, nuestros equipos no limpian sangre, heces, vómito ni orina (humana o animal), y podemos rechazar tareas inseguras o fuera de nuestro alcance.",
          ],
        },
        {
          heading: "Acceso y responsabilidad",
          body: [
            "Eres responsable de proporcionar acceso seguro a tu hogar. Por favor asegura objetos de valor y artículos frágiles. No somos responsables de daños preexistentes ni del desgaste normal; informa cualquier inquietud dentro de las 24 horas.",
          ],
        },
        {
          heading: "Cambios y contacto",
          body: [
            `Podemos actualizar estos términos. ¿Preguntas? Escribe a ${E} o llama al ${P}.`,
          ],
        },
      ],
    },
    cookies: {
      title: "Política de Cookies",
      intro: `Esta Política de Cookies explica cómo US Meg Cleaning Services usa cookies y tecnologías similares en nuestro sitio web.`,
      sections: [
        {
          heading: "¿Qué son las cookies?",
          body: [
            "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo y ayudan a que un sitio funcione y recuerde tus preferencias.",
          ],
        },
        {
          heading: "Categorías que usamos",
          body: [
            "- Esenciales: necesarias para el funcionamiento del sitio y para recordar tus elecciones de cookies. Siempre activas.",
            "- Análisis: con tu consentimiento, Google Analytics y Microsoft Clarity nos ayudan a entender cómo se usa el sitio para mejorarlo.",
          ],
        },
        {
          heading: "Gestión de tus elecciones",
          body: [
            'Las cookies de análisis están bloqueadas hasta que las aceptes en nuestro banner de cookies. Puedes cambiar tu elección en cualquier momento con el enlace "Preferencias de cookies" en el pie de página, o borrando las cookies en tu navegador.',
          ],
        },
        {
          heading: "Contacto",
          body: [`¿Preguntas sobre cookies? Escribe a ${E}.`],
        },
      ],
    },
    accessibility: {
      title: "Declaración de Accesibilidad",
      intro: `US Meg Cleaning Services se compromete a que nuestro sitio web sea accesible para todos, incluidas las personas con discapacidad.`,
      sections: [
        {
          heading: "Nuestro compromiso",
          body: [
            "Buscamos cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2 nivel AA. Esto incluye estructura semántica, navegación por teclado, indicadores de foco visibles, contraste de color suficiente y texto alternativo descriptivo para las imágenes.",
          ],
        },
        {
          heading: "Esfuerzo continuo",
          body: [
            "La accesibilidad es un esfuerzo continuo. Revisamos nuestro sitio con regularidad y trabajamos para corregir problemas a medida que se detectan.",
          ],
        },
        {
          heading: "¿Necesitas ayuda o encontraste una barrera?",
          body: [
            `Si tienes dificultades para usar alguna parte de este sitio, o necesitas información en otro formato, escribe a ${E} o envía un mensaje al ${P} y te ayudaremos.`,
          ],
        },
      ],
    },
  },
};

export function effectiveDate(lang: Lang) {
  return EFFECTIVE[lang];
}
