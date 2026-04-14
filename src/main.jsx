import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './LanguageContext.jsx'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.jsx'

const path = window.location.pathname;
const isPrivacyPage = path === '/politica-de-privacidade';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            {isPrivacyPage ? <PrivacyPolicyPage /> : <App />}
        </LanguageProvider>
    </React.StrictMode>,
)
