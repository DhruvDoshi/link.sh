const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(express.static('./public'));
// app.get('/', (req, res) =>{
//     res.json({
//         message:"link.sh -- Short your URLs here!!"
//     });
// });



// app.get('/url/:id', (req, res) =>{
//     //TODO: Getting the short url by id 
    
// });

// app.get('/:id', (req, res) =>{
// //TODO: Redirect to the URLs

// });

// app.get('/url', (req, res) =>{
//     //TODO: create a shorter url 
    
// });


const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})