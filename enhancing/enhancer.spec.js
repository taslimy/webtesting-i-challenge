const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("Returns item durability to 100", () => {
      const item = { durability: 5 };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });

  describe("succeed()", () => {
    it("The item's enhancement increases by 1, >= 20", () => {
      const item = { enhancement: 14 };
      expect(enhancer.succeed(item).enhancement).toBe(15);
      // const item = { durability: 5 };
      // expect(enhancer.fail(item).durability).toBe(100);
    });
    it("should not increace enhancement if level is 20 ", () => {
      const item = { enhancement: 20 };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
  });

  // describe("fail()", () => {
  //   it("Returns item durability to 100", () => {
  //     const item = { durability: 5 };
  //     expect(enhancer.fail(item).durability).toBe(100);
  //   });
  // });
});

// succeed
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

// Fail
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
