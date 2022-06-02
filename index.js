//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driver,name) {
    return driver.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase())
      
      
    }
function fuzzyMatch (drivers,requirements) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(requirements.toLowerCase()) === 0
    )
}
console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], "Bo"), "Hey, Look here")

function matchName (drivers,name) {
    return drivers.filter(
    (match) => match.name === name)
    
}
