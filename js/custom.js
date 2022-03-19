document.getElementById("text").innerText = "Surbhi";

/*********************/
window.onload=function(){
var list = document.getElementById("list"),
button = document.getElementById("shuffle");
function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, randomNum;
    while(--i)
    {
        randomNum = Math.floor(i * Math.random());
        temp = cached[randomNum];
        cached[randomNum] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
} 
document.getElementById("shuffle").onclick = shuffleNodes;

} 


/************/
function sortNum() {

var listNum, i, switching, b, shouldSwitch;
  listNum = document.getElementById("list");
  switching = true;
  while (switching) {
    switching = false;
    b = listNum.getElementsByTagName("Div");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

  
