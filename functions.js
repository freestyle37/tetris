"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let dpk = document.querySelector('.dpk');
  let dpk_width = get_item_width(dpk);

  let step = (dpk_width/10);
  let item_height = get_item_height(dpk);
  let numb_of_lines_by_height = Math.trunc(item_height/step);
  
  lines_loop(10, 'vertical', dpk, step);
  lines_loop(numb_of_lines_by_height, 'horizontal', dpk, step);

  console.log(numb_of_lines_by_height);
});

function get_item_width(item) {
  return item.getBoundingClientRect().width;
}

function get_item_height(item) {
  return item.getBoundingClientRect().height;
}

function lines_loop(numb_of, line_type, distination, step) {
  for(let i = 0; i <= numb_of; i++) {
    let line = gen_line(line_type, i);

    if (line_type === 'vertical') {
      line.setAttribute('style', `left: ${i*step}px;`);
      distination.append(line);
    }

    if (line_type === 'horizontal') {
      line.setAttribute('style', `bottom: ${i*step}px;`);
      distination.append(line);
    }

  }

  return;
}

function gen_line(line_type, i) {

  let line = document.createElement("div");

  if (line_type) {
    line.setAttribute('type', line_type);
    line.setAttribute('class', 'line');
  }

  return line;

  return;
}