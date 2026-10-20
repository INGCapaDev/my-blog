---
translationKey: ai-development-system
title: "Construí mi propio sistema de desarrollo con IA para no perder el control"
description: "Cómo pasé de acumular prompts y reglas en AGENTS.md a un workflow con skills reutilizables, evidencia y decisiones humanas explícitas."
pubDate: 2026-10-19
categories:
  - AI
  - Development
tags:
  - AI
  - Agents
  - Workflow
  - Human-in-the-Loop
---

Durante un tiempo pensé que trabajar mejor con IA dependía de encontrar el prompt perfecto.

No era eso.

El problema no era que la IA no pudiera generar código, investigar una librería o proponer una solución. El problema aparecía cuando la IA empezaba a decidir demasiado: qué era importante, qué compromiso aceptar, cuándo algo estaba realmente terminado.

Ahí entendí que la variable importante no era la calidad del prompt.

Era preservar el control humano sobre las decisiones.

La IA puede acelerar la ejecución de forma brutal. Pero velocidad sin criterio también acelera LOS ERRORES, LA DEUDA TÉCNICA Y LAS DECISIONES QUE NADIE REVISÓ CON SUFICIENTE CONTEXTO.

La regla terminó siendo muy simple:

> La IA ejecuta. El humano dirige.

Eso es **Human in the Loop** para mí. No significa revisar cada carácter que escribe un modelo ni convertir cada tarea en burocracia. Significa definir con claridad qué puede delegarse y qué decisiones deben seguir teniendo dueño.

## El origen: de las instrucciones sueltas a un sistema

Este workflow no nació de una arquitectura perfecta. Nació de repetir las mismas instrucciones una y otra vez.

Políticas no negociables. Patrones de código. Reglas de calidad. Convenciones del proyecto. Preferencias sobre cómo investigar, implementar y validar cambios.

Al principio, todo eso vivía en un único archivo: [`AGENTS.md`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/AGENTS.md).

Era útil, pero también revelaba un problema: un archivo de instrucciones puede orientar a un agente, pero no sustituye un proceso. Tener reglas no garantiza que alguien las aplique en el momento correcto, con el contexto correcto y con evidencia suficiente.

Dos referencias fueron especialmente importantes en esa evolución.

- [Gentle AI, de Alan Buscaglia](https://github.com/Gentleman-Programming/gentle-ai), me ayudó a entender el valor de un orquestador, la delegación con contexto fresco y la memoria persistente con Engram.
- El enfoque de [skills componibles de Matt Pocock](https://github.com/mattpocock/skills) cambió mi manera de pensar las instrucciones: pequeñas, enfocadas, con responsabilidades claras y cargadas solo cuando hacen falta.

Ahí empezó lo que hoy es [`ingcapadev-ai-workflow`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/). En ese punto era solo una [skill de planning](https://github.com/INGCapaDev/ingcapadev-ai-workflow/tree/main/skills/planning), construida alrededor del control humano en las decisiones importantes y la planeación del trabajo en tareas pequeñas y fáciles de revisar.

Su núcleo es deliberadamente sencillo: aclarar antes de asumir, dividir el trabajo en tareas pequeñas, mantener el contexto y el avance del trabajo planificado en `PLAN.md` y colocar puntos de revisión humana donde realmente importan.

No se trata de poner fricción por ponerla. Se trata de no confundir una respuesta convincente con una decisión correcta.

## El siguiente paso: INGCapaDev AI Workflow

Después, ese flujo evolucionó en [INGCapaDev AI Workflow](https://ai.ingcapadev.com): mi sistema personal de desarrollo asistido por IA sobre [OpenCode](https://opencode.ai).

No pretende ser el sistema más sofisticado del mundo. Pretende resolver mi problema: trabajar más rápido sin entregar el volante.

El centro del sistema es [Capa, el orquestador](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/orchestrator.md). Investiga, resuelve qué skills necesita cada tarea, puede implementar y verificar directamente, y conserva el estado del plan cuando lo hay. No delega por defecto: pide ayuda cuando aporta contexto fresco, especialización o una ventaja concreta.

Cuando hace falta, se apoya en estos roles:

- `explore`: es el agente nativo de exploración de OpenCode; investiga el código en modo lectura y encuentra patrones, dependencias y riesgos.
- [`capa-worker`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/worker.md): implementa una tarea o parte acotada del trabajo autorizado, sin avanzar el plan por su cuenta.
- [`sub-verify`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/checker.md): reúne evidencia independiente en modo lectura cuando se solicita o se aprueba; es una ayuda opcional, no una etapa obligatoria.
- [`sub-review-standards`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/review-standards.md): revisa las reglas documentadas, la calidad y las convenciones.
- [`sub-review-plan`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/prompts/capa/review-plan.md): revisa que el cambio corresponda al plan aprobado y no se haya expandido de alcance.

Esta distinción es importante. Implementar, verificar y revisar no son lo mismo. Capa puede implementar y comprobar un cambio con pruebas o inspección; la revisión independiente aporta otra mirada, desde un contexto fresco. Se solicita o se aprueba cuando hace falta, y puede centrarse en estándares, conformidad con el plan o ambos. No es un trámite automático para cada cambio.

También se puede habilitar memoria persistente con [Engram](https://github.com/Gentleman-Programming/engram), para que decisiones y descubrimientos duraderos no desaparezcan al empezar una conversación nueva, sin duplicar lo que ya pertenece al plan o a la documentación del proyecto. Y, cuando una tarea depende de una librería o framework, [Context7](https://context7.com), si está configurado, aporta documentación actualizada en vez de confiar ciegamente en conocimiento antiguo.

Pero ni la memoria ni la documentación sustituyen el juicio. Solo reducen el coste de recuperarlo.

## Comandos para mantener el flujo visible

Para un cambio pequeño y bien entendido, basta con pedírselo directamente a Capa. No hace falta un plan ni poner a trabajar a todo un equipo de agentes.

Cuando el trabajo necesita más estructura, estos son los cinco comandos principales, definidos en el directorio de [commands](https://github.com/INGCapaDev/ingcapadev-ai-workflow/tree/main/commands):

- [`/plan`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/plan.md) investiga, pone sobre la mesa las decisiones importantes y propone tareas. El plan se guarda solo después de la aprobación final; aprobarlo no autoriza todavía su ejecución.
- [`/proceed`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/proceed.md) ejecuta una sola tarea del plan aprobado, presenta el cambio con su evidencia y sus límites, y se detiene para la decisión humana.
- [`/review`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/review.md) pide una segunda opinión sobre el trabajo actual o los cambios desde un commit, en estándares, conformidad con el plan o ambos. Solo informa: no corrige ni acepta el cambio.
- [`/reslice`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/reslice.md) compara otras maneras de agrupar las tareas sin modificar el plan guardado ni el código.
- [`/improve-ai`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/improve-ai.md) examina la evidencia de la sesión y propone mejoras al workflow, sin aplicarlas por su cuenta.

También está [`/todo`](https://github.com/INGCapaDev/ingcapadev-ai-workflow/blob/main/commands/todo.md), como capacidad opcional para guardar trabajo pendiente y retomarlo cuando tenga sentido planificarlo. No es otra etapa obligatoria del flujo.

La palabra clave aquí es **aprobado**.

Una implementación con sus comprobaciones no marca la tarea planificada como terminada. Deja un cambio listo para que un humano revise el diff, la evidencia y sus límites. La aceptación humana es la que confirma que el cambio representa la decisión correcta y permite avanzar el plan.

Aprobar ese resultado acepta la tarea y se detiene ahí. Si el cambio está listo y no ha cambiado desde que se presentó, `/proceed` permite aceptarlo y ejecutar una sola tarea siguiente. Y aceptar nunca significa hacer commit, push o desplegar: eso necesita permiso aparte.

Esa distinción parece pequeña, pero cambia el sistema por completo.

Sin ella, un agente puede convertir “el código compila” en “la tarea está resuelta”. Con ella, la implementación vuelve a ocupar su lugar: evidencia para una decisión humana, no sustituto de esa decisión.

## El objetivo no es automatizarme fuera del proceso

No quiero una IA que haga todo sin preguntar. Quiero una que pueda cargar con la ejecución repetitiva, investigar rápido, aplicar un cambio acotado y mostrarme con claridad qué hizo y por qué cree que funciona.

Quiero conservar mi atención para el problema, los trade-offs y la dirección del producto.

La IA es el caballo de batalla. El humano sigue siendo el arquitecto y quien toma las decisiones.

Y, sobre todo, no busco construir el sistema objetivamente mejor. Busco construir el sistema que funciona para mí.
