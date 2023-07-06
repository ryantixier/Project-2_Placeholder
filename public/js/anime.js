// anime({
//   targets: ".animeLilGuy",
//   translateX: "500",
//   direction: "normal",
//   easing: "spring(10, 80, 30, 0)",  
// });

// anime({
//   targets: '.animeLilGuy',
//   translateX: {
//     value: 500,
//     duration: 800
//   },
//   scale: {
//     value: 1.5,
//     duration: 1600,
//     delay: 800,
//     easing: 'easeInOutQuart'
//   },
//   // delay: 250 // All properties except 'scale' inherit 250ms delay
// });
// SWOOPY LILGUY
anime({
  targets: ".animeLilGuy",
  translateX: 500,
  scale: [
    { value: .25},
    { value: 1.2 }
  ],
  duration: 2000,
  easing: "easeInOutSine",
  direction: "reverse",
  
})

// anime({
//   targets: ".animeLilGuy",
//   translateX: 250,
//   scale: [
//     { value: .95 }
//   ]
