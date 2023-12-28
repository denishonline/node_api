const express = require("express")
const router = express.Router()
const topUpController = require("../controllers/topUpController")
const {
  createTopUpValidation,
} = require("../middlewares/validations/topUpValidations")

/**
 * @swagger
 * /api/topUps:
 *   post:
 *     summary: Create a new top-up
 *     description: Endpoint to create a new top-up entry.
 *     parameters:
 *       - in: body
 *         name: TopUp
 *         description: The top-up object to be created
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             client_code:
 *               type: string
 *               description: The client code associated with the top-up
 *             pas_id:
 *               type: string
 *               description: The PAS ID associated with the top-up
 *             name:
 *               type: string
 *               description: The name associated with the top-up
 *             basket_id:
 *               type: integer
 *               description: The ID of the basket
 *             mode_of_remittance_id:
 *               type: integer
 *               description: The mode of remittance ID
 *             amount:
 *               type: number
 *               description: The amount for the top-up
 *             remarks:
 *               type: string
 *               description: Additional remarks for the top-up
 *     responses:
 *       '201':
 *         description: Successfully created a new top-up
 *       '400':
 *         description: Invalid input or missing required fields
 */

router.post("/", createTopUpValidation, topUpController.createTopUp)

/**
 * @swagger
 * /api/topUps:
 *   get:
 *     summary: Retrieve all top-ups
 *     description: Retrieve a list of all top-ups.
 *     responses:
 *       '200':
 *         description: A list of top-ups retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the top-up
 *                   client_code:
 *                     type: string
 *                     description: The client code associated with the top-up
 *                   pas_id:
 *                     type: string
 *                     description: The PAS ID associated with the top-up
 *                   name:
 *                     type: string
 *                     description: The name associated with the top-up
 *                   basket_id:
 *                     type: integer
 *                     description: The ID of the basket
 *                   mode_of_remittance_id:
 *                     type: integer
 *                     description: The mode of remittance ID
 *                   amount:
 *                     type: number
 *                     description: The amount for the top-up
 *                   remarks:
 *                     type: string
 *                     description: Additional remarks for the top-up
 *                   submitted_at_displ:
 *                     type: string
 *                     format: date-time
 *                     description: The submission date in ISO 8601 format (e.g., '2023-12-31T08:00:00Z')
 *                   switch_letter_received:
 *                     type: boolean
 *                     description: Indicates if a switch letter is received
 *                   approved:
 *                     type: boolean
 *                     description: Indicates if the top-up is approved
 *                   approved_by:
 *                     type: integer
 *                     description: The ID of the user who approved the top-up
 *                   approved_date:
 *                     type: string
 *                     format: date-time
 *                     description: The approval date in ISO 8601 format (e.g., '2023-12-31T08:00:00Z')
 *       '404':
 *         description: No top-ups found
 */
router.get("/", topUpController.getAllTopUps)

/**
 * @swagger
 * /api/topUps/{id}:
 *   get:
 *     summary: Get a top-up by ID
 *     description: Retrieve a specific top-up by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the top-up to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully retrieved the specified top-up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the top-up
 *                 client_code:
 *                   type: string
 *                   description: The client code associated with the top-up
 *                 pas_id:
 *                   type: string
 *                   description: The PAS ID associated with the top-up
 *                 name:
 *                   type: string
 *                   description: The name associated with the top-up
 *                 basket_id:
 *                   type: integer
 *                   description: The ID of the basket
 *                 mode_of_remittance_id:
 *                   type: integer
 *                   description: The mode of remittance ID
 *                 amount:
 *                   type: number
 *                   description: The amount for the top-up
 *                 remarks:
 *                   type: string
 *                   description: Additional remarks for the top-up
 *                 submitted_at_displ:
 *                   type: string
 *                   format: date-time
 *                   description: The submission date in ISO 8601 format (e.g., '2023-12-31T08:00:00Z')
 *                 switch_letter_received:
 *                   type: boolean
 *                   description: Indicates if a switch letter is received
 *                 approved:
 *                   type: boolean
 *                   description: Indicates if the top-up is approved
 *                 approved_by:
 *                   type: integer
 *                   description: The ID of the user who approved the top-up
 *                 approved_date:
 *                   type: string
 *                   format: date-time
 *                   description: The approval date in ISO 8601 format (e.g., '2023-12-31T08:00:00Z')
 *       '404':
 *         description: Top-up with the specified ID not found
 */
router.get("/:id", topUpController.getTopUpById)

/**
 * @swagger
 * /api/topUps/{id}:
 *   put:
 *     summary: Update specific fields of a top-up by ID
 *     description: Endpoint to update specific fields of an existing top-up entry by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the top-up to update
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Fields to be updated in the top-up
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             client_code:
 *               type: string
 *               description: The updated client code associated with the top-up
 *             pas_id:
 *               type: string
 *               description: The updated PAS ID associated with the top-up
 *             name:
 *               type: string
 *               description: The updated name associated with the top-up
 *             basket_id:
 *               type: integer
 *               description: The updated ID of the basket
 *             mode_of_remittance_id:
 *               type: integer
 *               description: The updated mode of remittance ID
 *             amount:
 *               type: number
 *               description: The updated amount for the top-up
 *             remarks:
 *               type: string
 *               description: Updated additional remarks for the top-up
 *     responses:
 *       '200':
 *         description: Successfully updated the specific fields of the top-up
 *       '400':
 *         description: Invalid input or missing required fields
 *       '404':
 *         description: Top-up not found
 */

router.put("/:id", topUpController.updateTopUp)

/**
 * @swagger
 * /api/topUps/{id}:
 *   delete:
 *     summary: Delete a top-up by ID
 *     description: Delete an existing top-up by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the top-up to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Top-up deleted successfully
 *       '404':
 *         description: Top-up with the specified ID not found
 */

router.delete("/:id", topUpController.deleteTopUp)

module.exports = router
