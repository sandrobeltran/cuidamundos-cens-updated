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
  email: Yup.string().email("Correo inválido").required("Ingresa tu correo"),
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
  email: Yup.string().email("Correo inválido").required("Ingresa tu correo"),
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
    .min(30, "Mensaje muy corto")
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
  address: Yup.string().min(2, "Dirección muy corta").max(80, "Dirección muy larga"),
  phone: Yup.number().max(9999999999, "Número de teléfono inválido"),
  school: Yup.string().min(2, "Nombre muy corto").max(60, "Nombre muy largo"),
  bio: Yup.string().min(2, "Descripción muy corta").max(280, "Descripción muy larga")
})