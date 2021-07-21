"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class HobbiesValidation
 * @extends Validation
 */
class HobbiesValidation extends validation_1.default {
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
    createHobby(params) {
        const PassionLevelsEnum = ['Low', 'Medium', 'High', 'Very-High'];
        const schema = Joi.object().keys({
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
    getHobby(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return Joi.validate(body, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof HobbiesValidation
     */
    removeHobby(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return Joi.validate(body, schema);
    }
}
exports.default = new HobbiesValidation();
//# sourceMappingURL=validation.js.map