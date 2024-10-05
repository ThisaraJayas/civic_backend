import express from 'express';
/*
  ==============================================
  Modification History:
  - Programmer: Thisara
    Date: 5/10/2024
    Message: Created folder and structure of project
  ==============================================
*/

const router = express.Router();

router.get('/', scrapListing);

export default router;