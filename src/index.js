module.exports = function check(str, bracketsConfig) {
  let arrCountPos = [];
  let arrCountNeg = [];
  let arrKeys = [];
  let subCount = 0;
  let arrSubKeys = [];
  for (let i=0; i < bracketsConfig.length; i++)
  {
    arrCountPos[i] = bracketsConfig[i][0] ;
    arrCountNeg[i] = bracketsConfig[i][1];
    arrKeys[i] = 0;
    arrSubKeys[i] = 0;
  }
  for (let i=0; i < str.length; i++)
  {
    for (let j=0; j < arrKeys.length; j++) { 
      if (arrKeys[j] < 0) return false;
    }    
    for (let j=0; j < arrCountPos.length; j++) {
      if (str[i] === arrCountPos[j]) arrKeys[j]++;
    }    
    for (let j=0; j < arrCountNeg.length; j++) {
      if (str[i] === arrCountNeg[j]) arrKeys[j]--;
      //-------------------------------------------
    }      
  }
  for (let i=0; i < arrKeys.length; i++)
  {
    if (arrKeys[i] != 0) return false;
    else return true;
  }
}
