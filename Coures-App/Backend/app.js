const express=require('express');
const cors=require('cors');
const app=new express();
app.use(cors())
const morgan=require('morgan')
app.use(morgan('dev'));
// const couresRoutes=require("./routes/couresRoutes");
const couresRoutes = require('./routes/courseRoutes');
app.use('/course',couresRoutes)

require('dotenv').config();
const PORT=process.env.PORT
require('./db/conection');






app.listen(PORT,()=>{
    console.log(`Server is running on PORT${PORT}`);
})