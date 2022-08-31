document.addEventListener("DOMContentLoaded", function () {
  const greetingDisplay = document.getElementById("greeting-display");
  const btn = document.getElementById("btn");
  // 点击开始书写按钮
  btn.addEventListener("click", () => {
    show(greetingDisplay);
  });
});

const greetings = [
  "新年快乐!",
  "接受我新春的祝愿,祝你平安幸福",
  "祝你新年快乐,洋洋得意!",
  "新的一年,新的开始;心的祝福,新的起点!",
  "新年好!祝新年心情好,身体好,一切顺心!",
];

// 随机数函数 从 greetings 数组中 随机取值 并作为函数返回值 注意：返回的是数组中的一个值
function writeGreeting() {
  // TODO 待补充代码
}

/*
 * @param {*} greetingDisplay  要显示内容的dom元素
 */
//  show 将 writeGreeting 函数中返回的内容显示在 greetingDisplay 元素中
function show(greetingDisplay) {
  // TODO 待补充代码
}

module.exports = { show, writeGreeting }; // 请勿删除
