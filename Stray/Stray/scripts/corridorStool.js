window.onload = function () {
    //获取drag元素
    let drag = document.getElementById("draggable");
    //获取localStorage中的值
    let stoolX = localStorage.getItem('corridorStoolX') || '48px';
    let stoolY = localStorage.getItem('corridorStoolY') || '342px';
    
    const zones = document.querySelectorAll('.stoolZone');

    if (localStorage.getItem('stoolFlag') != 'corridor') {
        return
    }
    zones.forEach(zone => {zone.style.display = 'block'})



    drag.style.left = stoolX;
    drag.style.top = stoolY;
    drag.style.position = "absolute";
    drag.style.display = "block"
    drag.style.opacity = 1
    drag.style.zIndex = 1001
    //当鼠标按下时
    drag.onmousedown = function (e) {
        //做到浏览器兼容
        e = e || window.event;
        // 计算鼠标点击位置相对于元素左上角的左边和上边距离
        let diffX = e.clientX - drag.offsetLeft;
        let diffY = e.clientY - drag.offsetTop;
        //当拉着box移动时
        document.onmousemove = function (e) {
            // 浏览器兼容
            e = e || window.event;
            // 元素的 clientX 和 clientY 默认是以元素左上角位置来计算的，这里需要向左向上同时减去鼠标点击的位置差，从而可以保证鼠标始终显示在拖拽元素时的位置
            let left = e.clientX - diffX;
            let top = e.clientY - diffY;
            // 边界处理，防止超出各个边
            let leftLimit = 0
            let rightLimit = 740
            let topLimit = 340
            let downLimit = 540

            if (left < leftLimit) {
                left = leftLimit;
            } else if (left > rightLimit) {
                left = rightLimit;
            }
            if (top < topLimit) {
                top = topLimit;
            } else if (top > downLimit) {
                top = downLimit;
            }
            // 实时给元素定位赋值
            drag.style.left = left + "px";
            drag.style.top = top + "px";
        };

        // 当鼠标抬起时
        document.onmouseup = function (e) {
            this.onmousemove = null;
            this.onmouseup = null;
            localStorage.setItem('corridorStoolX', drag.style.left)
            localStorage.setItem('corridorStoolY', drag.style.top)
            zones.forEach(zone => {
                const rect = zone.getBoundingClientRect();
                const draggableRect = drag.getBoundingClientRect();
                if (draggableRect.left < rect.right && draggableRect.right > rect.left && draggableRect.top < rect.bottom && draggableRect.bottom > rect.top) {
                    switch (zone.id){
                        case 'mainroom': {
                            localStorage.setItem('stoolFlag', 'mainroom')
                            drag.onmousedown=null
                            location.href='index.html'
                            break}; 
                        case 'doctorroom': {
                            localStorage.setItem('stoolFlag', 'doctorroom')
                            location.href = 'doctorroom.html'
                            break};
                        default :{}
                        }
                }
            })
        };
    };
};