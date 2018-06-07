var text = document.querySelectorAll('.ChoiceGoku-title');


window.addEventListener('load',function(){
text[0].innerHTML = GokuData[0].content;
text[1].innerHTML = GokuData[1].content;
text[2].innerHTML = GokuData[2].content;
})
