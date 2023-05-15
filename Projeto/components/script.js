const dropdown = document.getElementById('dropdown');
const resizeDiv = document.getElementById('resize');
const hexDiv = document.getElementById('hex');
const ovalDiv = document.getElementById('oval');

dropdown.addEventListener('change', function() {
    if(dropdown.value === 'resize'){
        resizeDiv.style.display = 'flex';
        hexDiv.style.display = 'none';
        ovalDiv.style.display = 'none';
    } 
    else if(dropdown.value === 'hex'){
        resizeDiv.style.display = 'none';
        hexDiv.style.display = 'flex';
        ovalDiv.style.display = 'none';
    } 
    else if(dropdown.value === 'oval'){
        resizeDiv.style.display = 'none';
        hexDiv.style.display = 'none';
        ovalDiv.style.display = 'flex';
    }
});