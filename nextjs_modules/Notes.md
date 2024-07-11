2. Project Structure:
- package.json: dependecies and versions -> scripts, dependencies, devDespecinses
- Config files -> eslint, next, postcss,tailwind, typescript
- node_modules -> packages we are using
- public folder -> static assets
- src -> app -> the real code/real work
- layout.tsx for all the common web things
- page.tsx Home component

3. React Server Components
- Server Components and React Components
- Server components cannot use hooks or do user interactions
- All components are server by default
Client components cannot read files

5. Routing
- All routes inside the app folder
- folder = route. Inside each folder there is page.tsx

6. Nested Routes
Routes inside routes

7. Dynamic Routes

8. Catch all segments

9. Not found: has to be not-found.tsx in the app router. NotFound component from next nagivation

10. Private folders - the underscore before a folder name e.g _lib is made into a private folder

11. Route Groups -- group routes without affecting the url path structure simply put folder in parenthensis

12. Layouts -- Shared among multiple pages in the web application
Called layout.tsx and layout.js. Accepts the children prop 

13. Routing metadata - proper SEO. Metadata API - define metadata for each page. Display correct information when. Layout and Page have metadata