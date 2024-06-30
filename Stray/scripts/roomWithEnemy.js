
/* window.onload = function () {
    if (localStorage.getItem('sequenceFlag') == '' || localStorage.getItem('getFoodFlag') == null) {
        showDialog2('...妈妈..?')
        localStorage.setItem('sequenceFlag', 'notStarted')
    }
}
 */
document.addEventListener('DOMContentLoaded', function() {
    /* if (localStorage.getItem('sequenceFlag') != 'started'){
        location.href='room.html'
    } */
    showDialog2('妈妈！')
});

function momButtons(){
    let convFlag = Number(localStorage.getItem('momConversationFlag'))
    if (convFlag == 'undefined'){convFlag = 0};
    convFlag = convFlag + 1
    switch (convFlag){
        case 4: {
            document.getElementById('myAudio').play()
            showDialog2('...！')
            break;
            }
        case 5: {showDialog2('有人来了！',5); break;}
    default: showDialog2('快藏起来！',5); break;
    }
    localStorage.setItem('momConversationFlag', convFlag.toString())
}

function hideButtonS(){
    let convFlag = Number(localStorage.getItem('momConversationFlag'))
    if (convFlag < 4) {return};
    removeOldDialog()
    let hideBlock = document.getElementById('overlay')
    hideBlock.style.display='block'
    setTimeout(()=>{hideBlock.style.opacity=1},10)
    setTimeout(()=>{localStorage.setItem('sequenceFlag','justEnded');window.location.href='room.html'},9000)
}