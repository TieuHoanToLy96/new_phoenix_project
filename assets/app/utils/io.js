const inspect = (obj, label) => {
    console.log(`|> ${label ? label : "Inspect"}`, obj)
    return obj
  }
  
  const puts = str => {
    console.log(str)
    return str
  }
  
  module.exports = {
    inspect,
    puts
  }
  