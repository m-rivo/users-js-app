### 🏪Store

- En la carpeta `store` se encuentran los archivos relacionados con la gestión del estado global de la aplicación. Esto puede incluir configuraciones para bibliotecas de estado como Redux, Zustand, o Vuex (en el caso de Vue).
- Aquí se gestionan acciones, reducers, selectors, y cualquier lógica relacionada con la manipulación del estado global.

La carpeta store en una arquitectura moderna se utiliza para gestionar el estado global de la aplicación, centralizando el manejo de datos que necesitan ser compartidos entre varios componentes. Al utilizar un estado global, se evita tener que pasar datos manualmente entre diferentes niveles de la jerarquía de componentes ("prop drilling") y se asegura que todos los componentes que lo necesiten puedan acceder al mismo conjunto de datos. En esta carpeta se suelen configurar bibliotecas de gestión de estado, como Redux o Zustand, e incluir elementos como acciones (para describir cambios de estado), reducers (para especificar cómo se actualiza el estado en respuesta a las acciones) y middlewares (para manejar efectos secundarios, como llamadas a APIs).

Además, la carpeta store puede contener funciones llamadas selectores, que sirven para acceder a partes específicas del estado global de manera más sencilla, y mejorar la eficiencia al seleccionar solo lo necesario. Esta estructura permite una gestión más ordenada del estado de la aplicación, manteniendo un flujo predecible de datos y facilitando el mantenimiento y la escalabilidad del proyecto a medida que crece en complejidad.
