import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
    name: string 
    hobbies : []
}


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
const UserSchema: Schema = new Schema({
    name :{
        type: String,
        trim: true
    },    
    hobbies: [{
        type: Schema.Types.ObjectId,
        ref: 'HobbiesModel'
    }]
}, {
    collection: 'users',    
})


export default connections.db.model < IUserModel > ('UserModel', UserSchema);
