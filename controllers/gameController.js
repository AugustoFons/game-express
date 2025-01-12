const db = require('../db');

let gameController = {
    index: async function(req, res, next) {
        try {
            // Ejecutar consulta
            const result = await db.execute('SELECT * FROM listScores'); 
            const listScores = result.rows.sort((a, b) => b.score - a.score);
            res.render('index', { listScores });
        } catch (error) {
            res.render('index', { error: 'Error al cargar los puntajes.' });
        }
    },
    create: async function(req, res, next) {
        const { id, name, score } = req.body

        try {
            const existing = await db.execute('SELECT * FROM listScores WHERE identifier = ?', [id]);
        
            if(existing.rows.length > 0) {
                const currentScore = existing.rows[0].score;
                if(Number(score) > currentScore) {
                    await db.execute('UPDATE listScores SET score = ?, name = ? WHERE identifier = ?', [Number(score), name, id]);
                }
            } else {
                await db.execute('INSERT INTO listScores (identifier, name, score) VALUES (?, ?, ?)', [
                    id,
                    name,
                    Number(score),
                ]);
            }
        
            res.redirect('/');
        } catch (error) {
            res.render('index', { error: 'Error al cargar los puntajes.' });
        }
        
    }
}

module.exports = gameController