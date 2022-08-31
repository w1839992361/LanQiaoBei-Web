// 初始化页面效果
let cardList;
let init = () => {
  cardList = [];
  // 根据随机数组生成硬币位置
  let gendercarlist = () => {
    let arr = randomCoin();
    for (let index = 0; index < 9; index++) {
      cardList.push({
        id: index + 1,
        category: `nomoney`,
        name: "空",
      });
    }
    for (let index = 0; index < arr.length; index++) {
      const item = arr[index];
      cardList[item - 1].category = "money";
      cardList[item - 1].name = "硬币";
    }
    return cardList;
  };
  let content = document.querySelector("#content ul");
  cardList = gendercarlist();
  content.innerHTML = "";
  for (let index = 0; index < cardList.length; index++) {
    let oneCard = cardList[index];
    content.innerHTML += `<li> 
                  <a href="javascript:void(0)">
                      <div class="z">
                         <img class='cup' src="./images/cup.svg">
                        
                          <sup>${index + 1}</sup>
                      </div>
                        ${
                          oneCard.category == "money"
                            ? `<img class='coin' src="./images/coin.svg">`
                            : ""
                        }
                  </a>
              </li>`;
  }
};

init();

let gameText = document.querySelector("#gameText");
let btnbox = document.querySelector(".btn");
let select_input = document.getElementById("killoutInput");
let ul = document.getElementsByTagName("ul")[0];
let flag = true;

// 点击确定按钮的逻辑
btnbox.addEventListener("click", function () {
  flag = !flag;
  if (flag) {
    this.innerHTML = "确定";
    select_input.value = "";
    gameText.innerHTML = ``;
    init();
  } else {
    this.innerHTML = "重置";
    let select_values = select_input.value;
    let res = findNum(select_values); // 找到输入值中 1-9 的数字
    let result = cardList.filter((item) => res.includes(item.id));
    let length = result.filter((item) => item.category == "money").length;
    if (length) {
      gameText.innerHTML = `恭喜你，找到了${length}个硬币`;
    } else {
      gameText.innerHTML = `很遗憾，没有找到硬币`;
    }
    // 打开杯子
    annimateCard(select_values);
  }
});
// 给选择的杯子添加动画
function annimateCard(select_values) {
  let domz = document.querySelectorAll(".z");
  let res = findNum(select_values);
  for (let index = 0; index < domz.length; index++) {
    if (res.includes(index + 1)) {
      domz[index].classList.add("rotatey30");
    }
  }
}
