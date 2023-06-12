const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// POST api accessed by localhost:3001/authenticate
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put("https://api.chatengine.io/users/",
    {"username": username, "secret": username, "first_name":username},
    {headers:{"private-key":"f9a4a850-b1ef-4f8e-b8ca-b13abfa619f0"}});
    return res.status(r.status).json(r.data);
  }
  catch(err){
    return res.status(err.response.status).json(err.response.data);
  }

});

app.listen(3001);//use port 3001