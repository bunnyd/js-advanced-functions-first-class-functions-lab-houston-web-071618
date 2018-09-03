const returnFirstTwoDrivers = function(drivers) {
  // console.log(drivers.slice(0, 2))
  return firstDrivers = drivers.slice(0, 2);
};
 const returnLastTwoDrivers = function(drivers) {
   // console.log(drivers.slice(-2))
  return firstDrivers = drivers.slice(-2);
};
 selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 const createFareMultiplier = function(value) {
  return function (multiplier) {
    return value * multiplier;
  };
}
 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);
 const selectDifferentDrivers = function(drivers, selection) {
  return selection(drivers);
}
