const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> { console.log("!!!"); res.json({username:'bryan'}) } );


app.post('add', (req, res) => {
	console.log("!!")
})
app.listen(port, ()=>{
    console.log(`express is running on ${port}!!`);
})