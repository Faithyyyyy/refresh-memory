// const country = "Nigeria";
// const continent = "Africa";
// let population = 20000000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// population = 30000;
// console.log(population);

const nigeriaPopulation = 200000000;
const halfNigeriaPopulation = nigeriaPopulation / 2;
const finalOccupant = halfNigeriaPopulation / 2;
const finLandPopulation = 60000000;
const averagePopulation = 33000000;
const country = "Nigeria";
const continent = "Africa";
const languaguae = "English";

const description = `${country} is in ${continent}, and its ${Number(nigeriaPopulation).toLocaleString()} people speak ${languaguae}`;
// const description2 = country + "is in " + continent + ", and its" + Number
console.log(finalOccupant);
console.log(nigeriaPopulation + 1);
console.log(nigeriaPopulation > finLandPopulation);
console.log(nigeriaPopulation < averagePopulation);
console.log(description);

const testObject = {
  name: "Faith",
  friends: ["Loveth", "John", "Mary"],
  bestFriend: "loveth",
};
console.log(
  `${testObject.name} has ${testObject.friends.length} friends, and her bestfriend name is  ${testObject.friends[0]}`,
);
