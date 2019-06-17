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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

// function get(item) {
//   return { ...item };
// } stretch
