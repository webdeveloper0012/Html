import sec from 'crypto-js'
let devMode = true ;
let myKey = 'ALPHABETA';

export function save(key,val) {
  var saveData;
  if(devMode) saveData= JSON.stringify(val);     
  else saveData = sec.AES.encrypt(JSON.stringify(val), myKey).toString();
  localStorage.setItem(key, saveData);
  return null;
}

export function get(key) {   
  try{
    var getData;
    let str = localStorage.getItem(key);
    if(devMode){
      getData = str ;
    }else{
      getData = sec.AES.decrypt(str, myKey).toString(sec.enc.Utf8);
    }
    let val = JSON.parse(getData)
    return val;
  }catch(e){
    return null;
  }
}

export function format() {   
  try{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }catch(e){
  }
}
