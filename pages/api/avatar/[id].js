import data from "../../../public/data";

export default function handler(req, res) {
    let id = req.query.id;
    let x = data.find( el => el._id == id) ?? null
    if(x)
    {
        res.status(200).json(x);
    }
    res.status(500).json({ error: 'failed to load data' })
}
  