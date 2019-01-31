const sessionDB = require('../database/session');
let u;

let indexGet = (req, res) => {
    sessionDB.find({}, (err, result) => {
        if (err) throw err;
        let userdata = result;
        ress = userdata[0].username;
        console.log(result);
        res.render('index', {
            result: ress
        });
    })

}

let indexPost = (req, res) => {
    let search = req.body.search;

    console.log(search);
    if (search === 'tambaram') {
        res.redirect('/tambaram');
    } else if (search === 'tnagar') {
        res.redirect('/tnagar');
    } else if (search === 'velachery') {
        res.redirect('/velachery');
    }

    res.redirect('/index', {
        search: search
    });
}

exports.indexGet = indexGet;
exports.indexPost = indexPost;