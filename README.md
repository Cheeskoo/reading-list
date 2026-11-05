# 📚 Reading List

Aplicación web para gestionar tu lista de lectura personal. Permite registrar libros, organizarlos según su estado de lectura, calificarlos y agregar notas.

Construida con **React 19**, **TypeScript** y **Vite**, y conectada a una API REST externa que almacena los libros.

## ✨ Funcionalidades

- 📖 **Ver tu biblioteca** con todos los libros guardados y el total de libros en la lista.
- 🔎 **Filtrar por estado**: *Want to read*, *Reading* y *Finished* (el filtro se refleja en la URL, p. ej. `/?status=reading`).
- ➕ **Agregar libros** con título, autor, estado, calificación (1 a 5 estrellas) y notas.
- ✏️ **Editar** la información de cualquier libro.
- 🗑️ **Eliminar** libros de la lista.
- ⭐ **Calificación visual** con estrellas.
- 🚫 Página **404** para rutas inexistentes.

## 🛠️ Tecnologías

| Herramienta | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Librería de UI (con React Compiler) |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Vite](https://vite.dev/) | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com/) | Enrutamiento del lado del cliente |
| [React Icons](https://react-icons.github.io/react-icons/) | Íconos |
| [Oxlint](https://oxc.rs/) | Linter |

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- Una API REST de libros corriendo (por defecto en `http://localhost:8000`) — ver [API esperada](#-api-esperada).

## 🚀 Instalación y uso

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd reading-list
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno copiando el archivo de ejemplo:

   ```bash
   cp .env.example .env
   ```

   Y editar `.env` con la URL de tu API:

   ```env
   VITE_API_URL=http://localhost:8000
   ```

   > Si no se define `VITE_API_URL`, la app usa `http://localhost:8000` por defecto.

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`.

## 📜 Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila TypeScript y genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Analiza el código con Oxlint |

## 🗺️ Rutas

| Ruta | Página |
| --- | --- |
| `/` | Biblioteca con todos los libros (acepta `?status=` para filtrar) |
| `/books/new` | Formulario para agregar un libro |
| `/books/:id` | Formulario para editar un libro |
| `*` | Página no encontrada |

## 🔌 API esperada

La aplicación consume los siguientes endpoints. Las respuestas deben envolver los datos en una propiedad `data`.

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/books` | Lista todos los libros |
| `POST` | `/books` | Crea un libro |
| `PUT` | `/books/:id` | Actualiza un libro |
| `DELETE` | `/books/:id` | Elimina un libro |

Estructura de un libro:

```ts
type Book = {
  id: number
  title: string
  author: string
  status: 'want_to_read' | 'reading' | 'finished'
  rating?: number | null   // 1 a 5
  notes?: string | null
  created_at: string
  updated_at: string
}
```

Ejemplo de respuesta de `GET /books`:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "status": "finished",
      "rating": 5,
      "notes": "Un clásico imprescindible.",
      "created_at": "2026-01-10T12:00:00Z",
      "updated_at": "2026-01-10T12:00:00Z"
    }
  ]
}
```

## 📁 Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Cards.tsx         # Tarjeta de un libro
│   ├── CreateBookForm.tsx# Formulario de alta/edición
│   ├── Header.tsx        # Encabezado de la app
│   ├── Library.tsx       # Listado y filtros de la biblioteca
│   └── Stars.tsx         # Calificación con estrellas
├── pages/            # Páginas asociadas a rutas
│   ├── RootLayout.tsx    # Layout principal y estado compartido de libros
│   ├── LibraryPage.tsx
│   ├── AddBookPage.tsx
│   ├── BookPage.tsx
│   └── NotFoundPage.tsx
├── utils/            # Llamadas a la API, tipos y helpers
│   ├── apiUrl.ts
│   ├── booksContext.ts
│   ├── bookStatus.ts
│   ├── createBook.ts
│   ├── deleteBook.ts
│   ├── getBooks.ts
│   ├── updateBook.ts
│   └── types.ts
├── App.tsx           # Definición de rutas
├── main.tsx          # Punto de entrada
└── index.css         # Estilos globales
```

## 👤 Autor

Desarrollado por **Franco Calderon**.
