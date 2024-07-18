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

14. Layouts

15. Nested Layouts

16. Route Group Layout

17. Routing metadata

18. Title metadata

19. Link Component nagivation - 

20. Active Links -usePathname from next/navigation function. Only works with client component -- "use client"

21. Navigating Programmatically - useRouter hook

22. Template files. - layouts mount the changed content. Templates similar to layouts in that they wrap each child layout. template.tsx different from layouts because everything is rerendered.

23. Loading UI - Special Files --> page.tsx, layout.tsx, template.tsx, not-found.tsx,. 
Loading.tsx. file used while page is loading -> Loading states are displayed to users while a specific route segment's content is loading. Give assurance application is responsive and actively loading content. React suspense boundary. Display loading state. 

24. Error Handling - Special file -> error.tsx. Throw an error. Npm run build and npm run start.
Error.tsx is used for handling errors. Server side exceptions used for the components. Placed where page.tsx is. Wraps the route segment an its nested children in a react error boundary. Isolate errors and keep the rest of the app functional.

