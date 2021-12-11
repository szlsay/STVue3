// jQuery('#foo');// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
// jQuery = function(selector) {    
//     return document.querySelector(selector);
// };

jQuery('#foo');
jQuery(function() {    
  alert('Dom Ready!');
});

let cat = new Animal('Tom');

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

jQuery.ajax('/api/get_something');

jQuery.ajax('/api/get_something');
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);