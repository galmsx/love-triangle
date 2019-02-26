/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var number=0;
  for(var i=0;i<preferences.length;i++)
  if((i+1)!=preferences[i]&&preferences[preferences[preferences[i]-1]-1]==i+1) number++;
  return number/3;
};
