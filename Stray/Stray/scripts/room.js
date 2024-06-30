document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('sequenceFlag') == 'justEnded') {
        showDialog2('.........')
        localStorage.setItem('sequenceFlag', 'ended')
        return
    }

    let convFlag = Number(localStorage.getItem('momConversationFlag'))
    if (localStorage.getItem('sequenceFlag') == null){
        convFlag = 0
        showDialog2('妈妈...？',3)
        localStorage.setItem('sequenceFlag', 'notStarted')
        localStorage.setItem('getFoodFlag', 'false')
    };
    localStorage.setItem('momConversationFlag', convFlag.toString())

});

function momButtons(){
    let convFlag = Number(localStorage.getItem('momConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    if (localStorage.getItem('sequenceFlag') == 'ended'){
        showDialog2('...')
    }
    else{switch (convFlag){
        case 1: showDialog2('妈妈，醒醒...'); break;
        case 2: showDialog2('*推*'); break;
        case 3: {localStorage.setItem('sequenceFlag', 'started');location.href='roomWithEnemy.html';}; break;
        case 4: showDialog2('妈妈！'); break;
        /* case 5: {showDialog2('妈妈...？'); break;} */
        default: showDialog2('...'); break;
    }}
    localStorage.setItem('momConversationFlag', convFlag.toString())
}

function mainroomButtonS(){
    if (Boolean(localStorage.getItem('momConversationFlag')) == false || Number(localStorage.getItem('momConversationFlag') < 3)) {showDialog2('先把妈妈叫起来吧。'); return;}
    if (7 >= Number(localStorage.getItem('momConversationFlag')) && Number(localStorage.getItem('momConversationFlag')) >= 3 || localStorage.getItem('sequenceFlag') != 'ended') {showDialog2('......'); return;}
    if (localStorage.getItem('getFoodFlag') != 'true'){showDialog2('好饿...先拿点东西吃吧。'); return;}
    if (Boolean(localStorage.getItem('getFoodFlag'))){location.href='index.html'}
}

function food(){
    if (localStorage.getItem('sequenceFlag') == 'notStarted') {return;}
    if (localStorage.getItem('getFoodFlag') != 'true'){showPopupWithImage('零食','images/food.png','这还有一点零食...');localStorage.setItem('getFoodFlag', 'true');return}
    else {showDialog2('零食还剩下了一些...')}
}

function closetButton(){
    if (localStorage.getItem('getFlashlightFlag') == 'true' && localStorage.getItem('getKeyFlag') != 'true') {showPopupWithImage('钥匙','img/stuff/key.png','找到钥匙了！');localStorage.setItem('getKeyFlag', 'true'); return;}
    showDialog2('柜子里有一大堆黑色的衣服...')
}