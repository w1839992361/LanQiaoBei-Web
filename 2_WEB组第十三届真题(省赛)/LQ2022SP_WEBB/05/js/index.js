/*TODO：请补充代码*/
var current_form, next_form, previous_form; // 表单域
// 点击下一页的按钮
$(".next").click(function () {
  current_form = $(this).parent();
});
// 点击返回按钮
$(".previous").click(function () {
  current_form = $(this).parent();
});
// 点击提交按钮
$(".submit").click(function () {
  alert("提交成功");
});
