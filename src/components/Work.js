import React from "react";

function Work() {
  return (
    <section id="work">
      <h2>Work</h2>
      <div>
        <h3>Coding Assignment 11 Docker File</h3>
        <p>
          For this task, I set up the development environment using Docker
          Containers and submitted a Dockerfile. I included a README.md file
          with instructions on how to get the web application running on
          localhost:7775 (127.0.0.1:7775). The Dockerfile created a container
          that displayed a simple h1 tag with the text “Coding 1” on the
          website, built using Create React App. I named the container
          imanlupig_coding_assignment11, and the site files were hosted in
          a working directory called imanlupig_site.
        </p>
      </div>
      <div>
        <h3>Coding Assignment 12 Component Library</h3>
        <p>
          For this assignment, I created a Component Library using React and
          Storybook. I submitted a Dockerfile and a README.md file with
          instructions on how to get the site running on localhost:8083
          (127.0.0.1:8083). Using Create React App and Storybook, I developed a
          UI component library that included a set of components, such as
          Button, Label, Text, Table (with header, row, cell, and footer), and a
          Dropdown. Each component adhered to strict requirements, including
          having the necessary files like Component_name.tsx,
          Component_name.stories.tsx, Component_name.types.tsx,
          Component_name.tests.tsx, and Index.ts. I used Styled Components for
          styling, ensuring that all components were responsive. The Storybook
          functionality included Controls to modify properties like default text
          and background color, and each component had both a default and a
          disabled state, with visual changes (such as greyed-out colors) and
          cursor updates to indicate when a component was non-interactive. Every
          component also included at least two tests: one to check visibility
          and another to verify that the background color changed when the
          component was in its disabled state. I also created a Docker container
          named imanlupig_coding_assignment12 to host the production build
          of the app, and the site files were stored in a directory called
          imanlupig_ui_garden.
        </p>
      </div>
      <div>
        <h3>Coding Assignment 13 UI Component Library</h3>
        <p>
          For this assignment, I submitted a Dockerfile and a README.md file
          with instructions on how to run my web application on localhost:8018.
          The Dockerfile built a container to host a production version of a
          React app for a newly created component library, and the container was
          named imanlupig_coding_assignment13. The site files were stored
          in a directory called imanlupig_ui_garden_build_checks. I also
          set up a pre-commit hook to ensure the code passed checks for Prettier
          (for formatting), ESLint (for linting), and tests (for functionality),
          so that if any of these checks failed due to code modifications, I
          wouldn't be able to submit the code. To ensure this workflow was
          consistent, I configured my GitHub repository to run these checks as
          well, so if the pre-commit hooks were bypassed, the same checks were
          enforced on GitHub, and I was notified if the build failed.
        </p>
      </div>
    </section>
  );
}

export default Work;
