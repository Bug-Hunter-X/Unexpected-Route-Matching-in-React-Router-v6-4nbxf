# Unexpected Route Matching in React Router v6

This repository demonstrates a common issue encountered when using React Router v6: unexpected route matching.
The bug occurs when nested routes are not properly defined.  The solution involves using the `useLocation` hook and carefully structuring routes.

## Bug Description
The provided `App.js` uses the `BrowserRouter`, `Routes` and `Route` components from `react-router-dom`. When navigating to the `/about` route, there can be instances of incorrect route matching such as a 404 error, an empty page, or navigation to an unexpected route.

## Solution
The `bugSolution.js` file provides a solution to the issue by restructuring the routes to clearly define the relationship between them. It uses `useLocation` to log the current route which aids in debugging.