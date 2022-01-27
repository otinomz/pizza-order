import dbConnect from "../../../utilities/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method } = req
    
    dbConnect()


    if (method === "GET") { }
    if (method === "POST") {
        try {
            
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
 