// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "database/conn"
import { getUsers, PostUsers } from "database/controller";


export default async function handler(req, res) {

    connectMongo().catch(() => res.status(405).json({ erroo: "Requisição não definida!" }))
    // type if request
    const { method } = req

    switch (method) {
        case 'GET':
            getUsers(req, res)
            break;
        case 'POST':
            PostUsers(req, res)
            break;
        case 'PUT':
            res.status(200).json({ method, name: 'PUT Request' }); break;
        case 'DELET':
            res.status(200).json({ method, name: 'PUT Request' }); break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            req.status(405).end(`Method  ${method} Not Allowed`); break;
    }
}
