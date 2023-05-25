const Cmts = require('../models/Cmts');

class CmtsController {
    // [GET] /cmts
    data(req, res) {
        const dataReq = req.query;
        const idFilm = dataReq.idFilm;

        console.log('-----------------------------------');
        console.log('| [GET] /cmts ');
        console.log('| ID Film: ', idFilm);

        Cmts.find({}, function (err, cmts) {
            const dataRes = cmts.filter(value => value.idFilm === idFilm);
            res.send(dataRes);
        });

        console.log('-----------------------------------');
    }
    // [POST] /cmts/create
    create(req, res) {
        const dataReq = req.body;
        const idFilm = dataReq.idFilm;
        const idUser = dataReq.idUser;
        console.log('-----------------------------------');
        console.log('| [POST] /cmts/create ');
        console.log('| ID User: ', idUser);
        console.log('| ID Film: ', idFilm);
        console.log('| NameUser: ', dataReq.nameUser);
        console.log('| Content: ', dataReq.content);

        const cmt = new Cmts(dataReq);
        cmt.save()
            .then(() => {
                Cmts.find({}, function (err, cmts) {
                    const dataRes = cmts.filter(
                        value => value.idFilm === idFilm,
                    );
                    res.send(dataRes);
                });
                console.log('| Create New Cmt Film Done');
                console.log('-----------------------------------');
            })
            .catch(() => {
                console.log('| Cmt Failed!!!');
                console.log('-----------------------------------');
            });
    }
}

module.exports = new CmtsController();
