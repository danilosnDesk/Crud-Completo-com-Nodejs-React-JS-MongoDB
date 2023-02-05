import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        // Faz a conexão com o  MongoDB atravez do MONGO_URL, e atrabui a conexão pata a variavel conn
        const { connection } = await mongoose.connect(process.env.MONGO_URL)

        // er
        if (connection.readyState == 1) {
            // return
            console.log("-> Connectado ao banco  MongoDB!")
        }

    } catch (errors) {
        return Promise.reject(errors)


    }
}

export default connectMongo;