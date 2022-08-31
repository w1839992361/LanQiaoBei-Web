// 初始化省份下拉列表内容
function provinceInit() {
  var province = document.getElementById("param_province");
  province.length = provinces.length;
  for (var i = 0; i < provinces.length; i++) {
    province.options[i].text = provinces[i];
    province.options[i].value = provinces[i];
  }
}

// 选择省份后对应城市下拉列表内容渲染
function provincechange() {
  // TODO：请补充代码实现功能
}

/**
 * 为标签绑定单击事件。
 * 事件效果为：
 * 1、鼠标点击该标签后该标签样式显示 class=active；
 * 2、其他已选标签的 active 样式被移除；
 * 3、将选中的标签对应下标（即选择器为 “mark a” 选中的标签对应的下标）更新到 id=param_mark 的隐藏的 input 中。
 */
function addClick() {
  // TODO：请补充代码实现功能
}
// 提交信息后，读取并显示在页面中
function saveInfo() {
  // TODO：请补充代码实现功能
}

// 切换新增地址和地址管理的显隐
function back() {
  if (document.getElementById("main_title").innerHTML == "地址管理") {
    document.getElementById("main_title").innerHTML = "新增地址";
    document.querySelector(".address-list").style.display = "none";
    document.querySelector(".address").style.display = "block";
    document.querySelector(".user-info").style.display = "block";
  }
}
// 页面加载后的初始化操作
function init() {
  // 初始化省份下拉列表内容
  provinceInit();
  // 为标签绑定单击事件
  addClick();
}

window.onload = function () {
  // 初始化
  init();
};
