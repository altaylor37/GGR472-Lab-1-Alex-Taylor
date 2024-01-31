//START COUNTER AND UPDATE IT WITH EACH BUTTON CLICK
let count = 0; 
const counterDisplay = document.getElementById('leaveCounter');
function updateCounter() {
    count++; 
    counterDisplay.textContent = `Times that you left my beautiful website: ${count}`;
}

//MAPBOX BTN
const mapBoxBtn = document.getElementById('MapBoxButton');
mapBoxBtn.addEventListener('click', function() {
    window.open('https://www.mapbox.com', '_blank');
    updateCounter();
});

//BOOTSTRAP BTN
const bootstrapBtn = document.getElementById('BootstrapButton');
bootstrapBtn.addEventListener('click', function() {
    window.open('https://getbootstrap.com/docs/5.3/getting-started/introduction/', '_blank');
    updateCounter();
});

//W3SCHOOLS BTN
const w3Btn = document.getElementById('W3Button');
w3Btn.addEventListener('click', function() {
    window.open('https://www.w3schools.com/tags/', '_blank');
    updateCounter();
});
