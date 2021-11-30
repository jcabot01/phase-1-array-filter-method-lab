const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//1 
function findMatching(drivers, name) {
  const newDrivers = drivers.filter(function(drivers){return drivers.toLowerCase() === name.toLowerCase()});
    return newDrivers;
}

//2
function fuzzyMatch(array, string){
  return array.filter(function(nameSearch) {
      return nameSearch.startsWith(string)
  })
}
//3
function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name;
})
}
/*
    it('returns an empty array if there is no match', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Susan')).to.eql([]);
    });
  });


* `matchName` - This function takes an array of `driver` objects and a `string`
  as arguments. Each `driver` object has two properties: `name` and `hometown`.
  The function should return each element whose `name` property matches the
  provided `string` argument.
  */