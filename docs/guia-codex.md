---
title: "Instala Mister Seo en Codex"
---

# Instala Mister Seo en Codex

Tu web puede ser fácil de encontrar en un buscador y difícil de interpretar para un sistema de respuestas. Mister Seo revisa ambas dimensiones y conserva dos resultados separados: **Search SEO** y **AI Visibility**. Así puedes decidir qué corregir según la evidencia de tu sitio.

## Qué hace y cuándo usarlo

Úsalo antes de publicar una web, al revisar una caída de visibilidad, después de cambiar plantillas o cuando quieras comparar dos versiones. Recibe una URL pública, HTML local o un informe guardado. Detecta plataforma, framework y tipo de negocio; realiza chequeos reproducibles y después permite revisar contenido, confianza y estructura con el asistente.

Incluye 23 módulos de auditoría, 25 chequeos deterministas y procedimientos de rastreo, informes, comparación y correcciones. La distribución Mister Seo es 1.0.0 y conserva el motor 0.2.0. No instala servicios en tu web.

## Antes de instalar

Necesitas **Codex con acceso a archivos y ejecución**, Node.js 18 o superior y Git si eliges clonar el repositorio. Comprueba `node --version` y `git --version` en tu terminal. Para una URL hace falta acceso a internet. Los chequeos sobre HTML local no necesitan descargar páginas ni conectar cuentas.

El motor estático no requiere una API de pago. El uso del asistente depende de tu plan de Codex; las herramientas opcionales y sus cuotas se revisan por separado. No necesitas entregar contraseñas para comenzar.

## Opción 1: pídeselo al asistente

Copia este mensaje en Codex. Revisa las rutas que te propone y espera a que compruebe la instalación:

> Instala Mister Seo para Codex desde https://github.com/Alanmezaoficial/mister-seo. Lee docs/guia-codex.md y conserva la carpeta codex/mister-seo completa, incluidos scripts, referencias, esquemas, pruebas, LICENSE y NOTICE. Comprueba Node 18+ y no sobrescribas instalaciones existentes. No audites sitios, conectes cuentas ni apliques correcciones durante la instalación. Comprueba la estructura y explícame cómo verificar la activación en una sesión nueva. Si no tienes acceso a archivos o ejecución, explica qué falta sin afirmar que se instaló.

Esta opción obtiene los archivos desde GitHub. Pegar el mensaje en un chat sin acceso a tu equipo no instala nada: el asistente debe explicar los pasos que faltan.

## Opción 2: instala desde el ZIP

Descarga **mister-seo-codex-1.0.0.zip** desde la ficha de esta edición en el Bunker. Adjunta el archivo o proporciona su ruta local y pega lo siguiente:

> Instala Mister Seo para Codex desde el ZIP que adjunto o cuya ruta local te indico. Lee INSTALAR.md. Extrae de forma segura y conserva toda la carpeta mister-seo, incluyendo motor, referencias, LICENSE y NOTICE. No sobrescribas versiones existentes. Verifica Node 18+ y explícame cómo activar la herramienta. Limita el trabajo a instalarla; no modifiques webs ni conectes cuentas.

Descomprimir el archivo no lo activa. Conserva `INSTALAR.md` y la carpeta completa; no elimines scripts o referencias para reducir el tamaño. El ZIP contiene la misma herramienta que la instalación desde el repositorio.

## Opción 3: instalación manual

En Windows abre PowerShell. Si ya tienes una carpeta `mister-seo` en tu usuario, revisa su contenido antes de usar estos comandos; no borres tu copia para continuar.

```powershell
$seoRepo = Join-Path $env:USERPROFILE 'mister-seo'
$seoSkills = Join-Path $env:USERPROFILE '.agents/skills'
git clone https://github.com/Alanmezaoficial/mister-seo.git $seoRepo
if ($LASTEXITCODE -ne 0) { throw 'Revisa la descarga antes de continuar.' }
New-Item -ItemType Directory -Force $seoSkills | Out-Null
if (Test-Path (Join-Path $seoSkills 'mister-seo')) { throw 'Ya existe una instalación. Revisa su versión.' }
Copy-Item (Join-Path $seoRepo 'codex/mister-seo') -Destination $seoSkills -Recurse -ErrorAction Stop
```

### macOS y Linux

```bash
git clone https://github.com/Alanmezaoficial/mister-seo.git "$HOME/mister-seo"
mkdir -p "$HOME/.agents/skills"
if [ ! -e "$HOME/.agents/skills/mister-seo" ]; then
  cp -R "$HOME/mister-seo/codex/mister-seo" "$HOME/.agents/skills/"
else
  echo "Ya existe Mister Seo; revisa su versión antes de continuar."
fi
```

### Activación y comprobación

La carpeta final debe ser `~/.agents/skills/mister-seo/SKILL.md`, acompañada de `scripts`, `references`, `schema`, `skills`, `tests` y `mister-seo.mjs`. En Windows `~` es tu carpeta de usuario. Abre un chat nuevo en Codex y busca Mister Seo o invócala con `$mister-seo`. Un chat de ChatGPT sin acceso a archivos y ejecución no sustituye a Codex.

Para el ZIP copia la carpeta completa `mister-seo` a `~/.agents/skills/`; no copies solo SKILL.md. Si quieres limitarla a un proyecto, utiliza `.agents/skills/mister-seo` dentro de ese proyecto.


Pide primero: «Muestra los recorridos disponibles de Mister Seo y comprueba sus archivos, sin iniciar una auditoría». Encontrar SKILL.md prueba que el archivo existe; la activación se confirma en el host, en una sesión nueva.

## Tu primera auditoría

Empieza con una URL que controles y una muestra pequeña:

```text
$mister-seo audit https://tusitio.com --pages 5
```

También puedes decir: «Usa Mister Seo para revisar el SEO y la preparación para buscadores de IA de mi web. Revisa cinco páginas y entrega las dos notas, con evidencia. No apliques cambios».

Para una carpeta local proporciona el build HTML. Un archivo de componentes React, Vue o Astro no equivale al HTML que recibe un robot. Las webs que dependen de JavaScript pueden necesitar un navegador instalado y renderizado adicional. El modo predeterminado es estático; no abre un navegador por sí solo.

## Los cinco recorridos

| Recorrido | Para qué sirve | Qué le proporcionas |
| --- | --- | --- |
| audit | Revisión de SEO e IA, con prioridades | URL o carpeta HTML; número de páginas |
| geo | Revisión centrada en preparación para respuestas de IA | Sitio y, opcionalmente, una pregunta de búsqueda |
| score | Recalcular y resumir un informe existente | Ruta del informe o de su ejecución |
| compare | Comparar sitios o una versión antes/después | Dos ejecuciones o sitios comparables |
| fix | Preparar cambios y aplicarlos con confirmación | Informe guardado, proyecto y destino confirmado |

En Codex invoca `$mister-seo` y describe el recorrido: «compara estas dos auditorías» o «prepara correcciones sin escribir». Codex resuelve el procedimiento incluido y los scripts; los comandos `/mister-seo:*` pertenecen a Claude Code.

## Qué revisa

- **Rastreo e indexación:** robots.txt, canonical, noindex, sitemap, respuestas HTTP y renderizado.
- **Página y estructura:** títulos, metadescripciones, jerarquía de encabezados, enlaces internos, imágenes, tarjetas sociales y experiencia móvil.
- **Datos estructurados:** JSON-LD, entidades, relaciones y esquemas aplicables al tipo de página.
- **Contenido y confianza:** respuestas fáciles de extraer, hechos verificables, actualidad, autoría y señales E-E-A-T.
- **Preparación para IA:** acceso de robots de consulta, elegibilidad en buscadores, estructura de respuestas y controles utilizables por agentes.
- **Casos especializados:** comercio electrónico, negocios locales e idiomas. Los controles se activan cuando corresponden; un blog no necesita comportarse como una tienda.

Las referencias incluyen tarjetas de plataformas y detalles de los módulos. Pide profundizar en un hallazgo para ver su evidencia y cómo reproducirlo; no necesitas memorizar las opciones del motor.

## Cómo interpretar las dos notas

Cada eje se informa de 0 a 100 y con banda A–F cuando hay evidencia suficiente. **No se promedian**. Una falla grave y establecida puede limitar la nota; las hipótesis de impacto incierto no reciben el mismo tratamiento. Una muestra escasa debe figurar como provisional y un eje sin observaciones puntuables como `unscored`.

Comprueba siempre cobertura, páginas muestreadas, entorno y confianza. `needs_api` indica que falta una fuente de datos; `manual_review`, que hace falta revisión humana. Ninguna de las dos significa «todo bien» y quedan fuera de la puntuación. Un informe determinista por sí solo no equivale a la revisión cualitativa completa.

Ejemplo: si el informe encuentra un bloqueo de indexación, resuélvelo antes de dedicar tiempo a pequeños ajustes de texto. Si el problema es una afirmación sin fuentes, proporciona documentación real; la herramienta no debe inventarla para subir la nota.

## Visibilidad en IA sin promesas

El resultado mide preparación y señales observables, no garantiza que ChatGPT, Claude, Gemini o Perplexity citen tu sitio. Distingue robots de entrenamiento de robots de búsqueda antes de decidir permisos. No cambies robots.txt para permitir todo sin entender qué acceso deseas dar.

Los archivos como llms.txt se pueden examinar o proponer, pero tienen peso cero en la nota. Una búsqueda de prueba muestra presencia en resultados web; no demuestra una cita en una respuesta de IA. Los datos importados de Search Console también deben identificarse con su origen y límites.

## Herramientas opcionales

El nivel básico usa scripts Node sin dependencias de npm. Un navegador compatible permite inspeccionar HTML después de ejecutar JavaScript. PageSpeed/CrUX puede aportar datos de campo para rendimiento; una medición de laboratorio no equivale a datos de usuarios reales. Exportaciones o conectores de Search Console añaden contexto cuando existen. Todo lo no medido debe quedar marcado como pendiente.

## Correcciones: primero revisas la propuesta

Auditar, puntuar y comparar no modifica la web. Los informes sí se guardan fuera del proyecto. Para corregir pide un plan desde el informe persistido y revisa el diff, el destino y si el cambio sería local, preparado o visible en producción.

**AUTO** agrupa cambios técnicos aditivos verificables. **PROPOSED** incluye cambios con criterio editorial y requiere aceptación por elemento. **ADVISORY** entrega recomendaciones que no se escriben, como estrategia de rendimiento, enlaces externos o reescrituras amplias. «Automático» no significa autorizado sin tu confirmación.

El motor conserva tickets de confirmación de un uso, copias de respaldo, verificación e instrucciones de restauración. No modifica secretos, claves, .git ni lockfiles. Con cambios ajenos pendientes debe detenerse para revisarlos. Volver a ejecutar un arreglo debe evitar duplicados. Una caché sin refrescar se declara pendiente, no corregida.

### Plataformas y publicación

HTML estático tiene un adaptador local. Los adaptadores de Shopify, WordPress, Webflow, Wix, Ghost, HubSpot, BigCommerce y frameworks están marcados beta y necesitan comprobarse en tu entorno. Algunas plataformas solo admiten instrucciones manuales. Si una API actúa directamente sobre contenido público, debe indicarlo antes de confirmar. No se instalan conectores ni se solicitan credenciales como parte de la instalación básica.

Publicar y restaurar son operaciones distintas de preparar un plan: cada una necesita confirmación sobre el destino y la operación concretos. Una corrección del código local no demuestra que la web publicada ya cambió.

### Protección en Codex

Los hooks y las listas de herramientas de Claude no se activan automáticamente en Codex. Esta edición conserva los guards y los controles internos de los adaptadores, y adapta el procedimiento para las herramientas de Codex. Las instrucciones de solo lectura no son un aislamiento técnico del proceso. Codex debe verificar destinos, usar los adaptadores y esperar la confirmación de cada cambio; no debe sustituirlos por escrituras directas. La activación real y la integración con proveedores se comprueban en tu instalación.

## Dónde quedan los resultados

Cada ejecución guarda páginas adquiridas, perfil, hallazgos, report.json y report.md. En Codex el puente usa `~/.mister-seo/runs` salvo que configures MISTER_SEO_DATA. Claude usa el directorio de datos de su plugin. Conserva la ruta que muestra el informe para volver a puntuar, comparar o preparar arreglos. Los respaldos y tickets se guardan en el área de datos correspondiente.

## Si algo falla

- **La skill no aparece:** abre una sesión nueva y comprueba la carpeta final o la carga del plugin. Evita una carpeta duplicada `mister-seo/mister-seo` dentro de la ruta de skills.
- **Node no está disponible:** instala una versión compatible por los medios oficiales. Una revisión solo conversacional debe declararse limitada; no equivale al motor medido.
- **No puede entrar al sitio:** revisa URL, red, permisos y protección del entorno. No atribuyas al SEO un error de acceso del asistente.
- **Hay muchos pendientes:** revisa qué fuente falta. No conectes herramientas por rutina si no necesitas esa medición.
- **Las notas cambiaron:** comprueba que ambos informes usen el mismo muestreo, motor, entorno y fuentes. Una comparación desigual puede engañar.
- **Quieres actualizar:** guarda tus informes, compara las versiones y prueba una copia nueva antes de sustituir la anterior. Para quitarla elimina solo la instalación identificada o retira el plugin desde su gestor; conserva resultados y respaldos si los necesitas.

## Qué está comprobado

La entrega incluye el motor completo y pruebas sintéticas ejecutables. Eso no prueba la activación en cada instalación ni el funcionamiento de cuentas reales de proveedores. Comprueba tu primer informe antes de autorizar cambios. El paquete conserva sus avisos legales en LICENSE y NOTICE.
