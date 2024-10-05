import express from 'express';
import {addItem} from '../controllers/IncidentController.js'
/*
  ==============================================
  Modification History:
  - Programmer: Thisara
    Date: 5/10/2024
    Message: Created folder and structure of project
  ==============================================
*/

const router = express.Router();

router.post('/add', addItem);

export default router;