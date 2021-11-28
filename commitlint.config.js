module.exports = {
  // 继承规则
  extends: ["@commitlint/config-conventional"],
  // 自己的规则
  rules: {
    "type-enum": [
      2, // level（级别），值为0、1、2、，0为禁用规则，1为将warning，2为error
      "always", // Applicable（是否应用），值为always | never，
      [
        "feat",
        "update",
        "fix",
        "refactor",
        "optimize",
        "style",
        "docs",
        "test",
        "chore",
        "perf",
        "revert",
        "build",
      ], // 值 在cz-config.js中定义的
    ],
    "type-case": [0],
  },
};
