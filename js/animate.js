// 把你的动画元素选择器改成你自己的
const myElement = document.querySelector('loader'); 
// 或者用 id： document.getElementById('myAnimation')

document.addEventListener('click', function handler() {
    // 1. 触发淡出
    myElement.classList.add('fade-out-on-click');
    
    // 2. 淡出完成后彻底隐藏
    myElement.addEventListener('animationend', () => {
        myElement.style.display = 'none';
        // 或者 myElement.remove();   // 完全删除元素
    }, { once: true });

    // 只允许点击一次
    document.removeEventListener('click', handler);
}, { once: true });