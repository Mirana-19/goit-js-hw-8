!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n="feedback-form-state",r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function b(e){return c=e,f=setTimeout(h,t),s?v(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=y();if(j(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?v(e):(r=o=void 0,a)}function w(){var e=y(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return b(l);if(d)return f=setTimeout(h,t),v(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,I(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:O(y())},w}function I(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(I(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=f.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return I(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j,h={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('.feedback-form [name="email"]'),messageInput:document.querySelector('.feedback-form [name="message"]')};function O(e){var t,r={email:h.emailInput.value,message:h.messageInput.value};t=r,localStorage.setItem(n,JSON.stringify(t))}h.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem(n)),localStorage.removeItem(n),e.target.reset()})),h.emailInput.addEventListener("input",r(O,500)),h.messageInput.addEventListener("input",O),(j=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){console.log(e)}}(n))&&(h.emailInput.value=j.email||"",h.messageInput.value=j.message||"")}();
//# sourceMappingURL=03-feedback.54284b77.js.map
