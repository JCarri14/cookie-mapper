# Política de privacidad — Cookie Mapper

_Última actualización: 19 de noviembre de 2026_

Cookie Mapper es una extensión local que permite leer, renombrar y copiar cookies seleccionadas entre pestañas, siempre por iniciativa del usuario. No utiliza backend, analítica ni vende datos.

## Datos utilizados

- **Nombres, atributos y valores de cookies:** se consultan durante la lectura, vista previa o transferencia iniciada. Los valores permanecen en memoria mientras está abierto el popup y solo se escriben en el destino tras confirmación.
- **Títulos y URLs de pestañas:** se leen para mostrar las pestañas disponibles y comparar los patrones configurados.
- **Mapeos:** nombre, patrones de URL, dominio de cookies y equivalencias de nombres se guardan en `chrome.storage.local`. **No se guardan valores de cookies.**
- **Idioma:** la preferencia `es` o `en` se guarda localmente.

## Compartición y conservación

La extensión no transmite cookies, pestañas ni mapeos al desarrollador ni a terceros. No incluye anuncios, rastreadores ni scripts remotos. Los mapeos y el idioma permanecen en el almacenamiento local hasta eliminarlos, desinstalar la extensión o limpiar los datos del navegador. Los valores de cookies no se conservan al cerrar el popup. Las cookies copiadas pasan a gestionarse por el navegador y el sitio de destino.

El **sitio de destino** sí puede recibir posteriormente estas cookies mediante sus peticiones web normales. Copia sesiones exclusivamente a sitios de confianza.

## Permisos

- `tabs`: listar pestañas y sus direcciones.
- `cookies`: consultar y escribir cookies solicitadas.
- `storage`: conservar reglas e idioma.
- Acceso opcional a sitios HTTP(S): se solicita cuando se utiliza la función, para los dominios seleccionados, no en segundo plano.

## Controles

Puedes eliminar mapeos en **Mapeos → Administrar mapeos**, denegar o revocar permisos de sitios en Edge o desinstalar la extensión. Para consultas, utiliza los issues del repositorio sin compartir valores de cookies ni URLs sensibles.

[English version](PRIVACY.md).
