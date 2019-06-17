module.exports = {
  succeed,
  fail,
  repair,
  // get stretch
};

function succeed(item) {
  return { ...item, durability: 100 };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

// function get(item) {
//   return { ...item };
// } stretch
