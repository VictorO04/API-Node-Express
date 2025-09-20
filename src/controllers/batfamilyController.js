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

const createMember = (req, res) => {
    const {codinome, nomeVerdadeiro, habilidade} = req.body;

    if (!codinome) {
        res.status(400).json({
            "succes": false,
            "message": "Codinome é obrigatório!"
        });
    }

    if (!nomeVerdadeiro) {
        res.status(400).json({
            "succes": false,
            "message": "Nome verdadeiro é obrigatório!"
        });
    }

    if (!habilidade) {
        res.status(400).json({
            "succes": false,
            "message": "Habilidade é obrigatório!"
        });
    }

    const newMember = {
        id: batfamily.length + 1,
        nomeVerdadeiro,
        habilidade
    }

    batfamily.push(newMember);

    res.status(201).json({
        "succes": true,
        "message": "Novo membro da batfamilia cadastrado com sucesso",
        "data": newMember
    });
}

const deleteMember = (req, res) => {
    const {id} = req.params;

    if (isNaN(id)) {
        res.status(400).json({
            "succes": false,
            "message": "O ID deve ser válido"
        });
    }

    const idParaApagar = parseInt(id);
    const membroParaRemover = batfamily.find((m) => m.id === idParaApagar);

    if (!membroParaRemover) {
        res.status(200).json({
            "succes": false,
            "message": `O ID ${id} não encontrado`
        });
    }

    const membroFiltrado = batfamily.filter((m) => m.id !== id);

    batfamily.splice(0, batfamily.length, ...membroFiltrado);

    return res.status(200).json({
        "succes": true,
        "message": "O membro da batfamília foi removido com sucesso",
    });
}

export {batfamilyGetAll, batfamilyGetById, createMember, deleteMember}