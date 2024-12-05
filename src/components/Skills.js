import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>

      <h2>Full-Stack Development with React</h2>
      <p>
        Description:Expertise in developing modern web applications using React,
        including building component libraries and implementing routing and
        state management.{" "}
      </p>
      <p>languages/Frameworks: JavaScript, TypeScript, React, Storybook</p>
      <p>
        Tools: Create React App, Styled Components, React Testing Library, Jest
      </p>

      <h2>Containerization and Deployment with Docker</h2>
      <p>
        Description: Proficient in setting up development and production
        environments using Docker containers, ensuring applications are
        isolated, portable, and easily deployed across different environments.{" "}
      </p>
      <p>languages/Frameworks: Node.js (for React apps), Dockerfile</p>
      <p>
        Tools: Docker, Docker Compose, Nginx (for serving React apps in
        production){" "}
      </p>

      <h2>Code Quality and Pre-commit Hook Configuration</h2>
      <p>
        Description: Knowledge of setting up pre-commit hooks to ensure code
        quality through automated checks, such as formatting, linting, and
        testing before code is pushed or committed.{" "}
      </p>
      <p>languages/Frameworks: JavaScript, TypeScript</p>
      <p>Tools:ESLint, Prettier, Git, Husky (for pre-commit hooks)</p>

      <h2>Automated Testing and Test-Driven Development (TDD)</h2>
      <p>
        {" "}
        Description: Proficient in writing automated tests for React components,
        ensuring functionality, performance, and quality through unit and
        integration tests, following Test-Driven Development (TDD) principles.{" "}
      </p>
      <p>languages/Frameworks: JavaScript, TypeScript, React </p>
      <p>Tools:Jest, React Testing Library</p>
    </section>
  );
}

export default Skills;
