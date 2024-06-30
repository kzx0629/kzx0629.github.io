function mainroomDoorButton(){
    if (localStorage.getItem('stoolFlag') != 'bathroom'){location.href='index.html';return;}
    let convFlag = Number(localStorage.getItem('mainroomStoolFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    switch (convFlag){
        case 1: showDialog2('我得把凳子带上啊...'); break;
        default: showDialog2('把凳子放到这块地毯上就行了。'); break;
    }
    localStorage.setItem('mainroomStoolFlag', convFlag.toString())
}

function closetButton(){
    if (localStorage.getItem('getFlashlightFlag') == 'true'){
        if (localStorage.getItem('getToiletPaperFlag') == 'true'){
            showDialog2('里面什么都没有了...')
            return;
        }
        else {
            showPopupWithImage('卫生纸','','里面有一卷卫生纸...？')
            localStorage.setItem('getToiletPaperFlag', 'true')
            return;
        }
    }
    showDialog2('柜子里面太黑了，什么都看不见...')
}