---
name: mister-seo
description: Audita SEO técnico y preparación para buscadores de IA, compara informes y propone correcciones con evidencia. Usa esta skill para revisar sitios o proyectos web; aplica cambios solo cuando el usuario los pide y confirma su vista previa.
---

# Mister Seo para Codex

Conserva el motor completo y sus 34 procedimientos en `skills/`, 23 módulos de auditoría, esquemas, referencias, adaptadores y pruebas. Lee [NOTICE](NOTICE) y [LICENSE](LICENSE) para los avisos del software distribuido.

## Resolver el entorno

ROOT es la carpeta absoluta que contiene este SKILL.md. DATA es la carpeta persistente `~/.mister-seo` (o MISTER_SEO_DATA si está configurada). Resuelve ambas antes de ejecutar comandos. Nunca supongas que el directorio actual es ROOT. Node 18+ es necesario; no instales dependencias por iniciativa propia.

Usa `node "<ROOT>/mister-seo.mjs" <script> <argumentos>` como puente. Establece las variables de compatibilidad que usa el motor, sin modificar la configuración global. En los procedimientos conservados, sustituye `${CLAUDE_PLUGIN_ROOT}` por ROOT y `${CLAUDE_PLUGIN_DATA}` por DATA; son marcadores, no variables que Codex defina. No uses `/plugin`, `/reload-plugins`, `$ARGUMENTS` ni allowlists de Claude como si fueran funciones de Codex. Los argumentos son la petición real del usuario.

## Elegir el recorrido

- Auditoría: lee `skills/audit/SKILL.md`, `skills/seo-orchestrator/SKILL.md` y `references/routing.md`. Ejecuta `node "<ROOT>/mister-seo.mjs" audit <url|carpeta> --format json`. Para HTML local usa el build, no el código fuente de una SPA como si fuera HTML servido. El objetivo web requiere red; el motor no necesita claves para los chequeos estáticos.
- IA: lee `skills/geo/SKILL.md`; conserva el mismo formato de evidencia y limita la presentación al eje IA cuando corresponda.
- Puntuación: lee `skills/score/SKILL.md`; `node "<ROOT>/mister-seo.mjs" score --run <carpeta-del-informe>`.
- Comparar: lee `skills/compare/SKILL.md`; `node "<ROOT>/mister-seo.mjs" compare --baseline <runA> --against <runB>`. Conserva diferencias de cobertura, entorno y muestreo.
- Corregir: solo ante una petición explícita de correcciones, lee `skills/fix/SKILL.md`, `skills/seo-fix-apply/SKILL.md`, `agents/seo-fixer-writer.md` y las tarjetas de plataforma aplicables. Solicita confirmación de cada diff/operación concreta antes de emitir tickets de un uso. Publicar y restaurar requieren sus propias confirmaciones. No escribas desde una auditoría conversacional sin report.json.

## Completar el análisis cualitativo

El script da una primera auditoría determinista. Lee las cuatro fichas de auditor en `agents/` y los módulos que enumeran; revisa por grupos técnicos, IA, contenido y schema. Si el host permite delegación puedes usar especialistas de solo lectura; si no, realiza los cuatro grupos secuencialmente. Conserva todos los módulos y marca como pendiente lo que no puedas evaluar. No declares cobertura completa por ejecutar solamente el script. Guarda los arrays válidos bajo DATA/runs/.../agents y combina con `report --merge "agents/*.json"`. Sigue el esquema de cada hallazgo y sus comandos de reproducción. El objetivo permanece en modo lectura; solo se escriben artefactos de informe fuera del proyecto.

## Protecciones y límites del host

Codex no activa los hooks PreToolUse ni las restricciones de herramientas del plugin de Claude por copiar esta carpeta. Son instrucciones de procedimiento, no aislamiento técnico de agentes. Los adaptadores conservan tickets, backups, diff y verificación; los guards se conservan para revisión manual. Antes de una escritura local valida todos los destinos con protectedReason de scripts/guard-write.mjs y usa el adaptador local-files; no sustituyas el protocolo por escrituras directas o shell arbitrario. No toques .git, secretos, claves ni lockfiles. Revisa git status y rechaza cambios ajenos sin autorización específica. No conectes cuentas ni publiques durante una instalación o auditoría. Las credenciales se configuran fuera del chat y solo se mencionan por nombre.

Entrega dos notas independientes, cobertura, incertidumbre, muestreo, evidencia reproducible y próximos pasos. `needs_api`, `manual_review` y `unscored` nunca son aprobaciones. La preparación GEO no demuestra citas reales ni garantiza posiciones. llms.txt tiene peso cero. No inventes mediciones, fuentes ni datos de negocio.
