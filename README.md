# FinInsight - AI Financial Asset Research Assistant

FinInsight is an AI-powered chatbot that provides summaries and investment outlooks for stocks and cryptocurrency tokens.

## Project Structure
- `/ui` - React frontend application.
- `/api` - Python backend service.

## Frontend (UI)
Tech Stack:
- React.
- TypeScript.
- Tailwind CSS.

To run the frontend:
```bash
cd ui
npm install
npm start
```
The application will be available at http://localhost:3000

## Backend (API)
Tech Stack:
- Python.
- LangGraph (coming soon).

To run the backend:
```bash
cd api
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
The API will be available at http://localhost:5000

## Development Status
- Frontend: Basic chat interface implemented with mock responses.
- Backend: Basic Python environment setup.
- Integration: Pending.
