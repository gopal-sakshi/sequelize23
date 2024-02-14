module.exports = {
    async up(queryInterface, Sequelize) {

        let dd = await queryInterface.sequelize.query(`SELECT name FROM sqlite_master WHERE type='table';`);
        console.log(dd);
        // await queryInterface.addColumn('reviews', 'description', {
        //     type: Sequelize.TEXT,
        //     allowNull: false
        // });
    },

    async down(queryInterface, Sequelize) {
        // await queryInterface.dropColumn('reviews', 'description');
    }

    /*
        npx sequelize-cli migration:generate --name add-review-description.js

        npx sequelize-cli db:migrate --name 20240214071245-add-review-description.js --config migrations/__migrationConfig23.json --env dvpt23

    */
};
