# Movie Site Project

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

### The Problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

### View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Instructions

Sidor:
-MoviesList-sida med filmer (/)  Route: `/`, component: `MoviesList`
    -Fetch from API vid start `useEffect` themoviedb.org + puts them into state using `useState`
    -Mappa och visa bild (+titel och release on hover) är länk `Link` till moviepage
-Moviesida visar info (/movies/:id) Route: `/movies/:id`, component: `Detail`
    - movie ID in the URL
    - use `useParams` to get the `id` from the URL
    
    - passes that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie
    - puts the response into state using `useState`
    - renders it onto the page

https://technigo-movies-project.netlify.app/