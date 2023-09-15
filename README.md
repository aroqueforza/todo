# TODO App - Instrucciones para el Candidato

Este proyecto es una simple aplicación de lista de tareas pendientes (TODO App). Por favor, siga las instrucciones a continuación para completar la prueba técnica.

## Configuración inicial del entorno

1. **Clonar el repositorio y moverse a la rama dev**
    https://github.com/aroqueforza/todo.git

## Instrucciones para la prueba

### Crear una nueva rama

El candidato debe iniciar la prueba creando una nueva rama (nombre del candidato) en el repositorio del proyecto. Esto permitirá un flujo de trabajo más limpio y la posibilidad de revisar cambios de manera aislada.

### Consulta a la API para obtener las tareas

El candidato deberá implementar una llamada al servicio de API que se encargue de obtener las tareas. Esto implicará el uso de `HttpClient` y la gestión de posibles errores durante la solicitud.

### Mostrar el listado de tareas

Una vez que los datos se obtienen de la API, el candidato debe crear un componente que sea capaz de mostrar la lista de tareas. Esto debería incluir la creación de un modelo de datos y la implementación del binding de datos.

### Mensaje de no existencia de tareas

El candidato debe implementar una funcionalidad que muestre un mensaje informativo en caso de que no haya tareas para mostrar.

### Actualizar estado de las tareas

El candidato debe crear una funcionalidad que permita al usuario marcar las tareas como completadas. Esto implicará hacer una llamada a la API para actualizar el estado de la tarea y actualizar la vista en consecuencia.

### Crear una nueva tarea

El candidato debe implementar un formulario para crear nuevas tareas. Esto debería incluir la validación del formulario y el uso de la API para guardar la nueva tarea.

### Eliminar una tarea

El candidato debe añadir una opción para eliminar tareas. Esto implicará la implementación de una función de eliminación que haga una llamada a la API y luego actualice la lista de tareas.

### Mostrar tareas completadas en la barra de herramientas

Por último, el candidato debería agregar una funcionalidad que muestre el número de tareas completadas en la barra de herramientas.

## Entrega

Una vez que haya completado todas las tareas, haga un commit de sus cambios y envíe un pull request para su revisión.
