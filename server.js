const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'ClarityAI Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      status: '/status',
      demo: {
        survival: '/demo/survival',
        dashboard: '/demo/dashboard'
      }
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'ClarityAI Backend',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Status check
app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Demo endpoints
app.get('/demo/survival', (req, res) => {
  res.json({
    success: true,
    data: {
      probability: 87,
      threatLevel: 'moderate',
      criticalThreats: [
        { name: 'Cash Flow Gap', severity: 'high', impact: '$24,500', timeline: '14 days' }
      ]
    }
  });
});

app.get('/demo/dashboard', (req, res) => {
  res.json({
    success: true,
    data: {
      survivalProbability: { value: '87%', change: '+4%', trend: 'up' },
      businessHealth: { value: '84/100', change: '+6 pts', trend: 'up' },
      monthlySavings: { value: '$47.2k', change: '+22%', trend: 'up' },
      runwayExtension: { value: '+64 days', change: 'Optimized', trend: 'up' }
    }
  });
});

app.listen(PORT, () => {
  console.log(`ClarityAI Backend running on port ${PORT}`);
});