const app  = require('./src');
const db   = require('./src/models');

const port = process.env.PORT || 3000;

db.sequelize.sync({force:false})
        .then(() => {
            app.listen(port, () => {
                console.log();
                console.log('Server up :)');
                console.log();
            });
        });
