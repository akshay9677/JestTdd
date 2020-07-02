function stringLiterals(name) {
    var str = name;
    var str2 = str;
     str = '';
    return (str === str2);
  };

function numberLiterals(num){
  var number = num;
  var number2 = number;
  var number = 2;
  return (number === number2)
}

  
  function complexValueObject(st){
      var obj = {name: st};
      var objA = obj;
      obj.name = 'hello'
     return (obj === objA)
      
  };

  function complexValueObjects(strg){
    var obj = {name: strg}
    return obj;
  }
  
  describe('Primary and Complex values copying mechanism',()=>{
    test('Complex Value Object',()=>{
      expect(complexValueObject('Akshay')).toBe(true);
    });
    test('String Primary Value',()=>{
        expect(stringLiterals('Akshay')).toBeFalsy();
    });
    test('Number Primary Value',()=>{
      expect(numberLiterals(21)).toBeFalsy();
    });
    test('Complex value equality',()=>{
      expect(complexValueObjects('akshay')).toEqual({name: 'akshay'});
    })
  })
  



  