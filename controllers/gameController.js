let scores = [
    { id: '100', name: "Augusto", score: 60 },
    { id: '10', name: "Augusto", score: 65 },
]

let gameController = {
    index: function(req, res, next) {
        const listScores = scores.sort((a, b) => b.score - a.score);
        res.render('index', { listScores });
    },
    create: function(req, res, next) {
        const { id, name, score } = req.body

        const editScore = scores.find( sc => sc.id === id) // me devuelve el objeto que coincide con el id enviado

        if(editScore) {
            if(Number(score) > editScore.score) {
                editScore.score = Number(score)
            }

        } else {
            scores.push({ id, name, score: Number(score) })
        }


        res.redirect('/');
    }
}

module.exports = gameController