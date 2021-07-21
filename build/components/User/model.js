"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../../config/connection/connection");
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true
    },
    hobbies: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'HobbiesModel'
        }]
}, {
    collection: 'users',
});
exports.default = connections.db.model('UserModel', UserSchema);
//# sourceMappingURL=model.js.map