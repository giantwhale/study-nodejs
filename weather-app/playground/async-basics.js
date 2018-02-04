console.log('Starting app');

setTimeout(() => {
    console.log("Inside of a callback");
}, 2000);  // 2 seconds delay


setTimeout(() => {
    console.log("Second setTimeout");
}, 0);  // 2 seconds delay

console.log('Finishing up');

