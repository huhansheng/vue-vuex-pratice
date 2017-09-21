// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //缩进采用2个空格
    "indent": [2, 2],
    //换行符编码采用unix编码。尤其是Git应该统一采用unix编码，防止不必要的提交。
    "linebreak-style": [2, "unix"],
    //使用单引号表示字符串
    "quotes": [2, "single"],
    //不能遗漏分号，一个完整代码语句应该以分号结尾
    "semi": [2, "always"],
    //在定义对象或数组时，最后一项不能加逗号
    "comma-dangle": [2, "never"],
    //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
    "comma-spacing": [2, { "before": false, "after": true }],
    //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前和冒号后面都需要一个空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    //如果逗号可以放在行首或行尾时，那么请放在行尾
    "comma-style": [2, "last"],
    //非空数组中不应该有多余的空格
    'array-bracket-spacing': [2, 'never'],
  }
}
