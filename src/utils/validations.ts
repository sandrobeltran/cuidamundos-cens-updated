import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre muy corto")
    .max(40, "Nombre muy largo")
    .required("Ingresa tu nombre"),
  lastname: Yup.string()
    .min(2, "Apellido muy corto")
    .max(40, "Apellido muy largo")
    .required("Ingresa tu nombre"),
  username: Yup.string()
    .min(5, "El nombre de usuario es muy corto")
    .max(20, "El nombre de usuario es muy largo")
    .matches(
      new RegExp("^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"),
      "Nombre de usuario inválido",
    )
    .required("Ingresa tu nombre de usuario"),
  city: Yup.string().required("Ingresa tu ciudad"),
  passwordHash: Yup.string()
    .matches(
      new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
      "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
    )
    .required("Ingresa tu contraseña"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("passwordHash")], "Las contraseñas no coinciden")
    .required("Confirma tu contraseña"),
});

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Ingresa tu usuario"),
  password: Yup.string().required("Ingresa tu contraseña"),
});

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre muy corto")
    .max(80, "Nombre muy largo")
    .required("Ingresa tu nombre"),
  email: Yup.string().email("Correo inválido").required("Ingresa tu correo"),
  phone: Yup.string()
    .matches(
      new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"),
      "Número inválido, recuerda ingresarlo en el formato 1112223333",
    )
    .required("Ingresa tu número telefónico"),
  message: Yup.string()
    .min(2, "Mensaje muy corto")
    .max(500, "Mensaje muy largo")
    .required("Ingresa tu mensaje"),
});

export const editProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre muy corto")
    .max(40, "Nombre muy largo")
    .required("Ingresa tu nombre"),
  lastname: Yup.string()
    .min(2, "Apellido muy corto")
    .max(40, "Apellido muy largo")
    .required("Ingresa tu nombre"),
  birthdate: Yup.date().max(new Date()),
  address: Yup.string()
    .min(2, "Dirección muy corta")
    .max(80, "Dirección muy larga"),
  phone: Yup.number().max(9999999999, "Número de teléfono inválido"),
  school: Yup.string().min(2, "Nombre muy corto").max(60, "Nombre muy largo"),
  bio: Yup.string()
    .min(2, "Descripción muy corta")
    .max(280, "Descripción muy larga"),
});

export const submitEvidenceValidationSchema = Yup.object().shape({
  answer: Yup.string()
    .min(10, "Tu respusta es muy corta")
    .max(2500, "Tu respuesta es muy larga")
    .required("Escribe tu respuesta para completar esta evidencia"),
  link: Yup.string()
    .matches(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      "Ingrese un link válido",
    )
    .required("No olvides adjuntar un link con los recursos de la evidencia"),
});

export const postCommentValdationSchema = Yup.object().shape({
  content: Yup.string()
    .min(2, "El comentario es muy corto")
    .max(500, "El comentario es muy largo")
    .required("Escribe tu comentario"),
});

export const newActivityValidationSchema = Yup.object().shape({
  title: Yup.string().required("Ingresa el nombre de la actividad"),
  description: Yup.string().required("Ingresa la descripción de la actividad"),
  enabledOptions: Yup.object().shape({
    text: Yup.boolean(),
    links: Yup.boolean(),
    docs: Yup.boolean(),
    images: Yup.boolean(),
  }),
});

export const newInstitutionValidationSchema = Yup.object().shape({
  name: Yup.string().required("Ingresa el nombre de la actividad"),
  city: Yup.string().required("Ingresa la ciudad"),
});

export const securityQuestionsValidationSchema = Yup.object().shape({
  question1: Yup.object().shape({
    answer: Yup.string().required("Esta pregunta es obligatoria"),
  }),
  question2: Yup.object().shape({
    answer: Yup.string().required("Esta pregunta es obligatoria"),
  }),
});
