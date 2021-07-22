module.exports = function(regNum){
    var registration = regNum.split(",")
      var paarlRegList = [];
      for(var i=0;i<registration.length;i++){
        var reg = registration[i].trim()
      if(reg.startsWith("CJ")){
        paarlRegList.push(reg);
      }
    }
    return paarlRegList.length;
    }
