---
title: "Star-Collecting 3D Game"
description: "A 3D game developed from scratch in raw C++ using OpenGL for graphics rendering, featuring a player navigating a terrain to collect stars."
technologies: ["C++", "OpenGL", "3D Graphics", "Game Development"]
thumbnail: "/star-collecting-3d-game.png"
order: 5
---

## Project Overview

This project was a deep dive into low-level 3D graphics programming, where I developed a star-collecting 3D game from scratch using **raw C++** and the **OpenGL** library. The game features a player character navigating a procedurally generated or heightmap-based terrain, collecting stars scattered across the landscape.

### My Role & Key Contributions

As the sole developer, my responsibilities encompassed all aspects of 3D game development:
* **3D Graphics Rendering (OpenGL):** Implemented core 3D rendering pipelines using OpenGL, including:
    * **Vertex and Fragment Shaders:** Wrote custom GLSL shaders for rendering terrain, stars, and player models.
    * **Camera Control:** Developed a free-look camera system, allowing player movement and view manipulation.
    * **Lighting:** Basic lighting models to enhance visual realism.
* **Terrain Generation/Rendering:** Implemented methods to create and render a 3D terrain, potentially using heightmaps or simple procedural generation techniques.
* **Object Loading & Rendering:** Loaded and rendered 3D models for stars and the player character.
* **Collision Detection:** Developed basic collision detection between the player and stars for collection mechanics.
* **Game Loop & State Management:** Managed the main game loop, updating game state, handling input, and rendering frames efficiently.
* **Mathematics for 3D:** Applied principles of **linear algebra** (vectors, matrices, transformations) for object positioning, rotation, and camera manipulation.

### Technical Challenges & Solutions

Developing a 3D game from scratch in raw C++ and OpenGL presented numerous low-level challenges:
* **Setting up OpenGL Context:** Properly initializing OpenGL and managing the rendering context.
* **Shader Programming:** Learning and writing GLSL shaders to control how objects are rendered. This required understanding the programmable pipeline.
* **Matrix Transformations:** Accurately applying model, view, and projection matrices to correctly position and orient objects in 3D space and project them onto the 2D screen. Debugging incorrect transformations was a significant learning curve.
* **Resource Management:** Efficiently loading and managing vertex buffers, textures, and other graphics resources.
* **Game Loop Synchronization:** Ensuring the game logic and rendering were synchronized within the main loop to maintain a consistent frame rate.

### Impact & Learnings

This project provided a profound understanding of:
* **Low-Level 3D Graphics:** Gained foundational knowledge of how 3D graphics are rendered, from vertices and shaders to transformations and lighting.
* **OpenGL API:** Practical experience with the OpenGL API for creating interactive 3D environments.
* **C++ for Performance:** Understanding how C++ can be used for performance-critical applications like game development.
* **Mathematical Foundations of Graphics:** Applied linear algebra concepts directly to real-time rendering.
* **Problem Solving:** Developed strong problem-solving skills in a complex, visually driven domain.

### Visual Showcase

![3D Game Gameplay Screenshot](/star-collecting-3d-game.png)
*Screenshot showing the player character and collected stars.*