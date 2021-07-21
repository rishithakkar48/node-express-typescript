import * as Joi from 'joi';
import HobbiesModel, { IHobbiesModel } from './model';
import HobbiesValidation from './validation';
import { IHobbiesService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IHobbiesModelService}
 */
const HobbiesService: IHobbiesService = {
    /**
     * @returns {Promise < IHobbiesModel[] >}
     * @memberof HobbiesService
     */
    async findAll(): Promise < IHobbiesModel[] > {
        try {
            return await HobbiesModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IHobbiesModel >}
     * @memberof HobbiesService
     */
    async findOne(id: string): Promise < IHobbiesModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = HobbiesValidation.getHobby({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await HobbiesModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IHobbiesModel} hobbies
     * @returns {Promise < IHobbiesModel >}
     * @memberof HobbiesService
     */
    async insert(body: IHobbiesModel): Promise < IHobbiesModel > {
        try {
            const validate: Joi.ValidationResult < IHobbiesModel > = HobbiesValidation.createHobby(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const hobbies: IHobbiesModel = await HobbiesModel.create(body);

            return hobbies;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IHobbiesModel >}
     * @memberof HobbiesService
     */
    async remove(id: string): Promise < IHobbiesModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = HobbiesValidation.removeHobby({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const hobbies: IHobbiesModel = await HobbiesModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return hobbies;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default HobbiesService;
