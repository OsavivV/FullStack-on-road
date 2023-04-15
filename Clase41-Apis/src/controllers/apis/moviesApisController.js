
const db = require('../../database/models');

const moviesApisController = {
    list: (req, res) => {
        
    },

    detail: (req, res) => {
        
    },

    create: async (req,res) => {
        try {
            const movie = await db.Movie.create
             {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
            


    res.status (201) ;
    res.json ({
        meta: {
            status:200,
            url: req.originalUrl,
        },
        data: genres,

    });
},

catch (error) {
    res.send(error);

}

},

