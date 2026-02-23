# Simple Node.js Web App with CI/CD

This project demonstrates a simple Node.js web application with a GitHub Actions CI workflow.

## Project Structure

```
├── app.js                      # Main Express server
├── package.json                # Node.js dependencies
├── public/
│   └── index.html              # HTML UI page
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI workflow
└── README.md                   # This file
```

## Local Setup

### Prerequisites
- Node.js 18.x or higher
- npm (comes with Node.js)

### Installation and Running

1. Install dependencies:
```bash
npm install
```

2. Start the web app:
```bash
npm start
```

3. Open your browser and visit:
```
http://localhost:3000
```

The app will display a welcome page with UI buttons to:
- Check the health status of the app
- Display the current time

## API Endpoints

- `GET /` - Returns the main HTML UI page
- `GET /api/health` - Returns a JSON response with app status

Example health check:
```bash
curl http://localhost:3000/api/health
```

Response:
```json
{
  "status": "ok",
  "message": "App is running!"
}
```

## GitHub Actions CI Workflow

The `.github/workflows/ci.yml` workflow file defines the CI pipeline that:

1. **Triggers on Push**: Runs automatically on push events to `main` or `master` branches
2. **Matrix Strategy**: Tests on Node.js 18.x and 20.x
3. **Installs Dependencies**: Runs `npm install`
4. **Starts the App**: Launches the server in the background
5. **Tests with curl**: 
   - Makes HTTP requests to the home page (/)
   - Checks the health API endpoint (/api/health)
   - Verifies the response contains "ok"
6. **Cleanup**: Stops the Node.js process after testing

### Workflow Steps

```
checkout → setup Node.js → install → start app → curl tests → verify response → cleanup
```

## Testing the CI Workflow

1. Push this repository to GitHub
2. Create a branch from `main` or `master`
3. Make a commit and push your branch
4. Go to the "Actions" tab in your GitHub repository
5. Watch the workflow run in real-time
6. Check the logs to see curl output and health status

## Example Workflow Output

The CI logs will show:
```
Checking home page...
> GET / HTTP/1.1
< HTTP/1.1 200 OK

Checking health API...
> GET /api/health HTTP/1.1
< HTTP/1.1 200 OK

Verifying app is responding...
{"status":"ok","message":"App is running!"}
✓ App is healthy!
```

## Dependencies

- **express**: ^4.18.2 - Minimal web framework for Node.js

## Notes

- The app runs on port 3000 by default
- No database or external services are required
- The workflow demonstrates CI/CD best practices with dependency management and endpoint testing
- This is a demonstration project and not intended for production use
