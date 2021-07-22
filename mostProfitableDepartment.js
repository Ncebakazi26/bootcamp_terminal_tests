module.exports = function(salesData){
    var profitable={};
    for(var i=0;i<salesData.length;i++){
    var department=salesData[i].department;
      if(profitable[department]===undefined){
        profitable[department]=0;
      } else{
            profitable[department]+=salesData[i].sales;
    
        }
    
      }
      var departments='';
      var total=0;
      for(var dep in profitable){
        if(profitable[dep]>total){
          departments=dep;
          total = profitable[dep]
        }
    }
      return departments
    
    }