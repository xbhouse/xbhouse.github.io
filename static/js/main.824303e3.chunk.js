(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),c=n(10),r=n.n(c),o=(n(49),n(13)),l=n(14),m=n(3),d=(n(50),function(e){return Object(a.jsx)("span",{children:e.letters.map((function(e,t){var n={animationDelay:.5+t/10+"s"};return Object(a.jsx)("span",{"aria-hidden":"true",style:n,children:e},t)}))})}),j=(n(51),function(){var e="Bryttanie House".split(""),t="Designer & Developer".split("");return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"name",children:Object(a.jsx)(d,{letters:e})}),Object(a.jsx)("h2",{className:"title",children:Object(a.jsx)(d,{letters:t})}),Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("button",{className:"image-button",onClick:function(){var e=getComputedStyle(document.getElementById("portrait")).transform;"matrix(1, 0, 0, 1, 0, 0)"===e?e="matrix(-1, 0, 0, 1, 0, 0)":"matrix(-1, 0, 0, 1, 0, 0)"===e?e="matrix(-1, 0, 0, -1, 0, 0)":"matrix(-1, 0, 0, -1, 0, 0)"===e?e="matrix(1, 0, 0, -1, 0, 0)":"matrix(1, 0, 0, -1, 0, 0)"===e&&(e="matrix(1, 0, 0, 1, 0, 0)"),document.getElementById("portrait").style.transform=e},children:Object(a.jsx)("img",{id:"portrait",className:"portrait",src:"/images/Misc/commencement.jpg",alt:"Self portrait"})})}),Object(a.jsx)("footer",{className:"text-center secret",children:"lol u found me"})]})}),p=(n(52),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h1",{className:"about-greeting",children:"hello!"}),Object(a.jsx)("p",{className:"intro",children:" (\u25d5\u203f\u25d5) I'm Bryttanie. I have over 2 years of experience in full-stack development, project management, and data science, as well as mentoring and teaching experience. My current technical interests include but are not limited to: "}),Object(a.jsxs)("ul",{className:"interests-container",children:[Object(a.jsx)("li",{id:"interest-item2",className:"interest-item",children:"Data science and engineering"}),Object(a.jsx)("li",{id:"interest-item3",className:"interest-item",children:"Full-stack application development"}),Object(a.jsx)("li",{id:"interest-item4",className:"interest-item",children:"Database design"}),Object(a.jsx)("li",{id:"interest-item5",className:"interest-item",children:"UX/UI design"}),Object(a.jsx)("li",{id:"interest-item1",className:"interest-item",children:"Data ethics"})]}),Object(a.jsx)("p",{className:"middle",children:"I appreciate challenges and converting difficult ones to intuitive, usable solutions, from user interface design to scheduling algorithms to customized configuration of cloud platforms and infrastructure services. In my free time, I enjoy learning about and tinkering with the latest technologies, hiking/frolicking in nature, making art, and cooking."}),Object(a.jsx)("p",{className:"closing",children:"I recently graduated from Portland State University with a Bachelor of Science in Computer Science. Currently, I am an incoming Associate Consultant at Red Hat and a hobbyist designer/developer. I am not open to any full-time employment options right now, but am available for virtual coffee and/or freelance opportunities."})]})})}),b=function(e){var t=Object(m.h)(),n=(t.path,t.url);return Object(a.jsx)("li",{className:"project-list-item",children:Object(a.jsxs)("button",{className:"project-button",children:["home"!==e.path&&Object(a.jsx)(l.b,{className:"project-link",to:"".concat(n,"/").concat(e.path),children:e.title}),"home"===e.path&&Object(a.jsx)(l.b,{className:"project-link",to:"/".concat(e.path),children:e.title})]})})},h=(n(57),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)("div",{className:"project-list-container",children:Object(a.jsxs)("ul",{className:"project-list",children:[Object(a.jsx)(b,{path:"jama-jira-plugin",title:"Jama-Jira link plugin"}),Object(a.jsx)(b,{path:"climbit",title:"ClimbIt"}),Object(a.jsx)(b,{path:"recall-tracker",title:"Recall Tracker"}),Object(a.jsx)(b,{path:"spacehunt",title:"SpaceHunt"}),Object(a.jsx)(b,{path:"home",title:"this website"})]})})})}),u=(n(58),function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"page-title",children:"some of my recent projects"}),Object(a.jsx)("h2",{className:"page-subtitle",children:"(click one to view more info)"}),Object(a.jsx)(h,{})]})}),g=n(15),x=n(37),O=n.n(x),f=n(18),y=(n(75),function(e){return Object(a.jsxs)("div",{className:"form-group row",children:[Object(a.jsxs)("label",{className:"row-label",htmlFor:e.name.toLowerCase(),children:[e.name," *"]}),"input"===e.input&&Object(a.jsx)("input",{type:"text",className:"form-control ml-3 mr-3",id:e.name.toLowerCase(),onChange:function(t){return e.setState(t.target.value)},value:e.state,required:!0}),"textarea"===e.input&&Object(a.jsx)("textarea",{className:"form-control ml-3 mr-3",type:"text",id:e.name.toLowerCase(),onChange:function(t){return e.setState(t.target.value)},value:e.state,rows:"3",maxLength:"12345"})]})}),N=function(){var e=Object(i.useState)(""),t=Object(g.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(""),r=Object(g.a)(c,2),o=r[0],l=r[1],m=Object(i.useState)(""),d=Object(g.a)(m,2),j=d[0],p=d[1],b=Object(i.useState)("Submit"),h=Object(g.a)(b,2),u=h[0],x=h[1],N=function(){var e={name:n,email:o,message:j};if(o.includes(".")&&o.includes("@"))return O()({method:"POST",url:"http://127.0.0.1:5000/send_message",data:e}).then((function(e){return console.log(e),x("Submitted!"),k(),e})).catch((function(e){return console.log(e),e}));f.b.error("That doesn't look like a valid email address :(",{className:"error-toast-container",bodyClassName:"error-toast-text"})},k=function(){s(""),l(""),p(""),x("Submit"),document.getElementById("spinner").style.visibility="hidden"};return Object(a.jsxs)("form",{className:"form-container",children:[Object(a.jsx)(y,{name:"Name",input:"input",state:n,setState:s}),Object(a.jsx)(y,{name:"Email",input:"input",state:o,setState:l}),Object(a.jsx)(y,{name:"Message",input:"textarea",state:j,setState:p}),Object(a.jsx)("div",{className:"text-center button-container",children:Object(a.jsxs)("div",{className:"form-group mt-5 mb-0",children:[Object(a.jsxs)("button",{id:"submit-button",type:"button",className:"btn btn-primary btn-lrg",html:"",onClick:function(){""!==n&&""!==o&&""!==j?(document.getElementById("spinner").style.visibility="visible",x("Sending message..."),N()?N().then((function(){setTimeout((function(){k(),Object(f.b)("Thank you for your message!",{className:"success-toast-container",bodyClassName:"success-toast-text"})}),3e3)})):k()):f.b.error("Please enter your name, email, and a message.",{className:"error-toast-container",bodyClassName:"error-toast-text"})},children:[u,Object(a.jsx)("span",{id:"spinner",className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true",style:{visibility:"hidden"}}),Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})]}),Object(a.jsx)("button",{id:"reset-button",type:"reset",className:"btn btn-secondary btn-lrg",onClick:k,children:"Reset"})]})}),Object(a.jsx)(f.a,{})]})},k=(n(76),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"contact-greeting",children:"i'm excited to hear from you!"}),Object(a.jsxs)("h2",{className:"email-me",children:["Please enter your message in the form below, or",Object(a.jsx)("a",{className:"email-link",href:"mailto:bryttbhouse@gmail.com",children:" send me an email."})]})]}),Object(a.jsx)(N,{})]})})}),v=function(e){return Object(a.jsx)(i.Fragment,{children:Object(a.jsxs)("div",{className:"text-center exp-container",children:[Object(a.jsx)("h2",{className:"position",children:e.position}),Object(a.jsx)("table",{className:"exp-table",children:Object(a.jsxs)("tbody",{children:[Object(a.jsx)("tr",{children:Object(a.jsxs)("td",{className:"company",children:[e.company.startsWith("Sponsored")&&Object(a.jsx)("a",{className:"company-link",href:e.link,target:"__blank",rel:"noopener noreferrer",children:e.company.split(" ").splice(-2).join(" ")}),!e.company.startsWith("Sponsored")&&Object(a.jsx)("a",{className:"company-link",href:e.link,target:"__blank",rel:"noopener noreferrer",children:e.company})," -- ",e.location]})}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{className:"dates",children:e.dates})}),Object(a.jsx)("tr",{children:Object(a.jsx)("td",{className:"role-description",children:e.description})})]})})]})})},w=(n(77),function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center exp-page-title",children:"relevant industry experience"}),Object(a.jsx)(v,{position:"Student Software Engineer",company:"Sponsored by Jama Software",link:"https://jamasoftware.com",location:"Portland, Oregon",dates:"July 2020 to December 2020",description:"For the Software Engineering Capstone course at Portland State University, I collaborated with a Scrum team to design and develop a Jira plugin to integrate with Jama Connect. Throughout this project, I contributed to the UX/UI design, full-stack development, Jira integration, and project management."}),Object(a.jsx)(v,{position:"Student Mentor",company:"We in Computer Science (WiCS)",link:"https://wics.cs.pdx.edu/",location:"Portland, Oregon",dates:"October 2019 to Present",description:"The We in Computer Science organization at PSU provides networking and support to historically underrepresented communities in CS. As a volunteer mentor within this organization, I am able to learn from, collaborate with, and offer guidance, support, and resources to diverse CS students during their college experience."}),Object(a.jsx)(v,{position:"Co-Teacher",company:"ChickTechPDX",link:"https://portland.chicktech.org/",location:"Portland, Oregon",dates:"August 2019",description:"Through my internship with CDK Global, I had the chance to co-lead a girls\u2019 workshop on educational software and hardware, such as Scratch and Makey Makey. I introduced each tool and project to the students and provided support as they used the tools to develop their own programs."}),Object(a.jsx)(v,{position:"Software Engineer Intern",company:"CDK Global",link:"https://www.cdkglobal.com/us",location:"Portland, Oregon",dates:"June 2019 to August 2019",description:"During my internship with CDK Global, I was tasked with developing a user-facing web application frontend using React and Redux. I worked alongside Software Engineers and Product Designers to develop an intuitive UI, increased code coverage with tests using Enzyme, Jest, and Nightwatch, and maintained work organization and efficiency with Git, Jira, and Confluence."})]})}),C=function(e){return Object(a.jsx)("tr",{children:Object(a.jsx)("td",{className:"skill-name",children:e.skillName})})},S=n(21),I=function(e){return Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("button",{className:"nav-button",title:e.pageName,children:Object(a.jsx)(l.b,{className:"nav-link",to:"/".concat(e.pageName.toLowerCase()),activeStyle:{color:"white"},children:e.pageName.toLowerCase()})})})},J=["/images/Jama-Jira-Plugin/Capstone-plugin-location.png","/images/Jama-Jira-Plugin/Capstone-auth2.png","/images/Jama-Jira-Plugin/Capstone-select-item2.png","/images/Jama-Jira-Plugin/Capstone-link2.png","/images/Jama-Jira-Plugin/Capstone-unlink2.png","/images/Jama-Jira-Plugin/Capstone-sync-settings2.png","/images/Jama-Jira-Plugin/Capstone-error-logs2.png"],P=["/images/ClimbIt/ClimbIt-home2.png","/images/ClimbIt/ClimbIt-search-results2.png","/images/ClimbIt/ClimbIt-googlemap2.png","/images/ClimbIt/ClimbIt-hikemap2.png","/images/ClimbIt/ClimbIt-directions2.png","/images/ClimbIt/ClimbIt-directions-results2.png","/images/ClimbIt/ClimbIt-weather2.png"],T=["/images/Recall-Tracker/onboarding-page.png","/images/Recall-Tracker/add-new-vehicle.png","/images/Recall-Tracker/search-for-VIN.png","/images/Recall-Tracker/vehicle-found.png"],L=["/images/SpaceHunt/Spacehunt-mini-screenshot.png","/images/SpaceHunt/SpaceHunt-3.png"],D=["/images/Misc/github-icon.png","/images/Misc/linkedin-icon.png"],F=n(43),E=(n(94),function(e){var t=Object(m.g)();return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"project-title",children:e.title}),Object(a.jsx)("p",{className:"image-caption",children:e.caption}),Object(a.jsx)("div",{className:"project-image-container",children:Object(a.jsx)(F.a,{children:e.images.map((function(t){return Object(a.jsx)("img",{className:"project-image",src:t,alt:"Screenshot of UI",style:{width:e.size}},t)}))})}),Object(a.jsx)("p",{className:"description",children:e.description}),Object(a.jsx)("p",{className:"role",children:e.role}),Object(a.jsxs)("div",{className:"link-container",children:[Object(a.jsx)("button",{id:"back-button",className:"back-button",onClick:function(){return t.push("/projects")},children:"<< go back to projects"}),Object(a.jsx)("a",{className:"link-to-repo",title:"Go to the repo",href:e.repo,target:"_blank",rel:"noopener noreferrer",children:"go to GitHub repo >>"})]})]})}),H=(n(95),function(){var e=Object(i.useState)("light"),t=Object(g.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("button",{className:"toggle-button",onClick:function(){document.body.classList.toggle("day-mode"),s("light"===n?"dark":"light")},children:["Switch to ",n," mode"]})}),M=(n(96),function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(S.slide,{pageWrapId:"page-wrap",outerContainerId:"outer-container",children:Object(a.jsxs)("ul",{className:"navigation-container",children:[Object(a.jsx)(I,{pageName:"Home"}),Object(a.jsx)(I,{pageName:"About"}),Object(a.jsx)(I,{pageName:"Experience"}),Object(a.jsx)(I,{pageName:"Skills"}),Object(a.jsx)(I,{pageName:"Projects"}),Object(a.jsx)(I,{pageName:"Contact"}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{title:"GitHub",href:"https://github.com/xbhouse",target:"__blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{className:"github-image",src:D[0],alt:"gitHub",width:"50"})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{title:"LinkedIn",href:"https://linkedin.com/in/bryttaniehouse",target:"__blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{className:"linkedin-image",src:D[1],alt:"linkedIn",width:"50"})})})]})})})}),U=function(e){return Object(a.jsxs)("table",{className:"".concat(e.styleName,"-table"),children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:Object(a.jsx)("th",{className:"skill-table-name",children:e.tableName})})}),Object(a.jsx)("tbody",{children:e.skillList.map((function(t,n){return Object(a.jsx)(C,{category:e.tableName,skillName:t},n)}))})]})},A=["Python","C++","C","Java","JavaScript","SQL","HTML","CSS/SCSS"],R=["React","Flask","Node","Matplotlib","Pandas","Bootstrap","Tailwind"],B=["Linux","Mac","Vim","GCE","Git","MongoDB","PostgreSQL","SQLite"],G=(n(97),function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center skill-page-title",children:"technical skills"}),Object(a.jsxs)("div",{className:"skills-container",children:[Object(a.jsx)(U,{tableName:"Languages",styleName:"languages",skillList:A}),Object(a.jsx)(U,{tableName:"Frameworks/Libraries",styleName:"packages",skillList:R}),Object(a.jsx)(U,{tableName:"Tools/Systems",styleName:"tools",skillList:B})]})]})}),z=function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{id:"outer-container",children:[Object(a.jsx)(M,{}),Object(a.jsx)("main",{id:"page-wrap",children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",children:Object(a.jsx)(m.a,{to:"/home"})}),Object(a.jsx)(m.b,{exact:!0,path:"/home",component:j}),Object(a.jsx)(m.b,{exact:!0,path:"/about",component:p}),Object(a.jsx)(m.b,{exact:!0,path:"/experience",component:w}),Object(a.jsx)(m.b,{exact:!0,path:"/skills",component:G}),Object(a.jsx)(m.b,{exact:!0,path:"/projects",component:u}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/jama-jira-plugin",render:function(e){return Object(a.jsx)(E,Object(o.a)(Object(o.a)({},e),{},{title:"Jama-Jira link plugin",images:J,size:"60%",caption:"A Jira plugin to sync items between Jira and Jama Connect",description:"Developed as the final product for my Software Engineering Capstone course, this plugin allows the user to link and sync items (such as user stories or requirements) manually and automatically between Jira and Jama Connect so they do not have to update them in both applications.",role:"My role in this project was the UX/UI design, frontend linking and sync interval setup, backend syncing and sync interval setup, and Jira integration.",repo:"https://github.com/CapstoneBitsPlease"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/climbit",render:function(e){return Object(a.jsx)(E,Object(o.a)(Object(o.a)({},e),{},{title:"ClimbIt",images:P,size:"50%",caption:"A web application that allows the user to search for hikes in any location and provides them with a map, directions, and weather forecast",description:"ClimbIt was the final project for my Full-Stack Web Development course. Using various REST APIs to retrieve GPS and weather information, this application provides a simple way to plan a hike in any location.",role:"My role in this project was the UX/UI design and full-stack development.",repo:"https://github.com/xbhouse/ClimbIt"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/recall-tracker",render:function(e){return Object(a.jsx)(E,Object(o.a)(Object(o.a)({},e),{},{title:"Recall Tracker",images:T,size:"20%",caption:"A user-friendly mobile Android application that provides the user with safety recalls and notifications for their vehicle",description:"This project was completed during the CDK-Fortellis Hackathon in August 2019. Given a Vehicle ID Number, the application will provide information about any current recalls and provide notifications for the user if there are any future recalls.",role:"I contributed to the frontend design and development of this application.",repo:"https://github.com/xbhouse/RecallTracker-Android"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/projects/spacehunt",render:function(e){return Object(a.jsx)(E,Object(o.a)(Object(o.a)({},e),{},{title:"SpaceHunt",images:L,size:"40%",caption:"An inventive space game played in the web browser",description:"SpaceHunt was the final project for my Software Engineering class. Dr. Warren Harrison created the game plot, which centers around the objective of locating a secret recipe on one of the three planets in the shortest amount of time possible, while not running out of supplies or energy and avoiding various obstacles.",role:"I worked on implementing the local storage so the user can save and load their game.",repo:"https://github.com/xbhouse/spacehunt-best-team"}))}}),Object(a.jsx)(m.b,{exact:!0,path:"/contact",component:k})]})}),Object(a.jsx)(H,{})]})})})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.824303e3.chunk.js.map