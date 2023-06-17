function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
}
addingEventListener();


// Other way that the test passed but no alert was showing on webpage.

// function addingEventListener(){
//     const input = document.getElementById('button');
//     function clickAlert(){
//         alert('I was clicked!');
//     }
//     input.addEventListener('click', clickAlert);
// }

// console.log(addEventListener())