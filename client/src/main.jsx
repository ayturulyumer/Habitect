import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./scss/utils/_index.scss"
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GoogleClientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
