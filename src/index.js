users = [{
  id: 'as23',
  nick: 'Octopus',
  firstName: 'John',
  LastName: 'Dou'
}, {
  id: 'as25',
  nick: 'Star',
  firstName: 'Andy',
  LastName: 'Lee'
}, {
  id: 'as77',
  nick: 'Wally',
  firstName: 'Liza',
  LastName: 'Corty'}]



const object = {};
users.forEach(({ id, ...rest }) => (object[id] = { ...rest }));

console.log(object);