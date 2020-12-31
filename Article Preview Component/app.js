const shareButton = document.querySelector('.shareButton');
const shareBox = document.querySelector('.shareBox');
const shareBoxArrow = document.querySelector('.shareBoxArrow');

shareButton.addEventListener('click', function(){
    if(shareBox.style.display === 'none'){
        shareBox.style.display = 'flex';
        shareBoxArrow.style.display = 'flex';
    }
    else{
        shareBox.style.display = 'none';
        shareBoxArrow.style.display = 'none';
    }
    
})