const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const youtubeController = require('../controllers/youtubeController');

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: User account management
 */

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Get all accounts
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: List of accounts
 */

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get an account by ID
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account details
 *       404:
 *         description: Account not found
 */

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Update an account
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated account details
 *       404:
 *         description: Account not found
 */

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Delete an account
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Account deleted successfully
 *       404:
 *         description: Account not found
 */

/**
 * @swagger
 * tags:
 *   name: YouTube
 *   description: YouTube channel management
 */

/**
 * @swagger
 * /youtube:
 *   post:
 *     summary: Create a new YouTube record
 *     tags: [YouTube]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - channel
 *               - url
 *               - requiredSubscriber
 *               - requiredViews
 *               - requiredWatchTime
 *             properties:
 *               channel:
 *                 type: string
 *               url:
 *                 type: string
 *               requiredSubscriber:
 *                 type: number
 *               completedSubscriber:
 *                 type: number
 *               requiredViews:
 *                 type: number
 *               completedViews:
 *                 type: number
 *               requiredWatchTime:
 *                 type: number
 *               completedWatchTime:
 *                 type: number
 *               isCompletedWork:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: YouTube record created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /youtube:
 *   get:
 *     summary: Get all YouTube records
 *     tags: [YouTube]
 *     responses:
 *       200:
 *         description: List of YouTube records
 */

/**
 * @swagger
 * /youtube/{id}:
 *   get:
 *     summary: Get a YouTube record by ID
 *     tags: [YouTube]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: YouTube record details
 *       404:
 *         description: YouTube record not found
 */

/**
 * @swagger
 * /youtube/{id}:
 *   put:
 *     summary: Update a YouTube record
 *     tags: [YouTube]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               channel:
 *                 type: string
 *               url:
 *                 type: string
 *               requiredSubscriber:
 *                 type: number
 *               completedSubscriber:
 *                 type: number
 *               requiredViews:
 *                 type: number
 *               completedViews:
 *                 type: number
 *               requiredWatchTime:
 *                 type: number
 *               completedWatchTime:
 *                 type: number
 *               isCompletedWork:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated YouTube record details
 *       404:
 *         description: YouTube record not found
 */

/**
 * @swagger
 * /youtube/{id}:
 *   delete:
 *     summary: Delete a YouTube record
 *     tags: [YouTube]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: YouTube record deleted successfully
 *       404:
 *         description: YouTube record not found
 */

router.post('/accounts', accountController.createAccount);
router.get('/accounts', accountController.getAccounts);
router.get('/accounts/:id', accountController.getAccountById);
router.put('/accounts/:id', accountController.updateAccount);
router.delete('/accounts/:id', accountController.deleteAccount);

router.post('/youtube', youtubeController.createYouTube);
router.get('/youtube', youtubeController.getAllYouTube);
router.get('/youtube/:id', youtubeController.getYouTubeById);
router.put('/youtube/:id', youtubeController.updateYouTube);
router.delete('/youtube/:id', youtubeController.deleteYouTube);

module.exports = router;