(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{75:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return c}));var a=o(3),n=(o(0),o(104));const r={slug:"hola",title:"Hola",author:"Aminadav Glickstein",author_title:"Founder",author_url:"https://github.com/aminadavv",author_image_url:"https://avatars.githubusercontent.com/u/3584317?s=400&u=1fa10a9f8a8ddc0f3c857200b0760c022cc91774&v=4",tags:["globx"]},s={permalink:"/blog/hola",editUrl:"https://github.com/aminadav/globx/edit/master/website/blog/blog/2021-03-11-initial-release.md",source:"@site/blog/2021-03-11-initial-release.md",description:"I built a new solution for creating simple and powerful stores for React apps. GlobX let you change and read any part of the store from every component or traditional JavaScript code.",date:"2021-03-11T00:00:00.000Z",formattedDate:"March 11, 2021",tags:[{label:"globx",permalink:"/blog/tags/globx"}],title:"Hola",readingTime:3.27,truncated:!1},l=[],i={toc:l};function c({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"I built a new solution for creating simple and powerful stores for React apps. GlobX let you change and read any part of the store from every component or traditional JavaScript code."),Object(n.b)("p",null,"I'm writing code for 20+ years, I have developed many popular apps, but this is my first time trying to publish something that it is useful for me and should be open-source for other developers."),Object(n.b)("p",null,"Please be friendly with you comments \ud83d\ude42 and let me know your thoughts and my next steps."),Object(n.b)("p",null,"I took the Redux todo example. (",Object(n.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos"},"https://github.com/reduxjs/redux/tree/master/examples/todos"),") cloned it and reimplemented it in GlobX (",Object(n.b)("a",{parentName:"p",href:"https://github.com/Aminadav/globx-todo"},"https://github.com/Aminadav/globx-todo"),"). I saved about 90% of the code. (I'm recommended you to inspect the code, I'm sure you will \u2764\ufe0f it)"),Object(n.b)("p",null,"GlobX makes life easier when you wish to make changes to your app, the requirements changes, or do you want to refactor. There are not lot of moving parts that are depended on each other."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Motivation:")," I like Redux, But:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"I like to write code as little as possible. I'm not too fond of reducers, action builders, connectors, and containers."),Object(n.b)("li",{parentName:"ol"},"I want full intelli-sense and type auto-complete everywhere without defining typs or adding special instructions into the code."),Object(n.b)("li",{parentName:"ol"},"I want to change the state without calling other actions, dispatching, or making any other change."),Object(n.b)("li",{parentName:"ol"},"I want to access each part of the store without changing anything in the code, and the component should use the store's property like any other JSON object. And without using or creating selectors."),Object(n.b)("li",{parentName:"ol"},"I wouldn't say I like immutable objects. I prefer to push, pull, and change arrays and objects without cloning."),Object(n.b)("li",{parentName:"ol"},"I don't like that sometimes I'm getting previous store values because of cloning, and I'm not particularly eager to fix it using useRef and similar fixes."),Object(n.b)("li",{parentName:"ol"},'In other state managers all IDE smart features like "Find all references" or "rename symbol" doesn\'t work for keys in the store. In GlobX it\'s working, so my code always have the naming I wish and I don\'t afraid to refactor.')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"How to use GlobX?")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create a new file (store.js) and call the GlobX newStore function with your initial store. And export the result."),Object(n.b)("li",{parentName:"ol"},"GlobX will create one store for your whole app. You can read any part of the store easily by importing the store.js file. This is a simple JSON file."),Object(n.b)("li",{parentName:"ol"},"You can change (and mutate) everything in the JSON store. It's updating immediately for all other JavaScript files that using th store."),Object(n.b)("li",{parentName:"ol"},"When you want to update the UI (After you change the store) and rerender the components that should be rerender (becuase they are reading the store) you have to call the GlobX function updateStore it will rerender only the components that are affected by your store changes."),Object(n.b)("li",{parentName:"ol"},"To know which components should re-render you have to use the GlobX hook useRerenderIfChange and tell it which part of the store this component is dependent on.")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/globux"},"https://www.npmjs.com/package/globx")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Why the Name GlobX?")),Object(n.b)("p",null,"It sounds to me like a Global store. One store that everything can use and change."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"What the magic?")),Object(n.b)("p",null,"No magic. The whole project is just several lines of code. It exporting 1 functions: NewStore. The store has only 2 functions: updateStore and useRerenderIfIChange. No magic. And it's working very fast. You can call updateStore as many times you want, and it will update and rerender only the affected components and  only once per executing cycle."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Where is the API documentation:")),Object(n.b)("p",null,"I'm waiting to hear feedback from the community and know that people are interested, then I will create some dev docs, and other open-source materials (tests....)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Plans for the future:")),Object(n.b)("p",null,"Add supporting for plugins that have access only to a specific path in the store."),Object(n.b)("p",null,"E.g. A plugin that lets you add toast notifications. To show a toast, you call"),Object(n.b)("p",null,'store.toasts.show("My message")'),Object(n.b)("p",null,'store.toasts.show("My message2")'),Object(n.b)("p",null,"Then you can read and see the notifications in the store.toasts.list."))}c.isMDXComponent=!0}}]);