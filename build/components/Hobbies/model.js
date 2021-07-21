"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../../config/connection/connection");
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *  schemas:
 *    HobbiesSchema:
 *      required:
 *        - passionLevels
 *        - name
 *        - year
 *      properties:
 *        id:
 *          type: string
 *        passionLevels:
 *          type: string
 *        name:
 *          type: string
 *        year:
 *          type: string
 *    Hobbies:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Hobbies'
 */
const HobbiesSchema = new mongoose_1.Schema({
    passionLevels: {
        type: String,
        trim: true,
        default: 'active', enum: ['Low', 'Medium', 'High', 'Very-High']
    },
    name: {
        type: String,
        trim: true
    },
    year: String,
}, {
    collection: 'hobbiesmodel',
    versionKey: false
});
exports.default = connections.db.model('HobbiesModel', HobbiesSchema);
//# sourceMappingURL=model.js.map