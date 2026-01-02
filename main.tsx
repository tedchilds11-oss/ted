import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 ClarityAI Platform</h1>
      <p>Multi-Tenant SaaS Platform is Live!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Features:</h2>
        <ul>
          <li>✅ Multi-tenant architecture</li>
          <li>✅ RBAC permissions</li>
          <li>✅ Subscription tiers</li>
          <li>✅ Rate limiting</li>
          <li>✅ Demo mode available</li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)