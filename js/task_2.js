const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
  return pricePerWord * message.split(" ").length;
}; // Write code in this line

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
console.log(calculateEngravingPrice("Uno", 100));
