![Logo Cuidamundos](./public//img//logo_cuidamundos.png)

# Documentación de Cuidamundos

Para desplegar la plataforma de Cuidamundos se realizarán 5 pasos clave:

1. Instalación de Node.js y npm
2. Instalación de MongoDB
3. Configuración inicial de la base de datos
4. Configuración de las variables de entorno
5. Ejecución del servidor

## Pasos a seguir

### Instalación de Node.js y npm

Diríjase a la [página oficial de Node.js](nodejs.org) para descargar e instalar la última versión del entorno de ejecución de JavaScript.

### Instalación de MongoDB

Descargar e instalar MongoDB Server desde [su página oficial](mongodb.org). Adicionalmente se debe descargar MongoDB Compass para facilitar y agilizar la configuración inicial de la base de datos.

### Configuración inicial de la base de datos

Una vez descargado MongoDB Server y su interfaz MongoDB Compass debemos crear el directorio donde la base de datos almacenará esos datos ejecutando el siguiente comando en una terminal:

```cmd
mkdir "C:\data\db"
```

Ahora podemos ejecutar el servidor de MongoDB con el siguiente comando:

```cmd
"C:/Program Files/MongoDB/Server/7.0/bin/mongod.exe"
```

**NOTA**: Debes reemplazar "7.0" por la versión de MongoDB Server que instalaste.  
Una vez iniciado el servidor debemos añadir los juegos a la base de datos, para ello abriremos MongoDB Compass y nos conectaremos a la URL por defecto (`mongodb://localhost:27017`). En la parte inferior veremos una barra con el texto `>_MONGOSH` y al darle click nos abrirá la interfaz de comandos de MongoDB, es ahí donde pegaremos uno a uno los tres bloques de comandos que se encuentran en el archivo llamado `DB_INITIALIZER.txt`  
**NOTA**: Los 3 comandos deben ser pegados uno a uno despues de la ejecución del anterior, no todos a la vez.

### Configuración de las variables de entorno

Para esto se debe crear un archivo con el nombre `.env.local` el cual tendrá el siguiente contenido:

```js
MONGODB_URI=mongodb://localhost:27017/cuidamundos
APP_SECRET=ghbnr89egj#$_34wsdfbndfns
API_KEY=dh830483y03fh4d
NEXT_PUBLIC_API_KEY=dh830483y03fh4d
```

**NOTA**: Se recomienda cambiar los valores de las claves `APP_SECRET` y `API_KEY` por unas personalizadas y secretas, ya que estas solo deben ser conocidas por el personal autorizado. Nótese también que el valor de la `NEXT_PUBLIC_API_KEY` debe coincidir con el de la `API_KEY`.

> A continuación se explica la funcionalidad de cada una de las variables de entorno usadas.
>
> - MONGODB_URI: Especifica el URI de conexión a la base de datos de MongoDB (Sugerencia: "mongodb://127.0.0.1:27017/cuidamundos")
> - APP_SECRET: Usada para firmar los tokens de autenticación de los usuarios. Se recomienda una clave de mínimo 32 caracteres, pero si son más, mejor.
> - API_KEY: Clave local para proteger la API de otras aplicaciones.
> - ADMIN_API_KEY: Clave requerida para realizar acciones de administrador en la API de la aplicación.
> - NEXT_PUBLIC_API_KEY: Representación pública de la API_KEY (Deben coincidir, comunica el cliente con el servidor)

### Ejecución del servidor

Una vez culminados todos los pasos anteriores y asegurándonos que el servidor de MongoDB está activo, es momento de iniciar el servidor de la plataforma. Primero compilaremos el proyecto para producción con el comando `npm run build` para luego de esto solo escribir el comando `npm start` y así ejecutar el servidor de la plataforma.
