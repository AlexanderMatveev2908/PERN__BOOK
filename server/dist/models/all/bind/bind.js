import { defineToken } from "../Token.js";
import { defineUser } from "../User.js";
export const bindModels = (seq) => {
    const User = defineUser(seq);
    const Token = defineToken(seq);
    Token.belongsTo(User, { foreignKey: "userID", onDelete: "CASCADE" });
    User.hasMany(Token, { foreignKey: "userID", onDelete: "CASCADE" });
};
