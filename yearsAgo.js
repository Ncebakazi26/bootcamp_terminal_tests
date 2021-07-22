module.exports = function(years){
    var year= new Date()
    var currentY = year.getFullYear() - years;
    return currentY;
  }