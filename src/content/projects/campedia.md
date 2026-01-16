---
title: "Campedia"
description: "A mobile application for renting camping equipment, developed with Flutter, connecting to a FastAPI backend for data and image serving."
tags: ["Mobile App"]
technologies: ["Flutter", "Dart", "FastAPI", "Python", "Local MySQL (for backend)", "RESTful APIs"]
thumbnail: "/projects/campedia/thumbnail.jpg"
githubRepo: "https://github.com/kiy4h/campedia"
order: 3
---

## Project Overview


![Mobile App Login Screen](https://placehold.co/400x800/4A4A8A/E0E0F0?text=App+Login)
*The login screen of the mobile rental application.*

![Mobile App Equipment List](https://placehold.co/400x800/4A4A8A/E0E0F0?text=App+Equipment)
*Browse available camping equipment within the app.*

This mobile application was developed for a college course on Visual Mobile App Programming. It serves as a companion to the web-based rental system, allowing users to browse, select, and rent camping equipment directly from their smartphones. A key aspect of this project was establishing robust communication between the mobile frontend and a custom web service backend.

### My Role & Key Contributions

My primary responsibilities in this project included:
* **Mobile App Development (Flutter):** Designed and implemented the entire mobile application using **Flutter**, focusing on a responsive and intuitive user interface across different screen sizes.
* **Web Service Integration:** Developed the client-side logic in Flutter to consume a custom **RESTful API** built with **FastAPI**, enabling seamless data exchange for equipment listings, user profiles, and rental transactions.
* **Image Handling via API:** Successfully implemented the functionality to serve images (e.g., equipment photos) through the FastAPI endpoint, ensuring they were correctly displayed within the mobile application. This involved understanding image serialization and deserialization across the network.
* **Local Backend Setup:** Managed a local MySQL database instance for the FastAPI backend, simulating a production environment for development and testing purposes.
* **Frontend-Backend Communication:** Gained significant experience in structuring mobile applications to effectively communicate with web services, handling asynchronous operations, data parsing, and error management.

### Technical Challenges & Solutions

A core challenge was ensuring smooth and efficient communication between the Flutter frontend and the FastAPI backend, especially concerning image data.
* **Asynchronous Data Fetching:** Implemented `FutureBuilder` and `StreamBuilder` patterns in Flutter to handle asynchronous data fetching from the FastAPI endpoint, providing a smooth user experience without UI freezes.
* **Image Serialization/Deserialization:** Addressed the challenge of efficiently sending and receiving image data via the API. This involved understanding how to encode images on the server-side (FastAPI) and decode/display them correctly on the Flutter client.
* **Error Handling:** Implemented robust error handling for network requests, providing informative feedback to the user in case of API failures or connectivity issues.

### Impact & Learnings

This project provided invaluable experience in:
* **Flutter Development:** Solidified my skills in building cross-platform mobile applications with Flutter, including UI/UX design, state management, and navigation.
* **API Consumption:** Mastered the process of connecting mobile applications to web services, understanding HTTP requests, JSON parsing, and data synchronization.
* **FastAPI Backend Development:** Gained practical experience in building lightweight and high-performance RESTful APIs using FastAPI.
* **Frontend-Backend Synergy:** A holistic understanding of how mobile frontends and web service backends interact to deliver a complete application experience.
