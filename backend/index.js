import express from "express";
import db from './firebaseConfig.cjs'

/*
  IMPORTANT: Do not implement endpoints here.
  
  I've structured the project with two folders: 'controllers' and 'routes'.
  
  - Place the core logicinside the 'controllers' folder.
  - Define all the endpoints (GET, POST, PUT, DELETE) inside the 'routes' folder.
  - Use app.use() to link the routes to the application.

  ==============================================
  Modification History:
  - Programmer: Thisara
    Date: 5/10/2024 at 10.50pm
    Message: Created folder and structure of project
  ==============================================
*/



const app =express()
app.use(express.json())


//JUST TO TEST (BUT DONT IMPLEMENT ENDPOINT HERE)
app.post('/api/create', async (req, res) => {
    try {
        const newItem = req.body;
        const ref = await db.collection("items").add(newItem);
        res.status(201).json({ id: ref.id, ...newItem });
    } catch (error) {
        res.status(500).json({error});
    }
});


const port=5000
app.listen(port,()=>{
    console.log(`Listen On Port ${port}`);
    
})
