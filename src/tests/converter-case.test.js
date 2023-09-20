const { converterCamelCaseParaSnakeCase } = require("../utils");

describe(converterCamelCaseParaSnakeCase.name, () => {
  test("testTop deve retornar test_top", () => {
    expect(converterCamelCaseParaSnakeCase("testTop")).toBe("test_top");
  });
});
