https://css-tricks.com/the-blur-up-technique-for-loading-background-images/

将40px左右的小图（甚至是内嵌图）放大并加上CSS滤镜的高斯模糊，为加载原始图赢得时间。
The (ingenious) solution was to return a tiny image (around 40 pixels wide) and then scale that tiny image up whilst applying a gaussian blur.
This instantly shows a background that looks aesthetically pleasing, and gives a preview of how the cover image would look.
The actual cover image could then be loaded in the background in good time, and smoothly switched in.


1.A tiny, optimized image
2.The filter function for images
filter
-webkit-filter()
backdrop-filter
3.Recreating the blur filter with SVG
SVG滤镜
4.Getting the URL to the big image
  background-image: url(largeimg.jpg);
5.Animating the swap
@supports (background-image: filter(url('i.jpg'), blur(1px))) {
    .post-header {
        transform: translateZ(0);
    }
    .post-header-enhanced {
        animation: sharpen .5s both;
    }
    @keyframes sharpen {
        from {
            background-image: filter(largeimg.jpg), blur(20px));
        }
        to {
            background-image: filter(largeimg.jpg), blur(0px));
        }
    }
}
