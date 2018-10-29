const swit = document.getElementById('nightSwitch');
const thumb = document.getElementById('thumb');
const icon = document.getElementById('settingsIcon');

swit.addEventListener('click', function () {
    swit.classList.toggle('checked');
    if (swit.classList.contains('checked')) {

        document.body.classList.replace('light', 'dark');
       

    } else {
        document.body.classList.replace('dark', 'light');
        
    }
    //change theme
});
icon.addEventListener('click' , function(){
document.getElementById('settings').classList.toggle('active') ;

}) ;