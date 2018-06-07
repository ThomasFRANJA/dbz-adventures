var app = document.getElementById('sectionRetry-content-title');

var typewriter = new Typewriter('sectionRetry-content-title', {
    loop: true
});

typewriter.typeString('Vegeta!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('altered!')
    .start();
