module.exports = function(regNumber,loc){
   
      var registration = regNumber.split(",");
    
      var town = [];
      for(var i=0;i<registration.length;i++){
      if (registration[i].trim().startsWith(loc)){
        town.push(registration[i]);
      
    }
      }
      return town.length;
    }