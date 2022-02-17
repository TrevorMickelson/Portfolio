const container = document.getElementById('carousel');
var scrollPosition = 0;

function slide(direction) {
  console.log(container.children.length);
  console.log(container.scrollWidth);

  if (direction == "left") {
    scrollLeft();
  } else {
    scrollRight();
  }
}

function scrollLeft() {
  updateScrollPosition(scrollPosition - getScrollAmount());
  scroll(scrollPosition);
}

function scrollRight() {
  updateScrollPosition(scrollPosition + getScrollAmount());
  scroll(scrollPosition);
}

function scroll(amount) {
  container.scroll({
    left: amount,
    behavior: "smooth"
  })
}

function getScrollAmount() {
  return container.scrollWidth / container.children.length;
}

function updateScrollPosition(newPosition) {
  // Preventing negatives
  if (newPosition < 0) {
    scrollPosition = 0;
    return;
  }

  // Preventing values that are too high
  if (newPosition > container.scrollWidth) {
    scrollPosition = container.scrollWidth;
    return;
  }

  scrollPosition = newPosition;
}