//returns the obj of the promise class
function setTimeoutPromisified(ms) {
    let p= new Promise(resolve => setTimeout(resolve, ms));
    return p;
    //obj of the promise class
  }
  
  // calling promise class is easy.
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)
  