---
title: Build Your AI Assistant for Your Personal Brand (and reclaim your time) 
description: Learn how to build a custom AI agent that writes like you, keeps your voice, and helps you stay consistent on LinkedIn
pubDate: 2025-08-07 
heroImage: https://6dxqfoy4g1.ufs.sh/f/9cuWqzvE7f2SQaW9SallQ9eMJ2xwBpcHmFyjUfizRI1KbLE8
categories:
  - AI
tags:
  - Productivity 
  - Linkedin
---

If you're not using artificial intelligence to automate tasks,  
boost your productivity, and delegate what doesn't require 100% of your attention,  
you're falling behind.

That simple.

The key concept you need to understand to stay in the game is  
**AI agents**.

## What *really* is an AI agent? 🤖

Picture a specialist, an ally trained by you, who’s dedicated to a single task  
and executes it flawlessly, with the quality you demand, in your voice,  
your way of doing things, and delivering excellent results, EVERY SINGLE TIME.

That’s an AI agent. It’s not just a tool, it’s an extension of your capabilities,  
a multiplier for your skills.

## Why do you NEED one? 🎯

Chances are, if you're reading this post, you came from my LinkedIn page.  
I've often wanted to publish content about my experiences,  
the things I’m passionate about, what I learn every day, new technologies, etc.

I wanted to build my personal brand,  
but obstacles kept showing up: not enough time  
to format what I wanted to share, low energy to create something polished,  
and no consistency in how I presented my content.

Consistency is the most valuable thing when building a personal brand.  
Maintaining that presence online is tough.

This is where an AI assistant flips the game.  
Assistants have always existed—many people with strong personal brands and  
online presence have whole teams behind them.

Now you can have that kind of support—easily, affordably, and personalized.

Imagine a teammate that:
- Knows your ideas and how you think.
- Replicates your voice and tone authentically and precisely.
- Executes tasks with the quality and care you would.
- Handles time-consuming work at super speed.

This frees you up to focus on what NO ONE else can do:  
deep work, strategy, ideas that require your full mental capacity.

Think like the CEO of a company.

Their focus is 100% on decision-making and long-term vision.  
They don’t get bogged down in daily tasks—they delegate them to their team.

Your AI assistant *is* your team. It lets you operate at the highest level.

## 📝 How to build your own AI assistant

> IMPORTANT NOTE  
> Before we begin, let me clarify that this agent is tailored to my use case:  
> a LinkedIn assistant that helps me maintain consistency in my personal brand,  
> and lets me focus on the IDEAS rather than the post structure or  
> the exact words to beat the algorithm.

You don’t need to copy this guide word-for-word.  
Use it as a blueprint and adapt it to your case,  
create a system that fits your style, your voice, your goals.  
What matters is that the assistant reflects **your unique way of doing things**.

> ADAPT THIS SYSTEM TO ANY TASK  
> Although this example focuses on LinkedIn, you can use the same structure  
> to create an agent that helps you write emails, document projects, generate  
> video ideas and whatever your use case is, the results will be just as powerful.

🚀 Now let me show you how to build it!

### Step 1: Extract your digital DNA (Context Profile) 🗺️

For your assistant to work like you, it first needs to deeply understand  
who you are, your profile, your voice, your interests.

The Context Profile is exactly that: a JSON document that acts like the DNA  
of your identity, values, communication style, habits, goals—  
basically, the brain of your AI agent.

#### How to get your Context Profile?

There are two ways, and both are easy:

If you've been using ChatGPT for a while, here’s the good news:  
ChatGPT already knows you. As long as you have "memory" enabled,  
it has been silently collecting information about you through your conversations.

If that’s not the case, no problem, just start chatting with your favorite  
AI tool and you can generate your profile through the conversation.

For both cases, copy and paste the prompt below.

---
**Prompt to create your Context Profile**

```md
Imagine you're my personal identity architect. Your mission is to design a **detailed map of who I am and how I operate**, translating my essence into a complete, well-structured JSON profile.

**Your Process:**
1.  **Deep Exploration:** Silently review all our conversation history and memory to identify and extract my most relevant information.
2.  **Map Construction:** Use your findings to fill out the provided JSON template. Each field should contain **one or two expressive and well-written sentences**, avoiding short phrases or bullet points.
3.  **Key Questions:** If any field is unclear or incomplete, ask me direct and concise questions so we can fill it together.
4.  **Final Delivery:** Provide ONLY the validated JSON code—no intro text, no explanations, no extra formatting. Just raw JSON.

**Template to Complete:**

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

**Important Note:**  
If you don’t have enough context about me (because this is our first time talking or memory is off), adjust your approach. Start a conversation, ask the necessary questions to collect information, and then generate the profile.
```

---

You should get a solid result from this.
Read it carefully. Does it feel like you?
If not, iterate. Ask the AI to tweak certain sections or ask more questions.
The goal is for this Context Profile to truly reflect who you are,
you should feel like it’s describing you.
(It’s really important)

### Step 2: Build your assistant’s main prompt

Now that you have your Context Profile, you need to craft the prompt
that will power your assistant to generate content that sounds like you,
and reflects your unique ideas, tone, and style.

This is the template I use—just replace the marked sections with your own info.

```md

[CONTEXT PROFILE]

{{Paste here the Context Profile you got from the previous prompt}}

[CONTEXT PROFILE]

[CONTEXT PROMPT]

{{📝 NOTE - THIS PROMPT SHOULD BE TAILORED TO THE TASK YOU WANT THE ASSISTANT TO PERFORM 👇}}
You are a senior ghostwriter for LinkedIn, specialized in writing short, impactful, and value-packed posts that perfectly reflect the user’s unique voice and style. Your specialty is writing emotional posts, with clear narrative and structure, aimed at non-technical business owners interested in AI, productivity, and software automation.

Your mission:

- Write posts with short sentences and strategic line breaks.
- Highlight key ideas in ALL CAPS for rhythm and impact.
- Use a direct, personal, and fresh tone with original and authentic expressions.
- Repeat key ideas with variation to reinforce them without sounding robotic.
- End with a clear call-to-action that hooks the reader.
- Use emojis sparingly (3 to 8 per post), placing them in key emotional moments.
- Choose emojis that fit the tone and context, avoiding repetition.

You’re also obsessed with LinkedIn conversions and know the psychological triggers  
that make B2B decision-makers stop scrolling and take action,  
especially in the AI and automation space.

Study and emulate the rhythm, format, and emotional flow of these examples,  
but write completely original content:

[CONTEXT PROMPT]

[EXAMPLES]
{{Place at least 5 examples of the type of results you’re looking for,
in my case, 5 LinkedIn post examples.}}
[EXAMPLES]

[USAGE EXAMPLE]
INPUT: {{📝 Describe here the kind of input you’d give your assistant}}  
OUTPUT: {{📝 Refer to one of the examples above as the desired result of that input}}

[USAGE EXAMPLE]

```

### Step 3: Use it, tweak it, evolve it 🚀

Now you have a prompt you can use as the base for your AI agent.
I recommend turning this into a Custom GPT
or a Custom Gem if you’re using Google Gemini.
That way, you’ll have a personalized assistant that’s trained for this specific task.

Alternatively, if your AI tool doesn’t support custom agents,
you can just paste this prompt at the start of a conversation.
That will give the AI full context during your interaction.
(Still, I’d recommend the custom version for better long-term use.)

### Keep improving your assistant

You now have a solid assistant—but this is just the beginning.
- Use it regularly. The more you use it, the better you’ll get at refining the 
- Tweak the Context Profile as you learn more about yourself or your brand.
- Update the "EXAMPLES" with your best-performing results to keep leveling up.

I hope this guide helps you build your own personal AI assistant.
AI is here to stay—know how to leverage it.
