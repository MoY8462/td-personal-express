# td-personal-api

API mock para pruebas en Netlify Functions.

## Base URL

```
https://tdpersonalapi.netlify.app/
```

## Endpoints

### 1. `.netlify/functions/carousel`
- **Método:** GET
- **Descripción:** Devuelve el mock de imágenes del carrusel.

### 2. `.netlify/functions/persona`
- **Método:** POST
- **Body:**
  ```json
  {
    "numeroEmpleado": "123456"
  }
  ```
- **Descripción:** Devuelve los datos de la persona según el número de empleado.

### 3. `.netlify/functions/movements`
- **Método:** POST
- **Body:**
  ```json
  {
    "empleado": "123456"
  }
  ```
- **Descripción:** Devuelve los movimientos del empleado.

### 4. `.netlify/functions/movementStatus`
- **Método:** POST
- **Body:**
  ```json
  {
    "numeroEmpleado": "123456",
    "idMovement": "1"
  }
  ```
- **Descripción:** Devuelve el estatus de un movimiento específico.

### 5. `.netlify/functions/documents`
- **Método:** POST
- **Body:**
  ```json
  {
    "numeroEmpleado": "123456"
  }
  ```
- **Descripción:** Devuelve los documentos asociados al empleado.

### 6. `.netlify/functions/notifications`
- **Método:** POST
- **Body:**
  ```json
  {
    "numeroEmpleado": "123456"
  }
  ```
- **Descripción:** Devuelve las notificaciones del empleado.

---

> Todos los endpoints devuelven datos mock y requieren el parámetro indicado en el body para los métodos POST.
