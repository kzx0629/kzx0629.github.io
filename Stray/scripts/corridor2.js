document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('seenFlag') != 'true'){
        localStorage.setItem('seenFlag', 'true')
        showDialog2('...从上面掉下来好多...！')
        setTimeout(()=>{showDialog2('右边也有人吗...')},2000)
    }

});

function downButton(){

    if (String(localStorage.getItem('getKey')) == 'true'){
        location.href='storeroom.html';return
    }
    showDialog2('没有钥匙...');

}