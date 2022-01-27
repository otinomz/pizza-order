import dbConnect from "../../../utilities/mongo"

export default function handler(req, res) {
    const { method } = req
    
    dbConnect()


    if (method === "GET") { }
    if (method === "POST") {

    }
}
