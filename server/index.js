const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

function randomReply(res, replyList) {
  let randomIndex = Math.floor(Math.random() * replyList.length);
  let randomMessage = replyList[randomIndex];

  res.status(200).send(randomMessage);
}

const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",
"Your Javascript skills are stellar.",
];

app.get("/api/compliment", (req, res) => {
  // choose random compliment
  // let randomIndex = Math.floor(Math.random() * compliments.length);
  // let randomCompliment = compliments[randomIndex];

  // res.status(200).send(randomCompliment);
  randomReply(res, compliments)
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Courtesy begins in the home.",
					 "Don’t just spend time. Invest it.",
					 "Don’t just think, act!",
           "Now is a good time to sell stock.",
           "Pennies from heaven find their way to your doorstep this year!",
  ];

  // choose random compliment
  randomReply(res, fortunes)
});

function addNewCompliment(event){
  event.preventDefault()
  const textarea = "Test text"
  const newComplimentText = document.querySelector('textarea').value
  compliments.push(addNewCompliment)
  console.log(compliments)
}

app.post("/api/compliment", (req, res) => {
  compliments.push(req)
  // let newChar = {...req.body, id}
  // newChar.likes = newChar.likes.slice(0, 3)
  // characters.unshift(newChar)
  // res.status(200).send(characters)
})

app.listen(4000, () => console.log("Server running on 4000"));
