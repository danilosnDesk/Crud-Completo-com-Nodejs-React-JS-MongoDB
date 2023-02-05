
import users from "model/users";
/** Controller */

export async function getUsers(req, res) {
    try {


        const user = await users.find({});

        res.status(200).json(user)

    } catch (error) {

        res.status(404).json({ error: "Erro ao filtrar os dados -> getUsers()" })
    }
}

export async function PostUsers(req, res) {
    try {

        const formData = req.body;
        if (!formData) return res.status(404).json({ error: "form data not provided" });
        users.create(formData, function (erro, data) {
            return res.status(200).json(data)
        })

    } catch (error) {

        res.status(404).json({ error: "falha no post req" })
    }
}