module.exports = {
  extend: 'eslint:recommended',
  env: {
    browser: true,
    node: true
  },
  rules: {
    // 允许使用 console（no test）
    'no-console': 'off',

    // 禁用未声明的变量
    'no-undef': 'error',

    // 使用 ===
    'eqeqeq': 'error',

    // 驼峰式命名
    'camelcase': 'error',    

    // 函数名首行大写必须使用new方式调用，首行小写必须用不带 new 方式调用
    'new-cap': 'error',

    // 末尾需要分号
    'semi': ['warn', 'always'],

    // 两个空格缩减
    'indent': ['warn', 2],

    // 使用单引号
    'quotes': ['warn', 'single'],

    // 函数调用时，函数名与括号之间不能有空格
    'no-spaced-func': 'warn',

    // 一行结束后面不要有空格（no test）
    'no-trailing-spaces': 'warn',

    // 注释双斜杆后要有空格（no test）
    'spaced-comment': 'warn',

    // 对象字面量中冒号前面没有空格，后面有空格
    'key-spacing': ['warn', {'beforeColon': false, 'afterColon': true}],

    // 大括号风格
    'brace-style': ['warn', '1tbs'],

    // 函数定义时括号前面要有空格
    'space-before-function-paren': ['warn', 'never'],

    // 小括号里面不要有空格
    'space-in-parens': ['warn', 'never']
  }
};