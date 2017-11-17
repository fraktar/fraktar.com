// This function is called immediately
(function () {
  // Separate our code in case we need to do other things
  handleLinks()
})()

function handleLinks () {
  var host = location.hostname // 'www.jry.io'
  var allLinks = document.querySelectorAll('a') // NodeList of all <a> elements
  for (var i = 0; i < allLinks.length; ++i) {
    // links that are not from our owns site and are not empty
    if (allLinks[i].hostname !== host && allLinks[i].hostname !== '') {
      allLinks[i].target = '_blank'
    }
  }
}