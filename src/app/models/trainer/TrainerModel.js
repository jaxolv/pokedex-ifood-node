import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database"

const sequelize = new Sequelize(databaseConfig)

class TrainerModel extends Model {}

TrainerModel.init(
  {
    id: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.STRING,
    city: Sequelize.STRING,
  },
  {
    sequelize,
  }
)

export default TrainerModel;