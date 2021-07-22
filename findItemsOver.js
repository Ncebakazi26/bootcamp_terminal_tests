module.exports = function(objects,threshold){
  var list=[];
    for (var i=0;i<objects.length;i++){
      if(objects[i].qty > threshold){
        list.push(objects[i]);
    }
    }
    return list;
  }