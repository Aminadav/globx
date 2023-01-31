---
slug: hola
title: Hola
author: Aminadav Glickstein
author_title: Founder
author_url: https://github.com/aminadavv
author_image_url: https://avatars.githubusercontent.com/u/3584317?s=400&u=1fa10a9f8a8ddc0f3c857200b0760c022cc91774&v=4
tags: [globx]
---

I built a new solution for creating simple and powerful stores for React apps. GlobX let you change and read any part of the store from every component or traditional JavaScript code.

I'm writing code for 20+ years, I have developed many popular apps, but this is my first time trying to publish something that it is useful for me and should be open-source for other developers.

Please be friendly with you comments 🙂 and let me know your thoughts and my next steps.

I took the Redux todo example. ([https://github.com/reduxjs/redux/tree/master/examples/todos](https://github.com/reduxjs/redux/tree/master/examples/todos)) cloned it and reimplemented it in GlobX ([https://github.com/Aminadav/globx-todo](https://github.com/Aminadav/globx-todo)). I saved about 90% of the code. (I'm recommended you to inspect the code, I'm sure you will ❤️ it)

GlobX makes life easier when you wish to make changes to your app, the requirements changes, or do you want to refactor. There are not lot of moving parts that are depended on each other.

**Motivation:** I like Redux, But:

1. I like to write code as little as possible. I'm not too fond of reducers, action builders, connectors, and containers.
2. I want full intelli-sense and type auto-complete everywhere without defining typs or adding special instructions into the code.
3. I want to change the state without calling other actions, dispatching, or making any other change.
4. I want to access each part of the store without changing anything in the code, and the component should use the store's property like any other JSON object. And without using or creating selectors.
5. I wouldn't say I like immutable objects. I prefer to push, pull, and change arrays and objects without cloning.
6. I don't like that sometimes I'm getting previous store values because of cloning, and I'm not particularly eager to fix it using useRef and similar fixes.
7. In other state managers all IDE smart features like "Find all references" or "rename symbol" doesn't work for keys in the store. In GlobX it's working, so my code always have the naming I wish and I don't afraid to refactor.


**How to use GlobX?**

1. Create a new file (store.js) and call the GlobX newStore function with your initial store. And export the result.
2. GlobX will create one store for your whole app. You can read any part of the store easily by importing the store.js file. This is a simple JSON file.
3. You can change (and mutate) everything in the JSON store. It's updating immediately for all other JavaScript files that using th store.
4. When you want to update the UI (After you change the store) and rerender the components that should be rerender (becuase they are reading the store) you have to call the GlobX function updateStore it will rerender only the components that are affected by your store changes.
5. To know which components should re-render you have to use the GlobX hook useRerenderIfChange and tell it which part of the store this component is dependent on.

[https://www.npmjs.com/package/globx](https://www.npmjs.com/package/globux)

**Why the Name GlobX?**

It sounds to me like a Global store. One store that everything can use and change.

**What the magic?**

No magic. The whole project is just several lines of code. It exporting 1 functions: NewStore. The store has only 2 functions: updateStore and useRerenderIfIChange. No magic. And it's working very fast. You can call updateStore as many times you want, and it will update and rerender only the affected components and  only once per executing cycle.

**Where is the API documentation:**

I'm waiting to hear feedback from the community and know that people are interested, then I will create some dev docs, and other open-source materials (tests....)

**Plans for the future:**

Add supporting for plugins that have access only to a specific path in the store.

E.g. A plugin that lets you add toast notifications. To show a toast, you call

store.toasts.show("My message")

store.toasts.show("My message2")

Then you can read and see the notifications in the store.toasts.list.