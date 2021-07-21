import { IHobbiesModel } from './model';

/**
 * @export
 * @interface IHobbiesService
 */
export interface IHobbiesService {

    /**
     * @returns {Promise<IHobbiesModel[]>}
     * @memberof IHobbiesService
     */
    findAll(): Promise<IHobbiesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IHobbiesModel>}
     * @memberof IHobbiesService
     */
    findOne(code: string): Promise<IHobbiesModel>;

    /**
     * @param {IHobbiesModel} IHobbiesModel
     * @returns {Promise<IHobbiesModel>}
     * @memberof IHobbiesService
     */
    insert(IHobbiesModel: IHobbiesModel): Promise<IHobbiesModel>;

    /**
     * @param {string} id
     * @returns {Promise<IHobbiesModel>}
     * @memberof IHobbiesService
     */
    remove(id: string): Promise<IHobbiesModel>;
}
