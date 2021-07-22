module.exports = function (billString){
  var billList= billString.split(",")
  var total=0;
    for(var i=0;i<billList.length;i++){
    var dataType =  billList[i].trim()
      if( dataType==="call"){
      total += 2.75;
      }
       if(dataType ==="sms"){
      total += 0.65;
      }
  }
  return 'R'+total.toFixed(2);
  }