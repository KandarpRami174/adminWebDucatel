(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~1da5829d"],{"0415":function(t,e,n){"use strict";n("d3b7");var c=n("d4ec"),a=n("bee2"),u=n("bc3a"),i=n.n(u),o="webducatel/api/",r=function(){function t(){Object(c["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getAllMember",value:function(){return new Promise((function(t,e){try{i.a.get("".concat(o,"master/getmaster")).then((function(e){var n=e.data;t(n)}))}catch(n){e(n)}}))}},{key:"getAllMemberID",value:function(t){return new Promise((function(e,n){try{i.a.get("".concat(o,"master/getmaster/").concat(t)).then((function(t){var n=t.data;e(n)}))}catch(c){n(c)}}))}},{key:"addMyTeam",value:function(t,e,n,c,a){var u={masterUserName:t,masterName:e,masterEmail:n,masterPass:c,masterRole:a};return new Promise((function(t,e){i.a.post("".concat(o,"master/insertmaster"),u).then((function(e){var n=e.data;t(n)})).catch((function(t){e(t)}))}))}},{key:"updateMyTeam",value:function(t,e,n,c,a,u){var r={masterUserName:e,masterName:n,masterEmail:c,masterPass:a,masterRole:u};return new Promise((function(e,n){i.a.put("".concat(o,"master/updatemaster/").concat(t),r).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}},{key:"deleteMyTeam",value:function(t){return new Promise((function(e,n){i.a.delete("".concat(o,"master/deletemaster/").concat(t)).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}}]),t}();e["a"]=r},5471:function(t,e,n){"use strict";n("d3b7");var c=n("d4ec"),a=n("bee2"),u=n("bc3a"),i=n.n(u),o="webducatel/api/",r=function(){function t(){Object(c["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getSubscription",value:function(){return new Promise((function(t,e){try{i.a.get("".concat(o,"subscription/getsubscription")).then((function(e){var n=e.data;t(n)}))}catch(n){e(n)}}))}},{key:"getSubscriptionByID",value:function(t){return new Promise((function(e,n){try{i.a.get("".concat(o,"subscription/getsubscription/").concat(t)).then((function(t){var n=t.data;e(n)}))}catch(c){n(c)}}))}},{key:"addSubscription",value:function(t,e,n,c){var a={subsTitle:t,subsDetails:e,subsMonth:n,subsPrice:c};return new Promise((function(t,e){i.a.post("".concat(o,"subscription/insertsubscription"),a).then((function(e){var n=e.data;t(n)})).catch((function(t){e(t)}))}))}},{key:"updateSubscription",value:function(t,e,n,c,a){var u={subsTitle:e,subsDetails:n,subsMonth:c,subsPrice:a};return new Promise((function(e,n){i.a.put("".concat(o,"subscription/updatesubscription/").concat(t),u).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}},{key:"deleteSubscription",value:function(t){return new Promise((function(e,n){i.a.delete("".concat(o,"subscription/deletesubscription/").concat(t)).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}}]),t}();e["a"]=r},"94e1":function(t,e,n){"use strict";n("d3b7");var c=n("d4ec"),a=n("bee2"),u=n("bc3a"),i=n.n(u),o="webducatel/api/",r=function(){function t(){Object(c["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getSubject",value:function(){return new Promise((function(t,e){try{i.a.get("".concat(o,"subject/getSubject")).then((function(e){var n=e.data;t(n)}))}catch(n){e(n)}}))}},{key:"getSubjectByID",value:function(t){return new Promise((function(e,n){try{i.a.get("".concat(o,"subject/getSubject/").concat(t)).then((function(t){var n=t.data;e(n)}))}catch(c){n(c)}}))}},{key:"addSubject",value:function(t,e,n){var c={subTitle:t,subImage:e,subLevelID:n};return new Promise((function(t,e){i.a.post("".concat(o,"subject/insertSubject"),c).then((function(e){var n=e.data;t(n)})).catch((function(t){e(t)}))}))}},{key:"updateSubject",value:function(t,e,n,c,a){var u={subTitle:e,subImage:n,subIsBaseImg:c,subLevelID:a};return new Promise((function(e,n){i.a.put("".concat(o,"subject/updateSubject/").concat(t),u).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}},{key:"deleteSubject",value:function(t){return new Promise((function(e,n){i.a.delete("".concat(o,"subject/deleteSubject/").concat(t)).then((function(t){var n=t.data;e(n)})).catch((function(t){n(t)}))}))}}]),t}();e["a"]=r}}]);
//# sourceMappingURL=app~1da5829d.9741be1f.js.map