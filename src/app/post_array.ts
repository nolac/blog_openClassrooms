import { Post } from './Post'


var content1 : string = "Angular is a TypeScript-based open-source front-end web application platform"+
"led by the Angular Team at Google and by a community of individuals and corporations."+
"Angular is a complete rewrite from the same team that built AngularJS."


var content2 : string = "GitHub (exploité sous le nom de GitHub, Inc.) est un service web d'hébergement"+
"et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git."+
"Ce site est développé en Ruby on Rails et Erlang par Chris Wanstrath, PJ Hyett et Tom Preston-Werner."+
"GitHub propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de logiciels libres."+
"Le site assure également un contrôle d'accès et des fonctionnalités destinées à la collaboration comme le suivi des bugs,"+ 
"les demandes de fonctionnalités, la gestion de tâches et un wiki pour chaque projet."

var content3 : string = "TypeScript is an open-source programming language developed and maintained by Microsoft."+ 
"It is a strict syntactical superset of JavaScript, and adds optional static typing to the language."+
"TypeScript is designed for development of large applications and transpile to JavaScript."+ 
"As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs."+ 
"TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution."

export var postArray : Post[] = [
    new Post("angular",content1,new Date()),
    new Post("github",content2,new Date()),
    new Post("typeScript",content3,new Date())
]



