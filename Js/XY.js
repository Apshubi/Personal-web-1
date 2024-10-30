// 获取 body 元素和头像图片
const body = document.body;
const touxiangImg = document.getElementById("touxaing");

// 检查头像是否正确获取
if (touxiangImg) {
    // 背景图片数组
    const backgrounds = [
        "url('Img/Beijin.png')",
        "url('Img/Beijin1.png')",
        "url('Img/Beijin2.png')", 
    ];

    // 当前背景索引
    let currentBackgroundIndex = 0; // 从第一张开始

    // 设置初始背景
    body.style.backgroundImage = backgrounds[currentBackgroundIndex];

     // 设置初始背景
    body.style.backgroundImage = backgrounds[currentBackgroundIndex];
     body.style.backgroundSize = "cover"; // 确保背景覆盖
     body.style.backgroundRepeat = "no-repeat"; // 不重复背景
     body.style.backgroundPosition = "center"; // 背景居中

    // 点击事件
    touxiangImg.addEventListener("click", function() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    });
} else {
    console.error("头像元素未找到，请检查ID是否正确");
}
