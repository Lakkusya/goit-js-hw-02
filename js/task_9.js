function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  const loginValid = login.length >= min && login.length <= max;
  return loginValid;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  const loginUnique = allLogins.includes(login);
  if (loginUnique === true) {
    return false;
  }
  return true;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === true) {
    allLogins.push(login);
    return (message = SUCCESS);
  }
  return (message = REFUSAL);
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
