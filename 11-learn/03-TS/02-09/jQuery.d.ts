// declare const jQuery: (selector: string) => any;
// // jQuery('#foo');// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
// // jQuery = function(selector) {    
// //   return document.querySelector(selector);
// // };


// // 环境上下文中的 "const" 初始化表达式必须为字符串、数字文本或文本枚举引用
// declare const jQuery = function(selector) {    
//   return document.querySelector(selector);
// };

declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

declare namespace jQuery {    
  function ajax(url: string, settings?: any): void;
}

declare namespace jQuery {    
  function ajax(url: string, settings?: any): void;    
  const version: number;    
  class Event {        
    blur(eventType: EventType): void    
  }    
  enum EventType {        
    CustomClick    
  }
}