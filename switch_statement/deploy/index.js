
document.getElementById("calculate")?.addEventListener("click", function () {
  var list = document.getElementById("main-input").value;
  list = list.replaceAll("", "");
  list = list.split(",");

  list = list.map((item, index) => {
    return parseInt(item);
  });
  var operator = document.getElementById("operator").value;
  switch (operator) {
    case "sum":
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById("output").innerHTML = sum;
      break;

    case "average":
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById("output").innerHTML = sum / list.length;
      break;

    case "min":
      var min = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = list[i];
        }
      }
      document.getElementById("output").innerHTML = min;
      break;

    case "max":
      var myMax = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] > myMax) {
          myMax = list[i];
        }
      }
      document.getElementById("output").innerHTML = myMax;
      break;
    case "median":
      // sort list
      for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
          if (list[i] < list[j]) {
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      var median = 0;
      if (list.length % 2 == 0) {
        median = (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
      } else {
        median = list[Math.floor(list.length / 2)];
      }
      document.getElementById("output").innerHTML = median;
      break;
    case "mode":
        let maxCount=0;
        let mode =0;
        let count = 0;
        for (var i = 0; i < list.length; i++) {
            
            for (var j = 0; j < list.length; j++) {
              if (list[i] === list[j]) {
                    count++
              }
            }
          }
          
        // mode is the index with maximum count
        for (let i = 1; i < list.length; i++) {
            if (count > maxCount) {
                maxCount = count;
                 mode= list[i];
            }
        }

     
      document.getElementById("output").innerHTML = mode;
      break;
    

    case "range":
      var min = list[0];
      var maxi = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = list[i];
        }
        if (list[i] > maxi) {
          maxi = list[i];
        }
      }
      document.getElementById("output").innerHTML = maxi - min;
      break;

    default:
      document.getElementById("output").innerHTML = "Invalid operator";
      break;
  }
});
