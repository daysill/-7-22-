# -7-22-var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var text = document.getElementById('text') 
var ipt = document.getElementById('ipt')
var res;
var newRes;
var random = Math.round(Math.random() * 25);
var count = 0
 window.onkeyup = function (e) {
  var random = Math.round(Math.random() * 25);
  newRes = str[random]
  res = text.innerHTML
  text.innerHTML = newRes
  if(e.keyCode == res.charCodeAt(0)){
   count++;
   ipt.value = '';
  }else{
   alert('game over' + '   ' +'您的得分是'+ ':' + count)
   count = 0;
   ipt.value = '';
  }
 
 }
