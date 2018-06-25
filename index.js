function theBeatlesPlay(am, ai) {
  var blank = []
  for (var i = 0; i < am.length - 1; i++) {
    blank.push(`${am[i]} plays the ${ai[i]}`)
  }
  return blank
}

function johnLennonFacts(arg) {
  const facts = arg
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}
