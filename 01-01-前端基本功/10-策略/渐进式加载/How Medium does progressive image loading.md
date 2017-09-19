https://jmperezperez.com/medium-image-progressive-loading-placeholder/

1.Render a div where the image will be displayed.
padding-bottom
2.Load a tiny version of the image.
3.Once the image is loaded, it is drawn in a <canvas/>
  Then, the image data is taken and passed through a custom blur() function
        StackBlur‘s blur function
  At the same time, the main image is requested.
4.Once the main image is loaded, it is shown and the canvas is hidden.


模糊：
1.js canvas 模糊算法
2.css filter
3.SVG filter
  https://rentafounder.com/textured-gradients-in-pure-css/
4.CSS gradients?
