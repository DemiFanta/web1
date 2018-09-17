// var script = document.createElement('script');
// script.src = 'jquery.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
var time;
var url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station?serviceKey=1234567890&stationId=209000034';



function myCallback(data) {
  console.log(data);
  $(data).find('busArrivalList').each(function() {
    var num = $(this).find('routeId').text();
    if (num == '234000130') {
      time = $(this).find('predictTime1').text();
      console.log(this);
    }
  });
}
function checkTime() {
  document.getElementById('time').innerHTML = "1303 "+ time + "min left";
}

$(document).ready(function() {
  $.ajax({
    crossOrigin: true,
    url: url,
    dataType: "xml",
    success: myCallback
  });
  var el = document.getElementById('button1');
  if (el) {
    document.getElementById('button1').addEventListener('click', checkTime);
  } else {
    console.log("button1 == null");
  }
});
