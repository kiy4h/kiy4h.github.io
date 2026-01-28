---
title: "Static Profiling Website"
description: "A static profiling website hosted on Netlify with an AI chatbot feature powered by Gemini API via Cloudflare Worker."
tags: ["Website"]
myRole: ["Backend Developer", "AI Developer"]
technologies: ["JavaScript", "Cloudflare Workers", "Gemini API", "HTML", "CSS", "Netlify"]
thumbnail: "/projects/static-profiling-website/thumbnail.png" 
aesthetic: "https://mekarsarijember.netlify.app/assets/img/hero-handshake.jpeg" 
liveDemo: https://mekarsarijember.netlify.app/
order: 1
---

![Mekarsari Website Preview](/projects/static-profiling-website/web.png)
*A preview of the chatbot interface on the profiling website.*


## Project Overview
This project was a personal initiative to create a modern, static profiling website that not only showcases my skills but also integrates cutting-edge AI capabilities. The core feature is an interactive chatbot, allowing visitors to ask questions about my profile, which are answered by the Google Gemini API.

## My Role & Key Contributions
This is a team project where I took on the roles of Backend Developer and AI Developer. My key contributions included:

- **Backend Integration (Cloudflare Worker)**<br> Implemented a Cloudflare Worker as a secure and efficient intermediary between the static website and the Gemini API. This worker handled API key management and request routing, ensuring no sensitive information was exposed on the client-side.
- **AI Chatbot Logic**<br> Developed the JavaScript logic for the chatbot, managing user input, API requests to the Cloudflare Worker, and displaying AI-generated responses in a conversational interface.
- **Deployment & Optimization**<br> Successfully deployed the static site on Netlify and the Cloudflare Worker on Cloudflare's edge network, ensuring fast global access and low latency for the chatbot.

## Technical Challenges & Solutions
One of the main challenges was securely integrating the Gemini API without exposing the API key client-side. This was elegantly solved by using a Cloudflare Worker as a proxy. The worker received the user's query from the frontend, made a secure server-side request to the Gemini API, and returned the AI's response to the client. This approach also allowed for potential rate limiting and additional security measures at the edge.Another area was optimizing the static site for performance, which was achieved through efficient asset loading and Netlify's CDN. I also focused on creating a smooth, responsive design that adapted well to various screen sizes.

## Impact & Learnings
This project significantly enhanced my understanding of:

- **Serverless Functions**<br> Practical application of Cloudflare Workers for backend logic at the edge.
- **API Integration**<br> Secure and efficient consumption of external APIs (Google Gemini API).
- **Static Site Deployment**<br> Best practices for deploying and optimizing static websites on platforms like Netlify.
