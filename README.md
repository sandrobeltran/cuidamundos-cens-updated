# Documentación de CuidaMundos
## Compilar proyecto de Next.js a producción
###  Resumen de pasos:
- Conectarse al VPS de forma segura usando SSH.
- Instalar Node.js en el VPS.
- Usar `git clone` para clonar el repositorio del proyecto de manera local.
- Instalar las dependencias del proyecto usando `npm install`.
- Ejecutar el comando `npm run build` para compilar el proyecto.
- Ejecutar el comando `npm start` para poner en marcha el proyecto.
### Recursos adicionales
[Video tutorial de cómo compilar el proyecto](https://www.youtube.com/watch?v=pgoZFKgoiDk)  
[Guía en español de cómo compilar el proyecto](https://faztweb.com/contenido/nextjs-github-actions)  
[Entrada del blog Medium explicando el proceso (Inglés)](https://medium.com/@abdulazizahwan/deploying-node-js-next-js-apps-on-vps-hosting-using-ultahost-c2b6dc9958aa)
## Desplegar base de datos de MongoDB
### Resumen de pasos:
- Conectarse al VPS de forma segura usando SSH.
- Descargar e instalar MongoDB desde el [siguiente enlace ](https://www.mongodb.com/try/download/community) o desde la terminal del sistema operativo.
- Configurar la base de datos (Ver recursos adicionales)
- Poner en marcha el servicio de la base de datos con el comando correspondiente a tu sistema operativo
- Añadir el URI de la conexión a las variables de entorno de la aplicación
### Recursos adicionales
[Configurar MongoDB en Windows y Ubuntu](https://platzi.com/blog/como-instalar-mongodb-en-window-linux-y-mac/)
## Variables de entorno
### ¿Dónde deben ir?
Dentro de la carpeta raíz del proyecto se debe crear un archivo `.env.local`, el cual será leído por la aplicación y debe contener las variables de entorno necesarias.
**NOTA: Estas variables solo deben ser conocidas por los administradores**
### ¿Cuáles son?
- MONGODB_URI: Especifica el URI de conexión a la base de datos de MongoDB (Sugerencia: "mongodb://127.0.0.1:27017/cuidamundos")
- APP_SECRET: Usada para firmar los tokens de autenticación de los usuarios. Se recomienda una clave de mínimo 32 caracteres, pero si son más, mejor.
- API_KEY: Clave local para proteger la API de otras aplicaciones.
- ADMIN_API_KEY: Clave requerida para realizar acciones de administrador en la API de la aplicación.
- NEXT_PUBLIC_API_KEY: Representación pública de la API_KEY (Deben coincidir, comunica el cliente con el servidor)
# cuidamundos-cens-updated
