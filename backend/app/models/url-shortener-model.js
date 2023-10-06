module.exports = (sequelize, Sequelize) => {
    const UrlShortenerModel = sequelize.define("url", {
        originalUrl: {
            type: Sequelize.STRING,
            required: true
        },
        shortenUrl: {
            type: Sequelize.STRING,
            required: true
        },
        status: {
            type: Sequelize.INTEGER(1),
            required: true,
            default: 0
        },
    });

    return UrlShortenerModel;
};