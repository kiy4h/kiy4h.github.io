---
title: "Goose Attack on Restaurant Game"
description: "A 2D game developed in Java applying the Model-View-Presenter (MVP) architectural pattern for clear separation of concerns."
tags: ["Game"]
technologies: ["Java", "Object-Oriented Programming", "Game Development"]
thumbnail: "/projects/goose-attack-on-restaurant/thumbnail.png"
order: 4
---

## Project Overview

<div class="aspect-video">
  <iframe class="w-full h-full" src="https://www.youtube.com/embed/RzzjXkOlHsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

This project involved the development of a 2D "plate-collecting goose" game using **Java**. Beyond the gameplay mechanics, a core objective was to implement the **Model-View-Presenter (MVP) architectural pattern**, demonstrating a strong understanding of software design principles and clean code practices.

### My Role & Key Contributions

My primary role was the design and implementation of the game, with a strong focus on architectural integrity:
* **Game Logic Development:** Implemented all core game mechanics, including goose movement, plate generation, collision detection, scoring, and game state management in Java.
* **MVP Pattern Implementation:** Architected the game using the **Model-View-Presenter** pattern.
    * **Model:** Handled game data and business logic (e.g., goose position, plate states, score).
    * **View:** Managed the graphical representation and user interface (rendering game elements).
    * **Presenter:** Acted as an intermediary, handling user input, updating the Model, and instructing the View to render changes. This ensured a **clean separation of concerns**, making the codebase more modular and testable.
* **Object-Oriented Design:** Utilized Java's object-oriented features to create well-defined classes for game entities (Goose, Plate, GameState, etc.), promoting code reusability and maintainability.

### Technical Challenges & Solutions

Implementing the MVP pattern effectively in a game context presented interesting challenges:
* **Decoupling Components:** Ensuring that the Model, View, and Presenter were truly independent and communicated only through defined interfaces. This required careful design of event handling and data flow.
* **Game Loop Integration:** Integrating the MVP pattern within a continuous game loop, where updates to the Model (e.g., goose movement) needed to be reflected in the View via the Presenter in real-time.
* **Input Handling:** Designing a robust input handling system that the Presenter could interpret and translate into Model updates, without the View directly interacting with the Model.

### Impact & Learnings

This project was instrumental in deepening my understanding of:
* **Software Design Patterns:** Practical application and benefits of the **Model-View-Presenter (MVP)** pattern in a real-world application, emphasizing modularity, testability, and maintainability.
* **Java Game Development:** Hands-on experience with fundamental 2D game development concepts in Java.
* **Object-Oriented Programming (OOP):** Reinforcement of advanced OOP principles like encapsulation, inheritance, and polymorphism in a complex system.
* **Clean Architecture:** The importance of structuring code for clarity and future scalability, even in smaller projects.
