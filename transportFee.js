module.exports = function(shifts){
    if (shifts.startsWith ('morning')){
      return 'R20'
      }else if(shifts.startsWith('afternoon')){
        return 'R10'
  }
  else{
    return 'free'
  }
  }