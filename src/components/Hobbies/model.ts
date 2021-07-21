import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IHobbiesModel
 * @extends {Document}
 */
export interface IHobbiesModel extends Document {
    passionLevels: string,
    name: string,
    year: string
}


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

const HobbiesSchema: Schema = new Schema({
    passionLevels: {
        type: String,
        trim: true,
        default: 'active', enum: ['Low', 'Medium', 'High', 'Very-High'] 
    },
    name :{
        type: String,
        trim: true
    },
    year: String,    
}, {
    collection: 'hobbiesmodel',
    versionKey: false
})


export default connections.db.model < IHobbiesModel > ('HobbiesModel', HobbiesSchema);
