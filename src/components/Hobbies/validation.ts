import * as Joi from 'joi';
import Validation from '../validation';
import { IHobbiesModel } from './model';

/**
 * @export
 * @class HobbiesValidation
 * @extends Validation
 */
class HobbiesValidation extends Validation {

    /**
     * Creates an instance of HobbiesValidation.
     * @memberof HobbiesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IHobbiesModel} params
     * @returns {Joi.ValidationResult<IHobbiesModel >}
     * @memberof HobbiesValidation
     */
    createHobby(
        params: IHobbiesModel
    ): Joi.ValidationResult < IHobbiesModel > {
        const PassionLevelsEnum = ['Low', 'Medium', 'High', 'Very-High'] ;

        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            passionLevels: Joi.string().required().valid(PassionLevelsEnum),
            year: Joi.string().required(),            
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof HobbiesValidation
     */
    getHobby(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof HobbiesValidation
     */
    removeHobby(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new HobbiesValidation();
