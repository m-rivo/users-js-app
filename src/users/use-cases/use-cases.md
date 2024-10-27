### ⌨️Use Cases

- La carpeta `use-cases` contiene los casos de uso o la lógica de negocio de la aplicación. Define lo que la aplicación puede hacer y cómo esas acciones están organizadas.
- Por ejemplo, un caso de uso podría ser `GetUserDetails`, que define la lógica para obtener los detalles de un usuario a partir de un repositorio.
- En una arquitectura de "Clean Architecture", los casos de uso representan la capa de aplicación, donde reside la lógica específica para resolver un problema o ejecutar una acción.

La carpeta use-cases se encarga de la lógica de negocio central de la aplicación, definiendo las acciones específicas que la aplicación puede realizar y los procesos necesarios para lograr los objetivos del negocio. Un "use case" o caso de uso representa una tarea o función completa que la aplicación ejecuta, como "crear un usuario", "procesar un pago" o "enviar un correo electrónico". Estos casos de uso encapsulan la lógica necesaria para interactuar con otras capas (como la persistencia de datos o la capa de presentación), asegurando que la lógica de negocio esté bien organizada y separada de las preocupaciones técnicas.

En una arquitectura limpia (Clean Architecture), los casos de uso actúan como la capa de aplicación, concentrándose en la lógica de negocio sin conocer detalles sobre la implementación de almacenamiento o la interfaz de usuario. Cada caso de uso debería ser independiente, de manera que se pueda probar y reutilizar de forma aislada.
