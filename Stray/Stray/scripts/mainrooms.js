// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.container');

    if (String(localStorage.getItem('overlayHidden')) == 'true') {
        overlay.style.display = 'none';
        container.style.display = 'block';
    } else {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
        overlay.addEventListener('click', function() {
        
        overlay.style.opacity = '0';
        setTimeout(()=>{overlay.style.display = 'none';},3000)
        container.style.display = 'block';
        localStorage.setItem('overlayHidden', 'true')
        setTimeout(()=>{
            setTimeout(()=>{showDialog2('那是...爸爸...？',1.5)},1500)
            showDialog2('呜...头好疼...',2);
        },1500)
        

    })};
});


function bathroomDoorButton(){
    let dadFlag = Number(localStorage.getItem('dadConversationFlag'))
    let flashFlag = Number(localStorage.getItem('flashlightConversationFlag'))
    if (dadFlag == 'undefined' || dadFlag <= 3){showDialog2('先去看看爸爸吧...'); return};
    if (flashFlag == 'undefined' || flashFlag < 0){showDialog2('还没必要去厕所吧...'); return};
    location.href='bathroom.html'
}

function bedroomDoorButton(){
    let dadFlag = Number(localStorage.getItem('dadConversationFlag'))
    if (dadFlag == 'undefined' || dadFlag <= 3){showDialog2('先去看看爸爸吧...'); return};
    location.href='room.html'
}

function dadButtons(){
    let convFlag = Number(localStorage.getItem('dadConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    if (convFlag > 6 && localStorage.getItem('getFlashlightFlag') == 'true'){
        showDialog2('爸爸还是没醒...')
    }
    else{switch (convFlag){
        case 1: showDialog2('爸爸？'); break;
        case 2: showDialog2('爸爸，醒醒...'); break;
        case 3: showDialog2('爸爸...？'); break;
        case 4: showDialog2('*推*'); break;
        case 5: showDialog2('爸爸！'); break;
        case 6: showDialog2('没有反应...'); break;
        default: showDialog2('先去别的地方看看吧，一会爸爸应该就醒了。'); break;
    }}
    localStorage.setItem('dadConversationFlag', convFlag.toString())
}

function flashlightButton(){
    if (localStorage.getItem('getFlashlightFlag') == 'true'){
        showDialog2('先把手电筒搁到这吧。需要用的时候我会过来拿的。')
        return;
    }
    if (localStorage.getItem('flashlightStoolFlag') == 'true'){
        showPopupWithImage('手电筒','img/stuff/flashlight.png','拿到手电筒了！')
        localStorage.setItem('getFlashlightFlag', 'true')
        return;
    }
    if (localStorage.getItem('stoolFlag') == 'mainroom'){
        showDialog2('把凳子拖到手电筒下面就能够到了！')
        return;
    }
    let convFlag = Number(localStorage.getItem('flashlightConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    switch (convFlag){
        case 1: showDialog2('喔，那有一把手电筒...'); break;
        case 2: showDialog2('够不到...太高了...'); break;
        default: showDialog2('我记得厕所有一把凳子，登到凳子上应该就能够到了。'); break;
    }
    localStorage.setItem('flashlightConversationFlag', convFlag.toString())
}

function corridorButton(){
    
    if (String(localStorage.getItem('getKeyFlag')) == 'true'){
        if (String(localStorage.getItem('corridorChangedFlag')) == 'true') {location.href='corridor2.html';return}
        else {location.href='corridor.html';return}
    }
    let dadFlag = Number(localStorage.getItem('dadConversationFlag'))
    let convFlag = Number(localStorage.getItem('corridorConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1

    if (dadFlag == 'undefined' || dadFlag <= 3){showDialog2('先去看看爸爸吧...'); return};

    switch (convFlag){
        case 1: showDialog2('没有钥匙...'); break
        default: showDialog2('妈妈的柜子底下应该有一把钥匙。'); break;
    }
    localStorage.setItem('corridorConversationFlag', convFlag.toString())
}