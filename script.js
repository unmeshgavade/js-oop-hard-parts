const user3 = Object.create(null)

/* Solution 1: 
function userCreator (name, score) {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = function () {
    newUser.score++
  }
  return newUser
}

const user1 = userCreator('Phil', 3)
const user2 = userCreator('Julia', 5)

user1.increment()
console.log(user1)
*/

