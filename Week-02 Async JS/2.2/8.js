function setTimeoutPromisified(duration){
    return new Promise(function (resolve) {
        setTimeoutPromisified(resolve,duration);
    });
}

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
