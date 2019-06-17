module.exports = {
  succeed,
  fail,
  repair
  // get stretch
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) item.durability -= 5;
  if (item.enhancement > 15) item.durability -= 10;
  if (item.enhancement > 16) item.enhancement -= 1;
  if (item.durability < 0) item.durability = 0;
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
} //stretch
