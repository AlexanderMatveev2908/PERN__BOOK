import { DataTypes, Model } from "sequelize";
import User from "./User.js";
import seq from "../config/db.js";

export interface ProductType extends Model {
  id: number;
  userId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
}

const Product = seq.define<ProductType>(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

export default Product;
