console.log("File Con")

const textarea=document.querySelector('textarea');
fileNameInput=document.querySelector('.file-name input');
selectMenu=document.querySelector('.select-menu select');
saveBtn=document.querySelector('.save-btn');

// console.log(selectMenu);

selectMenu.addEventListener('change',()=>{
    let selecetedOption=selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText=`Save As ${selecetedOption.split(" ")[0]} File`;
    // console.log(selecetedOption.split(" ")[0])
})

saveBtn.addEventListener('click',()=>{
    const blob =new Blob([textarea.value],{type: selectMenu.value})
    const fileUrl=URL.createObjectURL(blob);
    // console.log(fileUrl);
    const link=document.createElement('a');
    link.download=fileNameInput.value;
    link.href=fileUrl;
    link.click();
})