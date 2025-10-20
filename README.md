# Pinturería Colores - Sitio Web

Este proyecto es un sitio web para una pinturería, construido con **Astro** y **Tailwind CSS**.  
El objetivo es que sea totalmente dinámico, responsive y editable sin necesidad de programar.

---

## 📦 Estructura de la app

- `src/pages/index.astro` → Página principal que importa los componentes y recorre los datos.
- `src/components/Header.astro` → Header con menú responsive (desktop + hamburguesa móvil).
- `src/components/About.astro` → Sección "Sobre la tienda".
- `src/components/Section.astro` → Componente genérico para secciones de productos, recibe subsecciones.
- `src/components/Footer.astro` → Footer con información de contacto, mapa y botón de WhatsApp.
- `src/styles/global.css` → Estilos globales con Tailwind CSS.
- `src/data/data.json` → Contenido dinámico de todas las secciones y productos.

---

## 🎨 Tecnologías usadas

- **Astro** → Framework moderno para generar sitios estáticos.
- **Tailwind CSS** → Sistema de clases utilitarias para diseño responsive y rápido.
- **HTML, CSS y JavaScript** → Para interacciones como menú hamburguesa y scroll suave.

---

## 📝 Edición del contenido (JSON)

Toda la información de productos y secciones se controla desde:


### Estructura del JSON

- Cada key de primer nivel representa una **sección** (por ejemplo: `automovil`, `casa`, `personal`).  
- Dentro de cada sección hay:
  - `title`: el nombre de la sección que aparece en la página y en el header.  
  - `subsections`: un objeto con las subsecciones de la sección, que contiene:
    - `text`: el título de la subsección.  
    - `products`: un arreglo de productos, cada uno con:
      - `name`: nombre del producto.  
      - `img`: ruta de la imagen.

#### Ejemplo mínimo:

```json
{
  "automovil": {
    "title": "Automóvil",
    "subsections": {
      "lo_mejor": {
        "text": "Lo mejor",
        "products": [
          { "name": "Esmalte rojo", "img": "/images/auto1.jpg" }
        ]
      }
    }
  }
}

```


### ✅ Qué permite modificar

Agregar, eliminar o renombrar secciones.

Agregar, eliminar o renombrar subsecciones dentro de cada sección.

Agregar, eliminar o actualizar productos dentro de cada subsección.

Cambiar títulos, nombres de productos e imágenes sin tocar código.

Esto hace que cualquier persona que no sepa programar pueda modificar todo el contenido de la web solo editando data.json.

### 🔍 Validación del JSON

Para asegurarte de que tu data.json está bien escrito y no rompe la web, podés usar estas páginas de validación online:

https://jsonlint.com/

https://jsonformatter.curiousconcept.com/

Solo copiá y pegá el contenido del archivo y verificá que sea válido antes de guardar los cambios.



### 🗺️ Modificar la ubicación del mapa

El footer usa un <iframe> de Google Maps para mostrar la ubicación de la tienda.
Si querés cambiar la ubicación, seguí estos pasos:

Abrí Google Maps.

Buscá la dirección nueva (por ejemplo: "Avenida San Martín 1455, Ciudad").

Hacé click en Compartir → Insertar un mapa → Copiar HTML.

Del código copiado, solo necesitás el atributo src del <iframe>.

Reemplazá el src en Footer.astro con la nueva URL: