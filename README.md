# 01_Configuracion

## Ejecutarlo

pnpm start:dev

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

# 02_estructura_proyecto

## Captura del IDE mostrando la estructura modular

![Estructura modular](/assets/01-estructura-modular-nest.png)

## Captura del archivo users.module.ts

![users.module.ts](/assets/02-user-module-ts.png)

## Captura del arbol desde terminal

![Arbol desde terminal](/assets/03-arbol-desde-terminal-nest.png)

## Explicación breve

La arquitectura modular permite la separación de la aplicación acorde a su responsabilidad. Observamos que users agrupa todo los elementos que estén relacionados con usuarios, auth se encarga de todo lo relacionado a la autenticación y lo mismo para productos.

El controller, al igual que spring boot, se encarga de recibir peticiones HTTP y definir rutas que estén disponibles. En service se guarda la lógica de negocio que será usada por el controller y por último el módulo es el elemento que se encarga de organizar los controladores (controllers) y los servicios (services)

Mantener una estructura clara y ordenada ayuda a la mantenibilidad, ya que cada funcionalidad se guarda en una carpeta específica. Esto nos facilita para encontrar los archivos más rápidos y no evita confusiones. Ya que sería un desastre tener todos los archivos mezclados en una misma carpeta. 