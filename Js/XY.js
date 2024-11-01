// 获取背景元素、头像图片和段落
const background = document.querySelector(".background");
const touxiangImg = document.getElementById("touxaing");
const paragraph = document.querySelector(".Ngrxx1");

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
    background.style.backgroundImage = backgrounds[currentBackgroundIndex];

    // 文本数组
    const texts = [
        "文字1",
        "文字2",
        "文字3",
    ];

    // 当前文本索引
    let currentTextIndex = 0;

    // 点击事件
    touxiangImg.addEventListener("click", function() {
        background.classList.add("blur"); // 添加模糊效果类

        // 使用 setTimeout 等待模糊完成后再更换背景和文本
        setTimeout(() => {
            // 切换背景
            currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
            background.style.backgroundImage = backgrounds[currentBackgroundIndex];

            // 切换段落内容
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            paragraph.textContent = texts[currentTextIndex]; // 更新为下一个文本
            
            background.classList.remove("blur"); // 移除模糊效果类
        }, 500); // 500ms 与 CSS 中的过渡时间一致
    });
} else {
    console.error("头像元素未找到，请检查ID是否正确");
}

// 页面加载时添加类
window.addEventListener("load", () => {
    document.body.classList.add("loaded"); // 页面加载完成后添加类
});
