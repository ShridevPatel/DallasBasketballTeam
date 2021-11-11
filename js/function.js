function validate(attempts, made, type)
{
  if(attempts != "" && made != "")
  {
    attempts = parseInt(attempts);
    made = parseInt(made);
    if(attempts >= made)
    {
      successRate(attempts, made, type);
    }
    else if(attempts < made)
    {
      var elem = document.getElementById(type);
      elem.style.width = "100%";
      elem.style.backgroundColor = "red";
      elem.innerHTML = "Cannot be more than attempts.";
    }
    overallRating();
  }
  else
  {
    clear(type);
  }
  
}
function successRate(attempts, made, type) {
    var elem = document.getElementById(type);
    var width = ((made/attempts) * 100).toFixed(1) + "%";
    elem.innerHTML = width;
    elem.style.width = width;
    elem.style.backgroundColor = "#4f97da";
    
}
function clear(type)
{
  var elem = document.getElementById(type);
  elem.innerHTML = "";
  elem.style.width = "0%";
  elem.style.backgroundColor = "#4f97da";
  
}
function overallRating()
{
  var elem1 = document.getElementById("twptBar").innerText;
  var elem2 = document.getElementById("tptBar").innerText;
  var elem3 = document.getElementById("ftBar").innerText;
  var setElem = document.getElementById("oBar");
  var total = 0;
  var count = 0;
  var width = 0 + "%";
  const arr = [elem1, elem2, elem3];
  for(var e of arr)
  {
    if(e != "")
    {
      e = e.replace("%", "");
      total += parseInt(e);
      count++
    }
  }
  if(count > 0 && !isNaN(total))
  {
  width = (total / count).toFixed(1) + "%";
  }
  setElem.innerHTML = width;
  setElem.style.width = width;
}
