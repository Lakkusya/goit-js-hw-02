function checkForSpam(str) {
  "use strict";
  // Write code under this line
  return (
    str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")
  );
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
