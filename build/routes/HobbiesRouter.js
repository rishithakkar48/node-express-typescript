"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * GET method route
 * @example http://localhost:PORT/v1/hobbies
 *
 * @swagger
 * /v1/hobbies:
 *   get:
 *     description: Get all stored hobbies in Database
 *     tags: ["hobbies"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of hobbies
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/HobbiesSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.HobbiesComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/hobbies
 *
 * @swagger
 * /v1/hobbies:
 *   post:
 *      description: Create new Hobbies
 *      tags: ["hobbies"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: hobby creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Hobbies'
 *            example:
 *              passionLevels: "Low"
 *              name: "Music"
 *              year : "2021"
 *      responses:
 *        201:
 *          description: return created hobby record
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Hobbies'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.HobbiesComponent.create);
/**
 * GET method route
 * @example http://localhost:PORT/v1/hobbies/:id
 *
 * @swagger
 * /v1/hobbies/{id}:
 *  get:
 *    description: Get hobby by hobbyId
 *    tags: ["hobbies"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique hobbyId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return hobby by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/Hobbies'
 */
router.get('/:id', components_1.HobbiesComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/hobbies/:id
 *
 * @swagger
 * /v1/hobbies/{id}:
 *  delete:
 *    description: Delete hobby by hobbyId
 *    tags: ["hobbies"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique hobbyId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted hobby
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/Hobbies'
 */
router.delete('/:id', components_1.HobbiesComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=HobbiesRouter.js.map