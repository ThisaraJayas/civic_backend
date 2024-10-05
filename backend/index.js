import express from "express";
import db from './firebaseConfig.cjs'

const app =express()
app.use(express.json())

//test
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
