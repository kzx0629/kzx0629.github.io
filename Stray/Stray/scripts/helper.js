function showPopupWithImage(title='', imageUrl='', message='', maxWidth='30%') {
    removeOldDialog()
    const container = document.querySelector('.container');
    container.classList.add('blurred');
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.maxWidth= maxWidth;
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1001';
    if (imageUrl != 'undefined' && imageUrl != ''){
    popup.innerHTML = `<h2>${title}</h2><img src="${imageUrl}" alt="${imageUrl}" style="width: auto; height: auto; max-width:100%"><p>${message}</p>`;}
    else {
        popup.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
    }

    const closeButton = document.createElement('button');
    closeButton.innerText = '关闭';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
        container.classList.remove('blurred');
    };
    popup.appendChild(closeButton);

    document.body.appendChild(popup);
}

function showDialog(title='',message) {
    const container = document.querySelector('.container');
    /* container.classList.add('blurred'); */
    const Dialog = document.createElement('div');
    Dialog.style.position = 'fixed';
    Dialog.style.top = '90%';
    Dialog.style.left = '50%';
    Dialog.style.transform = 'translate(-50%, -50%)';
    Dialog.style.backgroundColor = '#f9f9f9';
    Dialog.style.border = '1px solid #ccc';
    Dialog.style.border_radius = '10px';
    Dialog.style.padding = '20px';
    Dialog.style.borderRadius = '10px';
    Dialog.style.boxShadow = '0 0 10px #f0f0f0';
    Dialog.style.zIndex = '1000';
    Dialog.style.height = '50px';
    if (title != 'undefined' && title != ''){
        Dialog.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
    }
    else {
        Dialog.innerHTML = `<p>${message}</p>`;
    }
    

    const closeButton = document.createElement('button');
    closeButton.innerText = '关闭';
    closeButton.onclick = function() {
        document.body.removeChild(Dialog);
        /* container.classList.remove('blurred'); */
    };
    Dialog.appendChild(closeButton);

    document.body.appendChild(Dialog);
}

function removeOldDialog(){
    let oldDialog = document.getElementsByClassName('dialog')
    if (oldDialog.length > 0){
        for (i in oldDialog){
        oldDialog[i].hidden = 'true'
    }}
}

function showDialog2(text='',readTime=0) {
    /*const container = document.querySelector('.container');
     container.classList.add('blurred'); */
    removeOldDialog()
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.content = '';
    dialog.innerText = text;
    if (readTime==0){
    readTime = text.length / 4;
    if (readTime < 1.5) {
        readTime = 1.5;
    }
    }

    /* const dialogText = document.createElement('p');
    dialogText.innerText = '这是一个对话框';

    dialog.appendChild(dialogText); */

    document.body.appendChild(dialog);
     setTimeout(() => {
        document.body.removeChild(dialog)
    },readTime * 1000) 
    return dialog
}

function clearsave(){
    localStorage.clear();
    localStorage.setItem('overlayHidden', 'true')
    showDialog2('存档已清除！马上刷新页面...')
    console.log('存档已清除！马上刷新页面...')
    setTimeout(()=>{location.reload()},1000)
}

function clearStoolSave(){
    localStorage.removeItem('bathroomStoolX')
    localStorage.removeItem('bathroomStoolY')
    localStorage.removeItem('stoolFlag')
    localStorage.removeItem('mainroomStoolX')
    localStorage.removeItem('mainroomStoolY')
    localStorage.removeItem('mainroomStoolFlag')
    localStorage.removeItem('flashlightStoolFlag')
    localStorage.removeItem('flashlightConversationFlag')
    showDialog2('存档已清除！马上刷新页面...')
    console.log('存档已清除！马上刷新页面...')
    setTimeout(()=>{location.reload()},1000)
}

function clearItemSave(){
    localStorage.removeItem('getFlashlightFlag')
    localStorage.removeItem('getToiletPaperFlag')
    localStorage.removeItem('getFoodFlag')

    showDialog2('存档已清除！马上刷新页面...')
    console.log('存档已清除！马上刷新页面...')
    setTimeout(()=>{location.reload()},1000)
}