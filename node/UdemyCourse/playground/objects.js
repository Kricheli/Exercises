const Name = "Andrew";
const age = 27;

const person = {
  Name,
  age,
  location: "LA",
};
console.log(person);

const factory = {
  label: "Red Notebook",
  price: 1.5,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

const { label, price, rating } = factory;
console.log(label);
console.log(price);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", factory);
