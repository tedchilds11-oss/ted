import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const url = new URL(req.url)
  const path = url.pathname.replace('/make-server-78ad1ffc', '')

  try {
    // Health check
    if (path === '/health') {
      return new Response(
        JSON.stringify({ 
          status: 'ok',
          service: 'ClarityAI Backend',
          version: '1.0.0',
          timestamp: new Date().toISOString()
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Status check
    if (path === '/status') {
      return new Response(
        JSON.stringify({ 
          status: 'ok',
          database: 'connected',
          timestamp: new Date().toISOString()
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Demo endpoints
    if (path === '/demo/survival') {
      return new Response(
        JSON.stringify({
          success: true,
          data: {
            probability: 87,
            threatLevel: 'moderate',
            criticalThreats: [
              { name: 'Cash Flow Gap', severity: 'high', impact: '$24,500', timeline: '14 days' }
            ]
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (path === '/demo/dashboard') {
      return new Response(
        JSON.stringify({
          success: true,
          data: {
            survivalProbability: { value: '87%', change: '+4%', trend: 'up' },
            businessHealth: { value: '84/100', change: '+6 pts', trend: 'up' },
            monthlySavings: { value: '$47.2k', change: '+22%', trend: 'up' },
            runwayExtension: { value: '+64 days', change: 'Optimized', trend: 'up' }
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Default 404
    return new Response(
      JSON.stringify({ success: false, error: 'Endpoint not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})