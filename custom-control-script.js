
document.addEventListener("DOMContentLoaded", () => {
    let playerFrame = document.getElementById("player");
    let playerDetail = playerFrame.contentDocument;
    let target = playerDetail.getElementById('player').getElementsByClassName('ControlBar_module_controlBarWrapper__278effbc')[0];
    target.style.padding = "0 0 300px 0";
});

function myFunction() {
  var x = document.getElementById("myframe");
  var y = x.contentDocument;
  y.body.style.backgroundColor = "red";
}


document.getElementById('player').getElementsByClassName('ControlBar_module_controlBarWrapper__278effbc')[0];


<script></script>