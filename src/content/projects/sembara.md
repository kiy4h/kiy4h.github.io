---
title: "Sembara"
description: "A cultural gamification ecosystem powered by a Serverless RAG Chatbot using Cloudflare Workers and Gemini API."
tags: ["Mobile App"]
myRole: ["AI Engineer"]
technologies: ["Cloudflare Workers", "Flutter", "Supabase","Gemini API", "JavaScript", "Dart"]
thumbnail: "/projects/sembara/thumbnail.png"
liveDemo: null
githubRepo: https://github.com/Fidhlah/BudayaGo
order: 2
---

## About this Project

<figure>
    <img src="/projects/sembara/app.jpg" alt="Sembara Mobile Application Interface" />
    <figcaption>The Sembara Mobile Application Interface.
</figure>
Indonesia is home to thousands of cultural artifacts, yet learning about them often feels disconnected from the modern digital experience. Furthermore, local cultural practitioners (artisans, performers) struggle to find economic footing in the digital age.

**Sembara** bridges this gap. We created a mobile gamification ecosystem that makes cultural literacy addictive. Users explore a virtual map, complete cultural quests, and interact with a smart AI guide. Crucially, the app connects users directly to local artisans, turning cultural appreciation into economic empowerment.

This project was selected as a **Top 50 National Finalist** in the **BudayaGo 2025** competition (Student Category).

## System Architecture
<figure>
    <img src="/projects/sembara/architecture.png" />
    <figcaption>The overall system architecture of Sembara's gamified cultural ecosystem. </figcaption>
</figure>

The Sembara ecosystem consists of three main components:
* **Application** <br> Built with **Flutter** for high-performance rendering and a seamless gamified experience on Android.
* **Database** <br> Powered by **Supabase** for real-time synchronization of player stats (EXP, Achievements) and secure authentication.
* **AI Chatbot** <br> Built on **Cloudflare Workers** to run the RAG pipeline at the edge, minimizing latency.

---

## My Role

As the **AI Engineer**, my goal was to create a chatbot that *knows* the cultural context without hallucinating, all while running with minimal latency.

The AI logic runs on **Cloudflare Workers**, The Worker handles payload construction, context injection, and API routing, effectively keeping heavy logic off the client device.
<figure>
    <img src="/projects/sembara/chatbot.jpg" alt="User Dashboard" style="height:500px;" />
    <figcaption>The AI Chatbot interface within the Sembara mobile app.</figcaption>
</figure>

To make the conversation feel natural, I implemented **Cloudflare KV (Key-Value Store)** as a high-speed, non-relational memory bank. When a user chats, the Worker pulls the chat history from KV, appends the new prompt, sends it to the AI, and then truncates & saves the updated history back to KV. This ensures that specific character personas are maintained seamlessly across sessions.


<figure>
    <img src="/projects/sembara/File-search.png" alt="User Dashboard" />
    <figcaption>The indexing and querying process of File Search in Gemini's RAG architecture.</figcaption>
</figure>

We use **Google's Gemini API**, tailored via Prompt Engineering, to maintain consistent cultural personas. To ensure accuracy, I used Gemini's new **Retrieval-Augmented Generation (RAG)** feature.
This involves offline indexing, where raw cultural documents are transformed into vector embeddings and stored in a vector database. During real-time querying, the system scans the database for relevant "chunks" of text which are fed into Gemini as context, allowing the AI to answer specific cultural questions accurately based on verified data.
