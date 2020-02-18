let isVisible = false;
document.querySelector('#burger').addEventListener('click', () => {
    if (!isVisible) {
        document.querySelector('#dropdown').style.display = "flex";
        document.querySelector('#dropdown').style.border = "1px solid #333";
        isVisible = true;
    }
    else{
        document.querySelector('#dropdown').style.display = "none";
        isVisible = false;
    }
    
});