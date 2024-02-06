import { mailSend } from '@/controller/mail.controller.js';

export async function POST(req,res) {
    if(req.method === 'POST') return mailSend(req,res)
    return new Response("Method Not Allowed ", { status: 500 });
}





