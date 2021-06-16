function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
easyHTTP.prototype.get = function (url) {
  this.http.open("GET", url, true);

  //the second this (line 15) is function
  //scope, not the parent prototype scope, will not work
  //can be corrected by the ES6 arrow function or the
  //lexical this (shown below)

  // this.http.onload = function () {
  //   if (this.http.status === 200) {
  //     console.log(this.http.responseText);
  //   }

  // In ES5, correct the onload function by setting
  //a let variable to capture the this prototype

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      console.log(self.http.responseText);
    }
  };

  this.http.send();
};
