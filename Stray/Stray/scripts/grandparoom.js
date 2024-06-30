function corridorButton(){
    let convFlag = Number(localStorage.getItem('grandpaConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    if (convFlag < 11) {showDialog2('先看看爷爷吧。'); return}
    if (String(localStorage.getItem('corridorChangedFlag')) == 'true') {location.href='corridor2.html';return}
    else {location.href='corridor.html';return}
}

function grandpaButtons(){
    let convFlag = Number(localStorage.getItem('grandpaConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    switch (convFlag){
        case 1: showDialog2('爷爷！'); break;
        case 2: showDialog2('蒂亚戈爷爷：（睁眼）...安妮？'); break;
        case 3: showDialog2('蒂亚戈爷爷：天呐，上帝保佑，你还活着！孩子快过来！'); break;
        case 4: showDialog2('爷爷您流了好多血！'); break;
        case 5: showDialog2('蒂亚戈爷爷：可怜的孩子，爷爷恐怕没有办法陪伴你一起了...'); break;
        case 6: showDialog2('蒂亚戈爷爷：孩子，你的爸爸妈妈怎么样了？'); break;
        case 7: showDialog2('爸爸妈妈怎么叫都叫不醒...'); break;
        case 8: showDialog2('蒂亚戈爷爷：...太遗憾了...'); break;
        case 9: showDialog2('蒂亚戈爷爷：不孩子我是说，你的父母只是太累了想休息一会。'); break;
        case 10: showDialog2('蒂亚戈爷爷：知道的吧，从地下仓库就能逃出去，钥匙就在我的房间里！'); break;
        case 11: showDialog2('蒂亚戈爷爷：...我太累了，你快走吧，去我房间里找找吧！'); break;

        default: showDialog2('去房间里找找钥匙吧。'); break;
    }
    localStorage.setItem('grandpaConversationFlag', convFlag.toString())
}

function sisroomButton(){
    let convFlag = Number(localStorage.getItem('grandpaConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    if (convFlag < 11) {showDialog2('先看看爷爷吧。'); return}
    location.href='daughterbedroom.html'
}