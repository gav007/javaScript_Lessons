You are an expert JavaScript tutor and repo-builder. Create a low-friction beginner-to-intermediate JavaScript practice repository for a learner who already knows basic HTML/CSS but is weak at JavaScript and wants lots of practical reps before bigger projects.

Goal: build a static frontend practice repo, no React, no frameworks, no build step. Use plain HTML, CSS, and JavaScript. The learner should be able to open the root index.html and start immediately.

Repo name: js-foundations-reps

Required structure:

- README.md
- index.html as a project hub
- shared/global.css
- cheatsheets/js-basics-cheatsheet.md
- cheatsheets/dom-cheatsheet.md
- cheatsheets/debugging-cheatsheet.md
- projects/00-button-lab/
- projects/01-counter-lab/
- projects/02-input-greeting/
- projects/03-colour-theme-picker/
- projects/04-mini-calculator/
- projects/05-quiz-engine/
- projects/06-array-list-render/
- projects/07-card-filter-search/
- projects/08-todo-list-lite/
- projects/09-todo-local-storage/
- projects/10-modal-tabs-accordion/
- projects/11-form-validation/
- projects/12-text-to-speech/
- projects/13-fetch-json-users/
- projects/14-weather-app-shell/
- projects/15-tic-tac-toe/
- projects/16-soundboard-vanilla/
- projects/17-dashboard-mini-capstone/

Every project folder must contain:

- README.md
- index.html
- style.css
- script.js

Teaching style:

- Beginner-friendly, but not childish.
- Use plain English comments.
- Avoid clever shortcuts unless explained.
- Every script.js should run without console errors before the learner edits it.
- Add TODO comments for the learner to complete.
- Each README should include goal, concepts practised, work order, hints, stretch goals, and a done checklist.
- The projects should build skill gradually: DOM selection, events, input handling, variables/state, functions, arrays, objects, rendering, CRUD, localStorage, forms, browser APIs, fetch/async/await, then capstone.

Coding constraints:

- Use const by default, let only when reassignment is needed.
- Use function declarations for main functions to keep it beginner-friendly.
- Use addEventListener, not inline onclick attributes.
- Use defer on script tags.
- Use accessible labels for inputs.
- Use clear variable names like countDisplay, todoInput, renderTodos.
- Keep CSS simple and readable.
- No TypeScript, no bundlers, no package manager required.

For each project:

1. Make a working HTML layout.
2. Add starter JavaScript with TODOs.
3. Add comments explaining variables, functions, parameters, and return values where relevant.
4. Do not fully solve every TODO unless the file is clearly marked as a solution. The main script.js should be a starter exercise.
5. Include at least one stretch goal.

Add a root README with:

- How to run the repo.
- The recommended project order.
- The learning loop: read README, inspect HTML, complete one TODO, test, explain out loud.
- A small notebook template for each lab.

Important: make this feel like a practice gym, not a polished tutorial app. The learner needs lots of reps and low friction.
