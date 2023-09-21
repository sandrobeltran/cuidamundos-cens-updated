import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Nombre muy corto")
    .max(80, "Nombre muy largo")
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
