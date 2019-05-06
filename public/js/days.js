

var numberOfDays = function (startDate) {
    var nowDate = new Date()
    var diff = moment([nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()]).diff(moment([startDate.getFullYear(), startDate.getMonth(), startDate.getDate()]), "days")
    return diff
  }
  
  