import { mailSend } from '@/controller/mail.controller.js';

export async function POST(req, res) {
  // Allow preflight requests
  if (req.method === 'OPTIONS') {
    const response = new Response(JSON.stringify({ message: 'Preflight request handled successfully' }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'https://master--nitishkum.netlify.app',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      },
    });
    return response;
  }

  // Handle actual requests
  if (req.method === 'POST') {
    try {
      // Your logic for handling the POST request goes here
      await mailSend(req, res);

      // Set appropriate CORS headers
      const response = new Response(JSON.stringify({ message: 'Request handled successfully' }), {
        status: 200,
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'https://master--nitishkum.netlify.app',
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      });
      return response;
    } catch (error) {
      console.error('Error handling the request:', error);
      const errorResponse = new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'https://master--nitishkum.netlify.app',
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      });
      return errorResponse;
    }
  } else {
    // Handle other HTTP methods if needed
    const methodNotAllowedResponse = new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'https://master--nitishkum.netlify.app',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      },
    });
    return methodNotAllowedResponse;
  }
}
