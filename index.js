function theBeatlesPlay(am, ai) {
  var blank = []
  for (var i = 0; i < am.length - 1; i++) {
    var name = am[i]
    var inst = ai[i]
    blank.push(`${am[i]} plays the ${ai[i]}`)
  }
  return blank
}
