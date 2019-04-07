
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function AnimateFadeIn(ndTarget, animateName) {
    var windowHeight = $(window).height();
    var visibleHeight = 60 // 动画出现阈值
    var scrollTop = $(window).scrollTop();
    var ndTargetTop = ndTarget.offset().top;
    if (scrollTop + windowHeight > ndTargetTop + visibleHeight) {
        ndTarget.addClass(animateName)
    }
}

function closeMenu(ndTarget, e) {
    let rect = ndTarget.getBoundingClientRect()
    let width = rect.width
    let height = rect.height
    let top = rect.top
    let left = rect.left
    if ((e.pageX > left) && (e.pageX < left + width) && (e.pageY > top) && (e.pageY < top + height)) {
        return
    }
}

function getMaxScroll(ndTarget, parentTarget) {
  // parentTarget overflow:hidden
  let maxScroll = ndTarget.scrollHeight - parentTarget.clientHeight
  return maxScroll
}