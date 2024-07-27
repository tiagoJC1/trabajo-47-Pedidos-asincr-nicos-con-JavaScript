module.exports = (sequelize, dataTypes) => {
    let alias = 'Favorite';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        pelicula_id: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        deletedAt: false
    }
    const Favorite = sequelize.define(alias, cols, config); 

    Favorite.associate = function (models) {
        Favorite.belongsToMany(models.Movie, {
            as: "movies",
            through: 'favorite',
            foreignKey: 'movie_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Favorite
};