(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),c=n(13),r=n.n(c),o=(n(45),n(11)),l=n(12),m=n(3),j=function(e){return Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("button",{className:"nav-button",title:e.pageName,children:Object(a.jsx)(l.b,{className:"nav-link",to:"/".concat(e.pageName.toLowerCase()),activeStyle:{color:"white"},children:e.pageName.toLowerCase()})})})},b=(n(50),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"navigation-container",children:[Object(a.jsx)(j,{pageName:"Home"}),Object(a.jsx)(j,{pageName:"About"}),Object(a.jsx)(j,{pageName:"Projects"}),Object(a.jsx)(j,{pageName:"Contact"})]})})})}),u=(n(51),function(e){return Object(a.jsx)("span",{children:e.letters.map((function(e,t){var n={animationDelay:.5+t/10+"s"};return Object(a.jsx)("span",{"aria-hidden":"true",style:n,children:e},t)}))})}),p=(n(52),function(){var e="Bryttanie House".split(""),t="Designer & Developer".split("");return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"name",children:Object(a.jsx)(u,{letters:e})}),Object(a.jsx)("h2",{className:"title",children:Object(a.jsx)(u,{letters:t})}),Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("button",{className:"image-button",onClick:function(){var e=getComputedStyle(document.getElementById("portrait")).transform;"matrix(1, 0, 0, 1, 0, 0)"===e?e="matrix(-1, 0, 0, 1, 0, 0)":"matrix(-1, 0, 0, 1, 0, 0)"===e?e="matrix(-1, 0, 0, -1, 0, 0)":"matrix(-1, 0, 0, -1, 0, 0)"===e?e="matrix(1, 0, 0, -1, 0, 0)":"matrix(1, 0, 0, -1, 0, 0)"===e&&(e="matrix(1, 0, 0, 1, 0, 0)"),document.getElementById("portrait").style.transform=e},children:Object(a.jsx)("img",{id:"portrait",className:"portrait",src:"/images/Misc/commencement.jpg",alt:"Self portrait"})})})]})}),d=(n(53),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h1",{className:"greeting",children:"hello!"}),Object(a.jsx)("p",{className:"intro",children:" I'm Bryttanie. (Yep, it's pronounced like 'Brittany'.) I'm a Computer Science graduate from Portland State University and an incoming Associate Consultant at Red Hat. My current interests include but are not limited to: "}),Object(a.jsxs)("ul",{className:"interests-container",children:[Object(a.jsx)("li",{id:"interest-item1",className:"interest-item",children:"Data science and engineering"}),Object(a.jsx)("li",{id:"interest-item2",className:"interest-item",children:"Full-stack application development"}),Object(a.jsx)("li",{id:"interest-item3",className:"interest-item",children:"Data management"}),Object(a.jsx)("li",{id:"interest-item4",className:"interest-item",children:"UX/UI design"})]}),Object(a.jsx)("p",{className:"middle",children:"I appreciate challenges and converting difficult problems to intuitive, usable solutions, from user interface design to scheduling algorithms to customized implemententation of platform infrastructure."}),Object(a.jsx)("p",{className:"closing",children:"Additionally, I enjoy learning about and tinkering with the latest technologies, hiking and frolicking in nature, making art, and cooking nourishing meals with loved ones. "})]})})}),h=function(e){var t=Object(m.h)(),n=(t.path,t.url);return Object(a.jsx)("li",{className:"project-list-item",children:Object(a.jsxs)("button",{className:"project-button",children:["home"!==e.path&&Object(a.jsx)(l.b,{className:"project-link",to:"".concat(n,"/").concat(e.path),children:e.title}),"home"===e.path&&Object(a.jsx)(l.b,{className:"project-link",to:"/".concat(e.path),children:e.title})]})})},g=(n(54),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)("div",{className:"project-list-container",children:Object(a.jsxs)("ul",{className:"project-list",children:[Object(a.jsx)(h,{path:"jama-jira-plugin",title:"Jama-Jira link plugin"}),Object(a.jsx)(h,{path:"climbit",title:"ClimbIt"}),Object(a.jsx)(h,{path:"recall-tracker",title:"Recall Tracker"}),Object(a.jsx)(h,{path:"spacehunt",title:"SpaceHunt"}),Object(a.jsx)(h,{path:"home",title:"This website :)"})]})})})}),x=(n(55),function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"page-title",children:"here are some of my recent projects"}),Object(a.jsx)("h2",{className:"page-subtitle",children:"(click one to view more info)"}),Object(a.jsx)(g,{})]})}),O=n(14),f=n(33),y=n.n(f),v=n(17),N=(n(72),function(e){return Object(a.jsxs)("div",{className:"form-group row",children:[Object(a.jsxs)("label",{className:"row-label",htmlFor:e.name.toLowerCase(),children:[e.name," *"]}),"input"===e.input&&Object(a.jsx)("input",{type:"text",className:"form-control ml-3 mr-3",id:e.name.toLowerCase(),onChange:function(t){return e.setState(t.target.value)},value:e.state,required:!0}),"textarea"===e.input&&Object(a.jsx)("textarea",{className:"form-control ml-3 mr-3",type:"text",id:e.name.toLowerCase(),onChange:function(t){return e.setState(t.target.value)},value:e.state,rows:"3",maxLength:"12345"})]})}),k=function(){var e=Object(i.useState)(""),t=Object(O.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(""),r=Object(O.a)(c,2),o=r[0],l=r[1],m=Object(i.useState)(""),j=Object(O.a)(m,2),b=j[0],u=j[1],p=Object(i.useState)("Submit"),d=Object(O.a)(p,2),h=d[0],g=d[1],x=function(){s(""),l(""),u(""),g("Submit"),document.getElementById("spinner").style.visibility="hidden"};return Object(a.jsxs)("form",{children:[Object(a.jsx)(N,{name:"Name",input:"input",state:n,setState:s}),Object(a.jsx)(N,{name:"Email",input:"input",state:o,setState:l}),Object(a.jsx)(N,{name:"Message",input:"textarea",state:b,setState:u}),Object(a.jsx)("div",{className:"text-center button-container",children:Object(a.jsxs)("div",{className:"form-group mt-5 mb-0",children:[Object(a.jsxs)("button",{id:"submit-button",type:"button",className:"btn btn-primary btn-lrg",html:"",onClick:function(e){e.preventDefault();if(""!==n&&""!==o&&""!==b){document.getElementById("spinner").style.visibility="visible",g("Sending message...");var t={name:n,email:o,message:b};y()({method:"POST",url:"http://127.0.0.1:5000/send_message",data:t}).then((function(e){console.log(e),g("Submitted!"),x()})).catch((function(e){console.log(e),setTimeout((function(){x(),Object(v.b)("Thank you for your message!")}),2e3)}))}else Object(v.b)("Please enter your name, email, and a message.")},children:[h,Object(a.jsx)("span",{id:"spinner",className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true",style:{visibility:"hidden"}}),Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})]}),Object(a.jsx)("button",{id:"reset-button",type:"reset",className:"btn btn-secondary btn-lrg",onClick:x,children:"Reset"})]})}),Object(a.jsx)(v.a,{})]})},w=(n(73),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"greeting",children:"I'm excited to hear from you!"}),Object(a.jsxs)("h2",{className:"email-me",children:["Please enter your message in the form below, or",Object(a.jsx)("a",{href:"mailto:bryttbhouse@gmail.com",children:" send me an email."})]})]}),Object(a.jsx)(k,{})]})})}),C=n(39),I=(n(74),function(e){var t=Object(m.g)();return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"project-title",children:e.title}),Object(a.jsx)("p",{className:"image-caption",children:e.caption}),Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)(C.a,{children:e.images.map((function(t){return Object(a.jsx)("img",{className:"project-image",src:t,alt:"Screenshot of UI",style:{width:e.size}},t)}))})}),Object(a.jsx)("p",{className:"description",children:e.description}),Object(a.jsx)("p",{className:"role",children:e.role}),Object(a.jsxs)("div",{className:"link-container",children:[Object(a.jsx)("button",{id:"back-button",className:"back-button",onClick:function(){return t.push("/projects")},children:"<< go back to projects"}),Object(a.jsx)("a",{className:"link-to-repo",title:"Go to the repo",href:e.repo,target:"_blank",rel:"noopener noreferrer",children:"go to GitHub repo >>"})]})]})}),S=(n(75),function(){var e=Object(i.useState)("day"),t=Object(O.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("button",{className:"toggle-button",onClick:function(){document.body.classList.toggle("day-mode"),s("day"===n?"night":"day")},children:["Switch to ",n," mode"]})}),J=["/images/Jama-Jira-Plugin/Capstone-authentication.png","/images/Jama-Jira-Plugin/Capstone-select-item.png","/images/Jama-Jira-Plugin/Capstone-link-items.png","/images/Jama-Jira-Plugin/Capstone-unlink.png","/images/Jama-Jira-Plugin/Capstone-sync-settings.png","/images/Jama-Jira-Plugin/Capstone-error-logs.png"],P=["/images/ClimbIt/ClimbIt-home.png","/images/ClimbIt/ClimbIt-search-results.png","/images/ClimbIt/ClimbIt-googlemap.png","/images/ClimbIt/ClimbIt-googlemap-functionality.png","/images/ClimbIt/ClimbIt-directions.png","/images/ClimbIt/ClimbIt-weather.png"],T=["/images/Recall-Tracker/onboarding-page.png","/images/Recall-Tracker/add-new-vehicle.png","/images/Recall-Tracker/search-for-VIN.png","/images/Recall-Tracker/vehicle-found.png"],A=["/images/SpaceHunt/Spacehunt-mini-screenshot.png"],F=function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)(b,{}),Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",children:Object(a.jsx)(m.a,{to:"/home"})}),Object(a.jsx)(m.b,{exact:!0,path:"/home",component:p}),Object(a.jsx)(m.b,{exact:!0,path:"/about",component:d}),Object(a.jsx)(m.b,{exact:!0,path:"/projects",component:x}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/jama-jira-plugin",render:function(e){return Object(a.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{title:"Jama-Jira link plugin",images:J,size:"60%",caption:"A Jira plugin to sync items between Jira and Jama Connect",description:"As the final product for my Software Engineering Capstone course, this plugin links and syncs items (such as user stories or requirements) between Jira and Jama Connect so the user does not have to update them in both applications.",role:"My role in this project was the UX/UI design, frontend linking and sync interval setup, backend syncing and sync interval setup, and Jira integration.",repo:"https://github.com/CapstoneBitsPlease"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/climbit",render:function(e){return Object(a.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{title:"ClimbIt",images:P,size:"60%",caption:"A web application that allows the user to search for hikes in any location and provides them with a map, directions, and weather forecast",description:"ClimbIt was the final project for my Full-Stack Web Development course. Using various REST APIs to retrieve GPS and weather information, this application provides a user-friendly way to plan a hike in any location.",role:"My role in this project was the UX/UI design and frontend/middle-end development.",repo:"https://github.com/xbhouse/ClimbIt"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/recall-tracker",render:function(e){return Object(a.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{title:"Recall Tracker",images:T,size:"20%",caption:"A user-friendly mobile Android application that provides the user with safety recalls and notifications for their vehicle",description:"This project was completed during the CDK-Fortellis Hackathon in August 2019. Given a Vehicle ID Number, the app will provide information on any current recalls and provide notifications for the user if there are any future recalls.",role:"I contributed to the frontend design and development of this application.",repo:"https://github.com/xbhouse/RecallTracker-Android"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/spacehunt",render:function(e){return Object(a.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{title:"SpaceHunt",images:A,size:"30%",caption:"An inventive space game played in the web browser",description:"SpaceHunt was the final project for my Software Engineering class. Dr. Warren Harrison created the game plot, which centers around the objective of locating a secret recipe in the shortest amount of time possible, while not running out of supplies or energy and avoiding various obstacles.",role:"I worked on implementing the local storage so the user can save and load their game.",repo:"https://github.com/xbhouse/spacehunt-best-team"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/contact",component:w})]})]}),Object(a.jsx)(S,{})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a025b4e8.chunk.js.map