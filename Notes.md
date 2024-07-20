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
Component- hierarcy layout.js, template.js, error.js, loading.js, not-found.js, page.js.

25. Recovering from Errors - invoke reset and retry. Re-render the error boundaries. Fallback 

26. Handling Errors in Nested Routes - Placing error.tsx at di fferent  levels of nested folders of a route achieves granular level of error handling. 
27. Handling errors in layout.tsx - error.tsx does not handle the errors in the layout.tsx
28. Parallel Routes - Advanced routing mechanism simultaneous rendering of multiple pages within the same layout. Use of slots to help structure our content in a modular fashion. We use the @folder to define slots and each folder has its own page.tsx. They become props along children in layout.tsx. Independed route handling. Each mini application becomes a slot.
29. Unmatched routes - sub navigation. Default.tsx file when reloaded for unmatched routes. Fallback to render content. Cannor retrieve slot active state.
30. Conditional routes - Depending on a condition we decided which state to render
31. Intercepting Routes - Show a route while keeping components. Folder name (.)name --> (..)name
32. Parallel Intercepting Routes -->
33. Route Handlers --> Create RESTful endpoints giving you full control over the responses. Route handlers run server-side allowing information to remain secure. Response object. Use of async functions. route.ts handles the url by default. Have to use the api folder. 
34. Handling GET request(route handlers) - responses.json. Use the thunder client. GET in route.ts
35. Handling a POST request(route handlers) - POST function in route.ts
36. Dynamic Route Handlers - [id] folder with route.ts file. GET accepts request and {context or params}. 
37. Handling PATCH requests - request and context as parameters.
38. Handling DELETE Request - similar to Patch requests.
39. URL Query Parameters - ?query=thenwordstouse. We need the request object. type NextRequest from "next/server". request.nextUrl.searchParams.
40. Redirects in Route Handlers - use redirect function from next/navigation. redirect(");
41. Headers in Router Handlers - HTTP headers represent the metadata associated with an API request/response. Request headers - sent by client. User agent header. Accept header. Authorization header. Response headers sent by server. Content type header - data type of returned content. NextRequest. new Headers(request.headers). headers.get(). Use the headers() from next/headers. Browser renders content differently based on content-type
42. Cookies in route handlers. Session management, personalization, tracking like recording and analyzing user behavior. Set and get cookies. Set cookie header.--? key value. request.cookies.get("")
43. Caching in Route Handlers. Route handlers are cached by default. when using Get with response object. Dynamic - "force-dynamic"
44. Middleware - intercept and control flow of requests and responses within your application. middleware.js/ts --> middleware function accepting type { request: NextRequest } return nextresponse. Use of config keyword which has matcher and url.

Route Section Summary - Route definition; Pages and Layouts; Dynamic routes; Route groups; Linking and navigation; Handling errors in routes; Parallel and Intercepting Routes. Route handlers and middleware

45. Rendering -> Process that transforms the code you write into user interfaces. CSS, SSR, RSCs. Rendering in React. 
46. Client-side Rendering - Single Page Applications. Simple html with reference to JS file. Component transformed into the UI directly is client-side rendering. Bundle.js has everything. Hurts SEO and User Experience/Performance
47. Server-side Rendering - Solves some of the problems with CSR. Rendering full html at the server. Hydration - take the interactive elements and place them in the tree of static served html and binds the JS logic to these elements such as attaching event handlers.  SSG, SSR. SSR for personalised content. All must be on client before there is hydration.
48. Suspense for SSR - Solve some of the problems with SSR. Suspense component. HTML streaming on the server. Selective hydration on the client. Suspense fallback.  Using code spiliting. Segregate into seperate script tags. Using React.lazy for code splitting, enables you to seprate the main section code. Suspense means dont prevent the rest of the page from rendering. Rest of the HTML and JS code is fully downloaded. Suspense solves main issues of SSR?
49. React Server Components(RSC) - Evolution of React -> CSR - SSR - Suspense for SSR. Dual component model. Client components and Server components. Client components have access to browser - state, effects, event listeners, interactivity and geolocation or localstorage. Server components. represent a new type of react component that works execlusively on the server. Code stays on server, never downloaded. Reduce bundle sizes. Remove hydration. Direct acces to resources such as data fetching and rendering. Only interative code to server. tokens and api keys are away from the client-side. Enhance data fetching. 
50. Server and Client Components - By default all the components are server components. "use client" Full access to the browser apis. Console.log will be in the broswer. There is prerendering in next.js once. 
51. RSC rendering lifecycle - Browser(client), NextJS(framework), React(library). Key words - refetch, RSC payload, route rerender, reconciliation, render SC tree/prepare CC instructions, hydration. Static, rendering, dynamic rendering, streaming. 
52. Static rendering - generate HTML pages at the time of building our application. Prod server vs. Dev Server. For production builds run once when the build command is called. Page rerender for every request in Dev mode. Check the .next file --> Prefetching, preload a route in a backgroud as they become visible in the user's viewport. About and Dashboard routes for instant navigation.  
53. Dynamic Rendering - routes are rendered for each user at request time. Personalised information. Dynamic function functions like cookies(), headers(), and searchParams. In Next, best rendering is chosen based on features and APIs used.  
54. Streaming -  Progressive UI rendering. Seeing parts of the page immediately. Streaming is there in App router by default. Using the suspense component. 
55. Server and Client Composition Patterns - Server components - fetchingdata, accessing backend resources, protecting sensitive info. Client components - interaction, event listeners, managing state, browser APIs, custom hooks, react class components. 
56. Server-only code - only on the server. server-only package. npm i server-only.
57. Third Party Packages - 