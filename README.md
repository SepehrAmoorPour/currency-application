# Setup

1. Make sure Node.js 20+ and npm are installed. Then in a terminal run:

`npm install`

2. To run the application in development mode:

`npm run dev`

The application will be available at `http://localhost:5173`.

Or to run in the production build, run:

`npm run build`

Then run:

`npn run preview` to view the application at `http://localhost:4173`.

3. To run the unit tests, run:

`npm run test`

NOTES:

- The application use TailwindCSS for styling.
- The API for fetching currencies is rate-limited, so there might be some timeouts upon active use of the application.
