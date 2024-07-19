# Next.js Modules

## Project Structure

1. **package.json**: Contains scripts, dependencies, and devDependencies for the project.
2. **Config files**: Configuration files for eslint, next, postcss, tailwind, and typescript.
3. **node_modules**: Directory for installed npm packages.
4. **public folder**: Holds static assets like images and fonts.
5. **src**: Main source folder containing application code.
   - **app**: Main application logic.
   - **layout.tsx**: Common layout components.
   - **page.tsx**: Home page component.

## React Server Components

6. **Server Components and React Components**: Server components are static and cannot use hooks or handle user interactions.
7. **Client components**: Cannot read files and must handle user interactions and hooks.

## Routing

8. **Routing**: All routes are defined inside the app folder with each folder representing a route.
9. **Nested Routes**: Routes within routes for deeper navigation structures.
10. **Dynamic Routes**: Create dynamic routes with parameters.
11. **Catch all segments**: Handle wildcard routes for dynamic path segments.
12. **Not Found**: Use not-found.tsx in the app router for 404 pages.

## Advanced Routing

13. **Private folders**: Prefix folders with an underscore to make them private, e.g., _lib.
14. **Route Groups**: Group routes without affecting URL structure by placing folders in parentheses.
15. **Layouts**: Shared layout components among multiple pages, defined in layout.tsx or layout.js.
16. **Nested Layouts**: Layouts within layouts for complex page structures.
17. **Route Group Layout**: Group-specific layout components.
18. **Routing metadata**: Define metadata for proper SEO using the Metadata API.
19. **Title metadata**: Set dynamic titles for pages.
20. **Link Component navigation**: Use the Link component for client-side navigation.
21. **Active Links**: Highlight active links using usePathname from next/navigation.
22. **Navigating Programmatically**: Use the useRouter hook for programmatic navigation.

## Special Files and Handling

23. **Template files**: Templates wrap each child layout and re-render everything on change, defined in template.tsx.
24. **Loading UI**: Show loading states with loading.tsx while content is being fetched.
25. **Error Handling**: Use error.tsx to handle server-side exceptions and isolate errors.
