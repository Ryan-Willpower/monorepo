import { getRyanName } from "../src";

describe("utility function test", () => {
  describe("getRyanName function", () => {
    it("should return name `ryan`", () => {
      const name = getRyanName();

      expect(name).toBe("ryan");
    });
  });
});
