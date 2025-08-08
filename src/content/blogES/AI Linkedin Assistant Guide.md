---
title: Crea tu Asistente de AI para tu marca personal (y recupera tiempo) 
description: Aprende a construir un agente de inteligencia artificial personalizado que escriba como tu, mantenga tu voz y te ayude a ser constante en Linkedin
pubDate: 2025-08-07 
heroImage: https://6dxqfoy4g1.ufs.sh/f/9cuWqzvE7f2SQaW9SallQ9eMJ2xwBpcHmFyjUfizRI1KbLE8
categories:
  - AI
tags:
  - Productivity 
  - Linkedin
---

Si no estás usando la inteligencia artificial para automatizar tareas,
aumentar tu productividad y delegar lo que no exige el 100% de tu atención,
te estás quedando atrás.

Así de simple.

El concepto clave que necesitas entender para no quedarte fuera del juego son
los **agentes de inteligencia artificial**.

## Que es (realmente) un agente de AI? 🤖

Imagina un especialista, un aliado entrenado por ti, que se dedica a una sola tarea
y la ejecuta a la perfeccion, con la calidad que exiges, con tu voz, con tu estilo de
hacer las cosas y resultados excelentes, SIEMPRE.

Eso es un agente de AI, no es una simple herramienta, es una extension de tus
capacidades, un potenciador de tus habilidades.

## Porque NECESITAS uno? 🎯

Muy probablemente si estas leyendo este post vengas de mi publicacion en Linkedin, 
muchas veces habia querido publicar contenido sobre mis experiencias, cosas que me 
apasionan, lo que voy aprendiendo dia con dia, tecnologias nuevas, etc.

Buscaba construir mi marca personal, pero venian los obstaculos, falta de tiempo
para darle el formato adecuado a lo que queria compartir, poca energia para crear  
algo elaborado, falta de consistencia de marca en el contenido que compartia.

La constancia es lo mas valioso para construir una marca personal y mantener
esa presencia en internet es algo dificil de mantener.

Aqui es donde un asistente de AI cambia todo el juego, los asistentes toda la vida
han existido, muchas personas que tienen su marca personal y mantienen una presencia 
en internet, tienen a todo un equipo detras.

Ahora tu puedes contar con estos aliados de manera sencilla, economica y personalizada.

Imagina un compañero que:
- Conoce tus ideas y forma de pensar.
- Replica tu voz y tu tono de manera autentica y precisa.
- Ejecuta tareas con la calidad y cuidado que tu le pondrias.
- Realiza tareas que consumen mucho tiempo con super velocidad.

Esto te libera para que puedas tener foco en lo que NADIE mas puede hacer, el 
trabajo profundo, la estrategia, las ideas que requiren toda tu capacidad mental.

Piénsalo como el CEO de una empresa.

Su foco está 100% en la toma de decisiones y la visión a largo plazo y no se pierden
en la ejecucion de las tareas del dia a dia, esto lo delegan a su equipo.

Tu asistente de IA es tu equipo. Te permite operar al más alto nivel.


## 📝 Como construir tu propio asistente AI

> NOTA IMPORTANTE
> Antes de comenzar me gustaria aclarar que este agente esta muy enfocado a mi
> caso de uso, un asistente para mi LinkedIn que mantenga una consistencia en mi marca personal, y
> me permite enfocarme en las IDEAS, mas que en la estructura del post o que 
> palabras exactas para el algoritmo.

No necesitas copiar esta guia palabra por palabra, la idea es que tomes esta guia
y la adaptes a tu caso de uso para crear un sistema que se ajuste a tu estilo,
tu voz y tus objetivos. 
Lo esencial es que el asistente refleje **tu forma unica de hacer las cosas**.


>  ADAPTA ESTE SISTEMA A CUALQUIER TAREA 
> Aunque este ejemplo este enfocado a LinkedIn, puedes usar esta misma estructura
> para crear un agente que te ayude con tu caso de uso, escribir correos, documentar 
> proyectos, generar ideas para videos, lo que sea, los resultados seran igual de sorprendentes


🚀 Ahora si te muestro a construirlo! 

### Paso 1: Extraer tu ADN digital (Context Profile)  🗺️

Para que tu asistente pueda trabajar como tú, primero necesita conocer profundamente
quien eres, tu perfil, tu voz, tus intereses.

El Context Profile es exactamente eso, un documento JSON que funciona como el ADN
de tu identidad, valores, estilo de comunicacion, habitos, metas, es practicamente
el cerebro de tu agente de AI. 

#### Como obtener tu Context Profile?

Existen dos caminos, ambos son muy sencillos:

Si ya tienes tiempo utilizando ChatGPT como inteligencia artificial te tengo una
buena noticia ChatGPT ya te conoce, por lo que es sencillo obtener tu perfil,
solo necesitas tener la funcionalidad de "memoria" activada y ChatGPT durante todo
este tiempo estuvo recolectando informacion sobre ti y conociendote poco a poco. 

Si este no es tu caso, no te preocupes igual con cualquier inteligencia artificial
de tu preferencia puedes generarlo conversando con ella.

Para ambos casos, copia y pega el prompt que te dejo aca abajo.

---
**Prompt para crear el Context Profile**

```md
Imagina que eres mi arquitecto de identidad personal. Tu misión es diseñar un **mapa detallado de quién soy y cómo opero**, traduciendo mi esencia en un perfil JSON completo y bien estructurado.

**Tu Proceso:**
1.  **Exploración Profunda:** Revisa en silencio toda nuestra conversación y la memoria que tienes de mí para identificar y extraer mi información más relevante.
2.  **Construcción del Mapa:** Usa lo aprendido para rellenar la plantilla JSON que te proporciono. Cada campo debe contener **una o dos oraciones expresivas y bien redactadas**, evitando frases cortas o viñetas.
3.  **Preguntas Clave:** Si algún campo queda vacío o necesita más claridad, hazme preguntas directas y concisas para completarlo juntos.
4.  **Entrega Final:** Proporcióname únicamente el código JSON validado, sin texto introductorio, explicaciones o marcas de formato. Solo el JSON puro.

**Esquema del Mapa a Rellenar:**

{
 "identity": {
   "core_philosophy": "",
   "defining_backstory": "",
   "key_values": [],
   "decision_style": "",
   "emotional_framework": "",
   "personal_drivers": []
 },
 "lifestyle_and_health": {
   "health_philosophy": "",
   "current_practices": [],
   "aesthetic_preferences": ""
 },
 "brand_voice": {
   "tone_and_voice": "",
   "content_preferences": [],
   "visual_preferences": ""
 },
 "professional_focus": {
   "current_ventures": "",
   "strategic_orientation": "",
   "ideal_client": ""
 },
 "operating_principles": {
   "execution_style": "",
   "learning_method": "",
   "focus_rituals": "",
   "team_culture": ""
 },
 "creative_process": {
   "ideation_habits": "",
   "preferred_mediums": [],
   "collaboration_style": ""
 },
 "future_aspirations": {
   "personal_vision": "",
   "key_milestones": []
 },
 "story_bank": []
}

**Nota Importante:**
Si no tienes suficiente contexto sobre mí (porque es nuestra primera vez hablando o no tienes memoria), ajusta tu enfoque. Inicia una conversación, hazme las preguntas necesarias para recopilar la información y luego genera el perfil.
```

---

Con esto la AI te debe entregar un resultado bastante bueno, leelo con calma,
te sientes identificado? Si no es asi, itera, pide a la AI que ajuste secciones,
o te realize mas preguntas, el objetivo es que este Context Profile realmente
refleje tu identidad y al leerlo sientas que estan describiendote.
(Es bastante importante)


### Paso 2: Construye el prompt principal para tu asistente 

Ya con tu Context Profile en mano, debes armar el prompt que alimentará a tu
asistente para crear contenido que suene a ti, que refleje tus ideas, tono y estilo únicos.

Este es el template que yo uso, simplemente reemplaza las secciones marcadas 
con tu informacion.


```md
[CONTEXT PROFILE]

{{Aquí colocarás el Context Profile que obtuviste con el prompt anterior}}

[CONTEXT PROFILE]

[CONTEXT PROMPT]

{{📝 NOTA - ESTE PROMPT DEBE SER ENFOCADO EN LA TAREA QUE QUIERES REALIZAR CON TU ASISTENTE 👇}}
Eres un ghostwriter senior para LinkedIn, especializado en crear posts cortos, impactantes y llenos de valor, que reflejan perfectamente la voz y estilo único del usuario. Tu especialidad es escribir posts emocionales, con narrativa y estructura clara, enfocados en dueños de negocios no técnicos interesados en IA, productividad y automatización de software.

Tu misión:

- Escribe posts con frases cortas, con pausas estratégicas (saltos de línea).
- Resalta ideas clave en MAYÚSCULAS para impacto y ritmo.
- Usa un tono directo, personal y fresco, con expresiones originales y auténticas.
- Repite conceptos clave con variaciones para reforzar sin sonar robótico.
- Termina con un llamado a la acción claro que enganche al lector.
- Usa emojis de forma equilibrada (3 a 8 por post), colocándolos en puntos emocionales clave.
- Elige emojis que encajen con el contexto y tono, evitando repeticiones constantes.

También eres un obsesivo de la conversión en LinkedIn que conoce los disparadores psicológicos que hacen que tomadores de decisiones B2B detengan su scroll y actúen, especialmente en el espacio de IA y automatización.

Estudia y emula el ritmo, formato y flujo emocional de estos ejemplos, pero escribe contenido completamente original:

[CONTEXT PROMPT]

[EXAMPLES]
{{Aca debes colocar minimo 5 ejemplos de los resultados que buscas, en mi caso 5
publicaciones de ejemplo}}
[EXAMPLES]

[USAGE EXAMPLE]
INPUT: {{📝 Describe aqui el input que le darias a tu asistente}}
OUTPUT: {{📝 Haz referencia a uno de los ejemplos que proporcionaste como resultado esperado de ese input}}

[USAGE EXAMPLE]

```


### Paso 3: Usa, ajusta y evoluciona tu asistente 🚀

Ahora cuentas con un prompt que puedes utilizar como base para tu agente de
inteligencia artificial, este prompt te recomiendo utilizarlo como un Custom GPT
o un Custom Gem si utilizas Google Gemini, asi tendras un asistente personalizado
que estara entrenado para esta tarea en especifico.

De igual manera si prefieres alguna otra inteligencia artificial que no soporte
estos agentes personalizados puedes pegarlo al iniciar una conversacion 
con tu AI favorita y asi contara con el contexto durante la conversacion sobre 
la tarea que va a desarrollar, aunque te recomiendo mas la opcion anterior. 

### A mejorar cada vez mas tu asistente

Ya tienes un asistente bastante bueno, pero puede ser aun mejor, esto solo es el
comienzo.

- Usalo constantemente. Mientras mas lo utilizes mejor entenderas como obtener los  
resultados que buscas.
- Ajusta el **Context Profile** cada vez que aprendas algo nuevo sobre ti o tu marca.
- Actualiza los "EXAMPLES" con los mejores resultados para ir mejorandolos cada vez mas.

Espero que esta guia te sea de utilidad y hallas logrado construir tu asistente de AI
personal, la AI llego para quedarse y hay que saber como utilizar estas herramientas.
