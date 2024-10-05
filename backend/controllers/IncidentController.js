/*
  ==============================================
  Modification History:
  - Programmer: Thisara
    Date: 5/10/2024
    Message: Created folder and structure of project
  ==============================================
*/

import db from '../firebaseConfig.cjs'

export const addItem = async (req, res) => {
  
    const newItem = req.body;
    try {
    const ref = await db.collection("items").add(newItem);
    res.status(201).json({ id: ref.id, ...newItem });
  } catch (error) {
    res.status(500).json( error );
  }
};
