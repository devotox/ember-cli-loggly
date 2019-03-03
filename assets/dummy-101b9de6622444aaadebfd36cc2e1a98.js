"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,i.default.modulePrefix)
var r=o
e.default=r}),define("dummy/index",["exports","ember-cli-loggly"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,o=t.default.exportApplicationGlobal
i="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var i={name:"export-application-global",initialize:n}
e.default=i}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var i=n
e.default=i}),define("dummy/routes/application",["exports","ember-cli-loggly"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({setupController:function(){this._super.apply(this,arguments),this.controller.set("loggly",JSON.stringify(t.default,null,4))}})
e.default=n}),define("dummy/services/loggly",["exports","ember-cli-loggly/services/loggly"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"P4/nG4s0",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Ember CLI Loggly"],[10],[0,"\\n\\n"],[7,"p"],[9],[0,"Loggly Options"],[10],[0,"\\n"],[7,"pre"],[9],[0,"  "],[1,[21,"loggly"],false],[0,""],[10],[0,""]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
