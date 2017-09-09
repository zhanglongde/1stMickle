let style = "";
Array.from({length: 32}).forEach(function(_, k) {
  var selector = `#t${k + 1}`;
  var start = document.querySelector(`#moon ${selector}`).getClientRects()[0];
  var end = document.querySelector(`#logo ${selector}`).getClientRects()[0];
  style +=
    `
#moon ${selector} {
    animation-name: show, rotate, move${k};
    animation-duration: 0.1s, 3s, 1.5s;
    animation-delay: ${0.1 * k + 1}s, 1s, ${0.1 * 31 + 0.1 + 1}s;
    animation-fill-mode: forwards, none, forwards;
    animation-iteration-count: 1, infinite, 1;
    animation-timing-function: ease, linear, ease;
    transform-origin: center center;
    position: absolute;
    fill: hsl(${k/31 * 360}, 100%, 70%);
}

@keyframes move${k} {
    to {
        fill: #FFF;
        transform: translateX(${(end.left - start.left)}px) translateY(${(end.top - start.top)}px);
    }
}
`;
});
style +=
  `
#node {
    animation-name: rotate_node;
    animation-delay: 1s;
    animation-duration: ${0.1 * 31 + 0.1}s;
    animation-timing-function: ease;
    transform-origin: center center;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes rotate_node {
    from {
        /** fill: hsl(270, 80%, 60%); **/
        fill: #FFF;
        stroke: #000;
        transform: rotateZ(${10 * 360}deg) scale(0);
    }
    to {
      opacity: 1;
    }
    /**
    60% {
        fill: hsl(0, 80%, 60%);
    }

    to {
        fill: hsl(0, 0%, 0%);
    }
    **/
}
`;
document.querySelector('style').innerHTML += style;
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//       navigation: true
//     });
// });
