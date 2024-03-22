**Technical Report - configuration management methodology**

![](Logo_US.png)



**Integrantes del grupo G7-71:**

- Franco Dell ’Águila Ureña (<fradelure@alum.us.es>)
- Tomás Huecas Calderón (<tomhuecal@alum.us.es>)
- Pablo Jesús Castellanos Compaña(<pabcascom@alum.us.es>)
- Sergio Pons López (<serponlop@alum.us.es>)
- Natalia Olmo Villegas (<natolmvil@alum.us.es>)





**Fecha:** Sevilla, 23 de febrero 2024 

ÍNDICE

[Historial de Versiones](#_toc650793865)

[1.	Introducción](#_toc1138212482)

[2.	Estándares de codificación](#_toc2084415613)

[3.	Política de mensajes de los Commit](#_toc644958474)

[4.	Estructura de los repositorios y ramas predeterminadas](#_toc1175091428)

[5.	Estrategia de Branching , basada en Git Flow, e incluyendo revisiones por pares](#_toc942222353)

[5.1 Cómo desarrollar las ramas características](#_toc1772051387)

[5.2 Cómo preparar los lanzamientos](#_toc1156236494)

[5.3 Cómo arreglar bugs en producción](#_toc1232473662)

[6.	Política de versionado](#_toc2020940289)

[7.	La definición de "Done"](#_toc1893448099)

[8.	Cómo se van a gestionar en el repositorio los documentos que se han generado durante el proyecto (informes técnicos, minutos de reuniones, etc.) adaptándolos a las estrategias previamente descritas.](#_toc948307300)

[9.	ITop CMDB configuration.](#_toc1977256386)

[10. Conclusiones](#_toc783249044)

<div id="_toc147001558"></div>

## Historial de Versiones

|**Versión**|**Contenidos**|**Fecha**|**Contribuyente**|
| - | - | - | - |
|V1.0|<p>Política de Mensajes Commit</p><p>Estructura de repositorio</p><p>Definición de Done</p>|13-02-2024|<p>Franco Dell ’Águila Ureña</p><p>Natalia Olmo Villegas</p><p>Pablo Jesús Castellanos Compaña</p>|
|V1.1|<p>Estándares de Codificación</p><p>Estrategia de Branching</p><p>Política de versionado</p>|20-02-2024|<p>Franco Dell ’Águila Ureña</p><p>Natalia Olmo Villegas</p><p>Tomás Huecas Calderón</p>|
|V1.2|<p>ITop Configuration</p><p>Gestión de repositorio</p>|23-02-2024|<p>Franco Dell ’Águila Ureña</p><p>Natalia Olmo Villegas</p>|


<div id="_toc1138212482"></div>

## 1. Introducción

La gestión de la configuración en el desarrollo de software es un aspecto crítico para garantizar la calidad, la estabilidad y la escalabilidad de los productos tecnológicos. En este informe, se presenta una metodología detallada para la gestión de la configuración en el contexto del proyecto G7-71. Este proyecto requiere un enfoque riguroso y bien estructurado para gestionar eficazmente los cambios en el código, las versiones del software y la integración continua.

El informe comienza describiendo los estándares de codificación, las políticas de mensajes de commit y la estructura del repositorio utilizados en el proyecto. A continuación, se presenta la estrategia de branching basada en GitFlow, que incluye revisiones por pares para garantizar la calidad del código y la integración continua. Además, se detallan los procesos para el desarrollo de ramas características, preparación de lanzamientos y corrección de bugs en producción. Finalmente, se establecen las políticas de versionado y se discute la configuración de la CMDB para la gestión eficiente de la infraestructura tecnológica.

Este informe proporciona una guía completa para la gestión de la configuración en el proyecto G7-71, destacando la importancia de adoptar prácticas sólidas de desarrollo y colaboración para lograr el éxito del proyecto.

<div id="_toc2084415613"></div>

## 2. Estándares de codificación

Es importante establecer unos estándares de codificación para mejorar la legibilidad del código, así como el mantenimiento, la compresión y la colaboración de los miembros del proyecto. A su vez, estos estándares nos sirven para reducir la deuda técnica. A continuación, presentaremos un conjunto de guías y buenas prácticas usadas para crear software consistente y de alta calidad.

**- Code Lay-Out**

**Identación**: Usamos 4 espacios de identación por nivel.

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.002.png)

**Longitud máxima de línea**: limitamos todas las líneas a un máximo de 86 caracteres.

**¿Debería una línea romperse antes o después de un operador binario?** Antes.

**Imports**: Los imports se deben realizar en líneas separadas y deben encontrarse siempre en la zona superior del archivo.

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.003.png)

**Espacios**: Evitar espacios innecesarios como se indica en el ejemplo:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.004.png)
**Convenciones de nombrado:**  se utilizarán distintas convenciones dependiendo de los casos:

**Paquetes**: Deben tener nombres cortos y completamente en minúsculas.

**Clases**: Deben usar el formato camelCase.

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.005.png)

**Variables**: Deben tener nombres cortos y usar formato camelCase.

**Constantes**: Deben usar solamente mayúsculas con guiones bajos separando las palabras. 




**- Clean Code**

Es una serie de principios que ayudan a producir código intuitivo y fácil de modificar. Algunos de ellos son:

- **KISS** (del inglés keep it simple, stupid o “que sea sencillo, estúpido”) indica que el código debe ser lo más sencillo posible, evitando cualquier complejidad innecesaria.
- **DRY** (del inglés don’t repeat yourself, o “no te repitas”) indica que cada función debe tener una representación única y, por lo tanto, inequívoca dentro del sistema general del clean code.

\- *Ejemplo*: Cuando se identifica que se repite el trabajo sobre distintos atributos, se debe crear una función externa que permita realizar la misma función en ambos casos.

- **YAGNI** (you aren’t gonna need it o “no lo vas a necesitar”) indica que un desarrollador solo debe añadir funciones al código cuando sea estrictamente necesario.

\- *Ejemplo*: cuando el sistema identifique imports innesesarios se deben eliminar 	de la clase.

- **Separation of concerns** indica que cada componente tiene una única responsabilidad. 

\- *Ejemplo*: separar la lógica de negocio de la capa de presentación.

- **Information hiding** indica que se deben diseñar los módulos de forma que la información no sea accesible para aquellos que no la necesiten, para evitar dependencias innecesarias.

\- *Ejemplo*: utilizar atributos private.

- **Protected variations** indica que se deben realizar cambios modificando únicamente los módulos necesarios para minimizar el impacto de los cambios en el resto del código.
- **Alta cohesión**: Un módulo debe tener una función.
- **Bajo acoplamiento**: Minimizar el grado de dependencia entre módulos.

\- *Ejemplo*: Si una clase necesita interactuar con otra, debería hacerlo a través de interfaces bien definidas en lugar de acceder directamente a los métodos y propiedades internas de la otra clase.

\- Buenas prácticas de testing

- Realizar test con distintos niveles de granularidad.
- Cubrir todos los caminos y situaciones posibles.
- Automatizar los tests.
- Test parametrizados para poder utilizar distintos parámetros en un mismo test.
- Fluent assertions se usan assertions especficas para que las assertions sean más fáciles de leer.
- Keep Unit Tests Focused para que un test se enfoque en una situación específica.
- Keep Cause and Effect Clear se denotan juntos la causa y el efecto para aumentar la legibilidad.
#

<div id="_toc644958474"></div>

## 3. Política de mensajes de los Commit

Es importante establecer una política de mensajes a la hora de realizar los commits al repositorio de GitHub para establecer un orden y que todos los integrantes del grupo puedan seguir el proyecto con facilidad. Una política de mensajes de commit clara y consistente resulta fundamental para mantener un historial de código legible y comprensible, tanto para los desarrolladores, como para todos aquellos que desean leer y reutilizar ese código. Esta es la política establecida en nuestro proyecto:

1. Idioma

   Hemos establecido que el idioma en el que se van a realizar los commits será en inglés por ser este un idioma más universal que el español.  

1. Tipos de Commit
   1. **feat**: Implementar nueva funcionalidad o característica.
   1. **fix**: Corrección de un bug en el código base.
   1. **docs**: Cambios en la documentación.
   1. **style**: Cambios que no afectan al comportamiento del código, sino al aspecto de la interfaz de usuario.
   1. **refactor**: Modificaciones en el código que implican su refactorización. 
   1. **test**: Programar tests para probar que funciona una parte del código.

Añade **!** después del tipo si el commit introduce un cambio importante que rompe la compatibilidad. Un ejemplo de este tipo:

feat!: Cambiar la API de autenticación para soportar múltiples proveedores

1. Formato pie de página del mensaje de Commit

   Un cambio importante también puede ser anotado incluyendo en el pie de página del commit:

   BREAKING CHANGE: <descripción>

1. Reglas a aplicar sobre los mensajes de Commit

   2. Cada encabezado de commit debe tener menos de 50 caracteres.
   2. Capitaliza la línea de asunto: Comienza la línea de asunto con una letra mayúscula.
   2. No termines la línea de asunto con un punto: Evita poner un punto al final de la línea de asunto.
   2. Usa el modo imperativo en la línea de asunto: Escribe la línea de asunto como si dieras una orden o instrucción.
   2. Si se considera necesario, agregar un cuerpo descriptivo al commit después del encabezado, separado por una línea en blanco.
   2. El cuerpo del commit debe tener menos de 72 caracteres.
   2. Utiliza el cuerpo para explicar qué y por qué en lugar de cómo: el cuerpo del mensaje debe usarse para explicar el propósito y la razón de los cambios, en lugar de los detalles técnicos de cómo se implementaron los cambios.

1. Estructura de mensaje de Commit

   <tipo> [alcance opcional]: <descripción>

   <línea en blanco>

   ` `[cuerpo opcional]

   <línea en blanco>

   ` `[pie(s) de página opcional]


\- *Ejemplos*:

- feat: Add new functionality about edit the users’ profile

  The users now can edit their email and their phone number.

  ![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.006.png)

- fix: Solve error in log in

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.007.png)

- refactor(auth): improve business logic of authentication module

  The authentication module has been refactored to simplify the code and improve the maintainability. The redundant functions have been removed and there is an improvement in the password’s verification logic. 

  BREAKING CHANGE: The verifyUser() function has been replaced by authenticateUser(). Update the API calls accordingly this change. 

- docs: Update versioning historial

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.008.png)

- feat(api)!: cambia el endpoint de la API de usuarios

  BREAKING CHANGE: El endpoint anterior /api/users ahora es /api/members


<div id="_toc1175091428"></div>

## 4. Estructura de los repositorios y ramas predeterminadas

   En este proyecto vamos a trabajar a través de la herramienta GitHub con dos tipos de repositorios, locales y remotos. Los repositorios se clonan localmente con “git clone <url>” y se trabaja con ellos a través de Git. Por otra parte, los cambios se suben (push) o descargan (pull) desde repositorios remotos como GitHub o GitLab.

   La rama predeterminada en Git es la rama “main” o “master”. Esta es la rama de desarrollo principal donde se acumulan todos los cambios finales. Cuando se inicia un nuevo repositorio, Git crea automáticamente esta rama y, a menos que se especifique otra rama, todos los commits se harán en ella. 

   Además, en nuestro caso, se añadirá una rama por cada nueva tarea a desarrollar. La gestión de estas se llevará a cabo con “git branch <branch name>” y se cambia entre ellas con “git checkout <branch name>” o “git checkout -b <branch name>” para crear y cambiar de rama en un solo paso. Si se quieren fusionar dos ramas se utiliza el comando ”git merge <branch to be merged into>” para integrar los cambios de una rama en otra.

<div id="_toc942222353"></div>

## 5. Estrategia de Branching, basada en Git Flow, e incluyendo revisiones por pares

   La bifurcación de las ramas de un repositorio (branching) es un poderoso mecanismo de VCS. El equipo debe seguir un método de trabajo para integrar este mecanismo. En nuestro proyecto se basará el branching en Gitflow. Es importante recalcar que durante este proceso destaca la integración continua y se soporta un desarrollo ágil.

   Gitflow soporta 2 ramas principales: “**master/main**”, la rama principal con un estado listo para la producción; y “**develop**”, que tiene los últimos cambios entregados para el siguiente lanzamiento. Además, tenemos una rama por cada tarea del A1.6, que en nuestro caso salen desde main, aunque deberían de salir desde develop para que se siguiera la metodología GitFlow. También hemos creado una rama hotfix por si nos hubiera hecho falta, aunque en nuestro caso no ha sido necesario ya que no hemos tenido ningún bug crítico. 

   ![Interfaz de usuario gráfica, Aplicación

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.009.png)

   La estrategia de revisiones pares es un proceso fundamental en el desarrollo de software que implica que otro miembro del equipo revise el código creado por otro integrante antes de que se incorpore al repositorio principal. A continuación, se describe la estrategia para llevar a cabo revisiones pares en GitHub:

   1. Enviar una solicitud pull request: Una vez que se hayan completado los cambios, se crea una solicitud extracción desde la rama de feature a la rama principal del repositorio. 

      ![Interfaz de usuario gráfica, Texto, Aplicación, Correo electrónico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.010.png)

   1. Seleccionar revisor: Dentro de Github, seleccionar al miembro del equipo que se desea que revise el código.

      ![Interfaz de usuario gráfica, Texto, Aplicación, Correo electrónico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.011.png)

   1. Revisión del código: El revisor examinará el código en busca de errores, cumplimiento de estándares de codificación y cualquier otra área que sea relevante para el proyecto. Puede dejar comentarios en la interfaz de la solicitud pull request.

      ![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.012.png)![Interfaz de usuario gráfica, Texto, Aplicación, Correo electrónico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.013.png)

      ![Interfaz de usuario gráfica, Texto, Aplicación, Correo electrónico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.014.png)

   1. Resolución de conflictos: Si se encuentran problemas o sugerencias de mejora, se realizan los cambios necesarios en la rama feature y se actualiza la solicitud la pull request. 

      ![Captura de pantalla de un celular

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.015.png)

   1. Aprobar la solicitud pull request: Una vez que el revisor esté satisfecho con los cambios y no haya más problemas pendientes, se puede aprobar la pull request.

      ![Interfaz de usuario gráfica, Texto, Aplicación, Correo electrónico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.016.png)

   1. Hacer merge del pull request: Después de que la pull request haya sido aprobada, se procede a hacer merge de los cambios en la rama principal del repositorio.

<div id="_toc1772051387"></div>

### 5.1 Cómo desarrollar las ramas características


Las ramas características (features) son aquellas ramas de corta duración con pequeños incrementos característicos al proyecto para su próximo lanzamiento. Estas ramas normalmente sólo existen en develop, pero en nuestro proyecto serán publicadas al remoto. A la hora de fusionarlas son necesarias las revisiones por parejas con pull requests. 

Para empezar una feature utilizaremos este comando: 

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.017.png)

Para finalizar una feature se utilizan estos comandos: 

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.018.png) 

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.019.png)

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.020.png)

Aquí un ejemplo de ramas features, que en nuestro caso no han salido de develop, si no que han salido desde main.

<div id="_toc1156236494"></div>

### 5.2 Cómo preparar los lanzamientos


Antes de cada lanzamiento(release), se llevarán a cabo los cambios de último minuto, la corrección de pequeños bugs y se preparan los metadatos para el lanzamiento. 

Para empezar el release, se lanza el siguiente comando:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.021.png)

Para finalizar el release, se lanzan los siguientes comandos, teniendo en cuenta que antes de hacer el merge debe haber un peer review:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.022.png)

![Texto

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.023.png)

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.024.png)

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.025.png)

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.026.png)

Luego, se subirá al main la etiqueta y ya en GitHub saldrá esta nueva etiqueta de versión

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.027.png)

![Imagen que contiene Gráfico

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.028.png)![Interfaz de usuario gráfica, Texto

Descripción generada automáticamente](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.029.png)

<div id="_toc1232473662"></div>

### 5.3 Cómo arreglar bugs en producción


El proceso es similar al anterior, pero éste no está planeado. Un bug crítico en la versión de producción debe ser resuelto. 

Para comenzar el arreglo de un bug (bugfix) utilizamos el siguiente comando:

git checkout -b hotfix/1.2.1 main

Para finalizar un bugfix necesitamos los siguientes comandos, teniendo en cuenta que antes de hacer el merge debe haber un peer review:

git checkout main 

git merge --no-ff hotfix/1.2.1 

git tag -a 1.2.1 

git checkout develop 

git merge --no-ff hotfix/1.2.1

No tenemos ejemplos de este proceso, pues no ha sido necesario usar esta rama porque no ha aparecido ningún big crítico. 

<div id="_toc2020940289"></div>

## 6. Política de versionado

   Cada lanzamiento debe tener una etiqueta asociada que nos muestre su nombre, el tipo de lanzamiento y la versión. Usaremos en nuestro proyecto el versionado semántico con el siguiente formato **X.Y.Z-etiqueta** donde:

   2. **X**: Versiones mayores, cambios mayores correspondientes a cada sprint, rompe la compatibilidad de la API. Para el desarrollo inicial de una versión mayor se comenzará por 0.y.z. La primera API pública estará definida por 1.0.0. Cuando X es incrementado, Y y Z se reinician y se ponen a 0. 
   2. ![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.030.png)
   2. **Y:** Versiones menores, nueva funcionalidad sustancial implementada o mejoras que no rompe la compatibilidad de la API. Incluye una nueva funcionalidad sustancial. Puede incluir parches (cambios para corregir errores). Cuando Y se incrementa, se reinicia Z. 
   2. ![ref1]
   2. **Z**: Versiones de parcheo, corrección de errores internos o parches menores para arreglar un comportamiento incorrecto de la aplicación. No rompe la compatibilidad con la API. 
   2. ![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.032.png)
   2. **Etiqueta:** Pueden aparecer etiquetas añadidas, denotan versiones antes de ser lanzadas. También son usadas para construir metadatos. Hay que tener cuidado cuando se compara la procedencia de las versiones.

      Sin etiqueta cuando se encuentra en producción.

      <a name="_int_lw7ba91y"></a>**Etiqueta Alpha**: Es una versión que es muy probable que tenga muchas opciones que mejorar, pero queremos que sea probada para encontrar errores y poder poner a prueba funcionalidades, en la mayoría de los casos podemos decir que está casi listo el producto.

Ejemplo: estando en la versión 2.3.4, si se considera estar en una versión alpha se pasa a la 2.3.4-Alpha.


**Etiqueta RC** (Release Candidate): Es el paso previo a la entrega, se deben buscar errores menores y realizar pocos cambios respecto a la entrega final.

![ref2]

<div id="_toc1893448099"></div>

## 7. La definición de "Done" 


   Es una lista de criterios que deben cumplirse para que una tarea o elemento del backlog se considere completado. Esta lista debe ser clara, específica y comprendida por todos los miembros del equipo Scrum para garantizar una entrega del producto de alta calidad al final de cada Sprint.** Esta es la definición de “Done” que hemos establecido:

2. **Código Completado**: El código de esa tarea aborda todo lo solicitado en los requisitos y se han solucionado todos los problemas identificados durante la revisión.
2. **Integración Continua**: La funcionalidad se ha integrado correctamente con el repositorio principal, donde se almacena el resto del código.
2. **Pruebas de Aceptación del Usuario:** La funcionalidad ha sido sometida a pruebas de aceptación y ha sido aprobada por el Product Owner o el cliente.
2. **Documentación Actualizada**: Se ha actualizado toda la documentación relevante.
2. **Cumplimiento de Estándares de Codificación**: El código cumple con los estándares de codificación y estilo del equipo.
2. **Despliegue en Entorno de Pruebas y de Producción**
2. **Feedback**: Se ha considerado el feedback del cliente o usuarios finales.

Tarea: Cambiar a color marrón las cartas de pricing plan.

Commit:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.034.png)

Resultado:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.035.png)

Conclusión: se concluye la tarea por terminada ya que se realizó el cambio de manera satisfactoria y no se han encontrado problemas.

<div id="_toc948307300"></div>

## 8. Cómo se van a gestionar en el repositorio los documentos que se han generado durante el proyecto (informes técnicos, minutos de reuniones, etc.) adaptándolos a las estrategias previamente descritas.



Por comodidad, hemos decidido realizar los technical reports en un documento compartido de Word. Posteriormente mediante el uso de la página <https://products.aspose.app/words/es/conversion/word-to-md>, hemos convertido este documento Word a MarkDown, adaptándolo para su correcta visualización. Estos informes técnicos serán subidos a la carpeta docs del repositorio de GitHub. 

Respecto al documento donde vienen reflejados el informe de las horas con sus actividades correspondientes estamos usando la herramienta clockify que generara un informe automáticamente.

Los documentos con las retrospectivas y las reuniones se reflejarán en un informe word.



<div id="_toc1977256386"></div>

## 9. ITop CMDB configuration.


A)

La CMDB (Configuration Management Database) se encarga de:

- Almacenar Information Technologies (IT) y configuracion sobre servicios y organizaciones.
- Dar soporte a un seguimiento correcto de los procesos dentro de la organización.
- Proveer informacion sobre la gestión de incidentes, deploys, riesgos, cambios y audits.

CMDB puede ser usado para evaluar si la organización tiene los recursos necesarios para resolver pedidos de soporte y mantenimiento.

Después de buscar los componentes relevantes, pueden surgir 3 respuestas:

- SI: la organización tiene la infraestructura necesaria para proveer el servicio.
- NO: la organización no tiene acceso a la infraestructura necesaria.
- INDEFINIDO: nuestra CMDB no contiene suficiente información para conocer si tenemos la infraestructura necesaria.

B)

Estructura del CMDB:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.036.png)

Lista de Configuration Items:

![](Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.037.png)

<div id="_toc783249044"></div>

## 10. Conclusiones

La implementación de una metodología de gestión de configuración sólida y bien definida es fundamental para el éxito de cualquier proyecto de desarrollo de software. <a name="_int_tcfv9o6x"></a>En el caso del proyecto G7-71, hemos establecido un conjunto de estándares, políticas y procesos que nos han permitido gestionar de manera efectiva los cambios en el código, las versiones del software y la infraestructura tecnológica.

La adopción de prácticas como la revisión de código por pares, la integración continua y el establecimiento de estándares para la codificación ha mejorado significativamente la calidad del código y la eficiencia del desarrollo. Además, la estructura de repositorio basada en GitFlow ha facilitado la colaboración entre los miembros del equipo y ha permitido un desarrollo ágil y organizado.

En resumen, la metodología de gestión de configuración implementada ha demostrado ser fundamental para mantener la estabilidad, la calidad y la escalabilidad del software desarrollado. Continuaremos aplicando estas prácticas y refinando nuestros procesos para seguir mejorando en futuros proyectos.

[ref1]: Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.031.png
[ref2]: Aspose.Words.1876eb57-2cbe-48a2-9aed-01c5f8b7f530.033.png
