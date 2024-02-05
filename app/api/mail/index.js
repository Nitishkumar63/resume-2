import {mailSend} from '@/controller/mail.controller.js'
const mail = (req,res)=>{
    if(req.method === 'POST') return mailSend(req,res)
    res.status(500).send('Method Not Allowed')
}

export default mail