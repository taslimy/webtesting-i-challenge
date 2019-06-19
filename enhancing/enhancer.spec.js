const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("Returns item durability to 100", () => {
      const item = { durability: 5 };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });

  // succced
  describe("succeed()", () => {
    it("The item's enhancement increases by 1, >= 20", () => {
      const item = { enhancement: 14 };
      expect(enhancer.succeed(item).enhancement).toBe(15);
    });
    it("should not increace enhancement if level is 20 ", () => {
      const item = { enhancement: 20 };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
  });
  it("The durability of the item is not changed", () => {
    const item = { enhancement: 15, durability: 80 };
    expect(enhancer.succeed(item).durability).toBe(80);
  });
  it("adds one to enhancement", () => {
    const item = { enhancement: 15 };
    expect(enhancer.succeed(item).enhancement).toBe(16);
  });

  // fail()
  describe("fail()", () => {
    it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
      const item = { enhancement: 10, durability: 95 };
      expect(enhancer.fail(item).durability).toBe(90);
    });

    it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
      const item = { enhancement: 10, durability: 95 };
      expect(enhancer.fail(item).durability).toBe(90);
    });

    it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17", () => {
      const item = { enhancement: 18 };
      expect(enhancer.fail(item).enhancement).toBe(17);
    });

    it("should not be less than 0", () => {
      const item = { enhancement: 6, durability: 1 };
      expect(enhancer.fail(item).durability).toBe(0);
    });
  });
});

// succeed
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

// Fail
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
