# 01_Configuracion

## 01 Captura del comando de verificación de node.js

![verificacion de node](/assets/01-verificacion-nodejs.png)

## 02 Captura del servidor NodeJS iniciándose correctamente

![servidor NodeJS iniciándose correctamente](/assets/02-nestjs-inicio-correcto.png)

## 03 Captura del endpoint /api/status funcionando

![/api/status funcionando](/assets/03-endpoint-funcionando.png)

## 04 Captura de ls ./src/status

![ls ./src/status/](/assets/04-comando-consola.png)

En esta práctica se instaló nest, se creó un proyecto llamado 01 fundamentos, además de modificar el código y agregar nuevos archivos para incluir un endpoint /api/status.

@Controller() nos indica que la clase maneja o administra rutas HTTP.
@Get() señala que el método responde a peticiones HTTP de tipo Get.
@Module() se encarga de definir un módulo. Su objetivo es organizar controladores, servicios y proveedores.

El servidor NestJS funciona levantando una aplicación Node.js y este escucha peticiones HTTP. Por ejemplo, es esta práctica, cuando el usuario se dirige a /api/status. NestJS se encarga de dirigir la solicitud al controlador correspondiente.


Una similitud que observo con Spring boot es que ambos usan una estructura organizada que se basa en controladores, módulos, servicios y componentes para definir rutas y comportamientos