var parentElem = document.getElementById('feedback-content')
var btn = document.getElementById('feedback_call');

function insert() {
var newFeedback = document.createElement('div');
newFeedback.className = "people";
newFeedback.innerHTML = "<div class='img'><img src='./img/people2.jpg'></div><div class='img-content'>124124</div>";
parentElem.appendChild(newFeedback);

}