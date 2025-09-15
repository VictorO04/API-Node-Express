import data from "../models/data.js";
const {batfamily} = data;

const batfamilyGetAll = (req, res) => {
    res.status(200).json({
        "total": batfamily.length,
        "data": batfamily
    });
}

const batfamilyGetById = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const result = batfamily.find((b) => b.id === id);

    if (result) {
        res.status(200).json({
            "sucess": true,
            "data": result
        });
    } else {
        res.status(400).json({
            "sucess": false,
            "message": `Membro da Batfamilia com o ID ${id} não encontrado`
        });
    }
}

export {batfamilyGetAll, batfamilyGetById}