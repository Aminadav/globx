(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{93:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(3),o=a(0),r=a.n(o),l=a(101),i=a(106),s=a(103),c=a(16),u=a(109),m=a(94),d=a.n(m),g=[{title:"Lightweight",imageUrl:"img/father.svg",description:r.a.createElement(r.a.Fragment,null,"The source-code is just several lines of code. And exposing only one function. the ",r.a.createElement("b",null,"newStore")," function. The store has only 1 function, and one hook.")},{title:"Powerful",imageUrl:"img/car.svg",description:r.a.createElement(r.a.Fragment,null,"You can access to every part of the state or modify the state like and other JSON object. When you changing the state call the function  ",r.a.createElement("b",null,"updateStore")," and GlobX automatically will reder the nessecery React components.")},{title:"Good for Agile development",imageUrl:"img/agility.svg",description:r.a.createElement(r.a.Fragment,null,"No boilerplate code. Just call the function ",r.a.createElement("b",null,"newStore")," with you initial state. No selectors, action builders, providers or other things. Just access the store and modify it wherever you need.")},{title:"Mutable",imageUrl:"img/mutable.svg",description:r.a.createElement(r.a.Fragment,null,"You can use any JS function directly on the store: Array push, pull, and others. No need for cloning even the increment operator (var++) is working. You also no required to normalize your store.")},{title:"It working fast",imageUrl:"img/speed.svg",description:r.a.createElement(r.a.Fragment,null,"Only the components that should be render are automatically rerender. You can even memoize all your components, they will rerender when needed. GlobX automatically render only once per rendering cycle, so you can ",r.a.createElement("b",null,"updateStore")," as many times you want.")},{title:"Fully support by IDEs",imageUrl:"img/ide.svg",description:r.a.createElement(r.a.Fragment,null,'You get auto-complete out of the box to all your store, keys and values. No need to create definition files, it automatically calculated from your initial store. All smart language features like "Find all references", and "Rename Symbol" are working, so it\'s make life easier when refactoring.')},{title:"Fast renders",imageUrl:"img/render.svg",description:r.a.createElement(r.a.Fragment,null,"To tell Globx that component is depened on specific path in the store you have to call the function ",r.a.createElement("b",null,"useRerenderIfNeed")," and give it the path (don't worry the IDE will auto complete it for you).")},{title:"You already know it",imageUrl:"img/know.svg",description:r.a.createElement(r.a.Fragment,null,"That it. Three functions. newStore, updateStore and useRerenderIfNeed. If you read until here, you know everything about GlobX. Just see the examle todo app how to use it.")},{title:"Async/Await",imageUrl:"img/know.svg",description:r.a.createElement(r.a.Fragment,null,"You gonna love it. You can update the state wherever you want. It's working inside promises and intervals. No need to extensions or addons.")}];function h(e){var t=e.imageUrl,a=e.title,n=e.description,o=Object(u.a)(t);return r.a.createElement("div",{className:Object(l.a)("col col--4",d.a.feature)},o&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:d.a.featureImage,src:o,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,n))}function p(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(i.a,{title:""+t.title,description:"Lightweight & powerful state management for Redux. 90% less code to write in compare to Redux/MobX."},r.a.createElement("header",{className:Object(l.a)("hero hero--primary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(s.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),r.a.createElement("main",null,g&&g.length>0&&r.a.createElement("section",{className:d.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},g.map((function(e,t){return r.a.createElement(h,Object(n.a)({key:t},e))})))))))}}}]);