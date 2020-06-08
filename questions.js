//PLS CLARIFY HOW COME THE FIRST QUESTION SHOWS UP DESPITE NO "data" EVENT BEING PASSED. PERHAPS THERE IS SOMETHING ABOUT THE DATA EVENT YOU DO NOT UNDERSTAND

var questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
]
var answers = []
function ask(i) {
  process.stdout.write(`\n\n${questions[i]} >`)
}
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})
process.on("exit", function () {
  process.stdout.write(
    `\n\n\n${answers[1]} ${answers[0]}, ${answers[2]} is awesome!\n\n`
  )
})
ask(0)
