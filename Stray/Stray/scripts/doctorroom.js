document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('getMedicinesFlag') == 'true') {return}
    document.querySelectorAll('.medicine').forEach(zone => {zone.style.display = 'block'})
    if (localStorage.getItem('stoolFlag') != 'doctorroom'){ showDialog2('这是医生姐姐的房间...') }
});

function corridorButton(){
    if (String(localStorage.getItem('getKeyFlag')) == 'true'){
        if (String(localStorage.getItem('corridorChangedFlag')) == 'true') {location.href='corridor2.html';return}
        else {location.href='corridor.html';return}
    }
}

function bottle1Button(){
    if (localStorage.getItem('getMedicinesFlag') == 'true'){
        showDialog2('。。？？')
        return;
    }
    if (localStorage.getItem('medicinesStoolFlag') == 'true'){
        showDialog2('拿到药了！')
        localStorage.setItem('getMedicinesFlag', 'true')
        document.getElementById('bottle1').style.display='none'
        return;
    }
    if (localStorage.getItem('stoolFlag') == 'doctorroom'){
        showDialog2('把凳子拖到药物下面就能够到了！')
        return;
    }
    showDialog2('够不到...太高了...'); return;
}

function noteButton(){
    if (localStorage.getItem('notesStoolFlag') == 'true'){
        var note = document.getElementById('gameNote');
        var content = document.getElementById('noteContent');
        content.textContent = `任何看到这条便签的人，请赶紧离开这栋公寓。\n \n 敌方已经察觉这里有活口，我作为军医也将被敌方俘虏。\n\n我还有一些仅存的药物，希望可以帮助到你。\n\n为了巴罗马德拉帕的未来，祝您平安好运！`;
        note.style.display = 'block';
        if (String(localStorage.getItem('corridorChangedFlag')) != 'true') {localStorage.setItem('corridorChangedFlag', 'true'); showDialog2("！外面传来了一声巨响！")}
        return
    }
    if (localStorage.getItem('stoolFlag') == 'doctorroom'){
        showDialog2('把凳子拖到纸条下面应该就能看到了！')
        return;
    }
    showDialog2('从这个角度看不见呀...'); return;
}