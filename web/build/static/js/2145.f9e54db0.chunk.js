"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2145],{52145:function(e,r,t){t.d(r,{an:function(){return g},ie:function(){return Z},G3:function(){return h},Ti:function(){return x},eu:function(){return P},sy:function(){return T},fw:function(){return k}});var n=t(11026),o=t(44843),u=t(4141),i=t(11092),a=t(27791),s=t(77536),c=t(69772),f=t(67435),p=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gT)(r);case 2:return t=e.sent,n=new s.QueryClientImpl(t),e.abrupt("return",n.Providers(s.QueryProvidersRequest.fromPartial({})));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,t){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gT)(t);case 2:return n=e.sent,o=new s.QueryClientImpl(n),e.abrupt("return",o.Provider(s.QueryProviderRequest.fromPartial(r)));case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,t){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gT)(t);case 2:if(n=e.sent,o=new c.QueryClientImpl(n),void 0!==r.owner){e.next=6;break}return e.abrupt("return");case 6:return e.abrupt("return",o.ProviderAttributes(c.QueryProviderAttributesRequest.fromPartial(r)).catch((function(e){return{}})));case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,t){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gT)(t);case 2:if(n=e.sent,o=new c.QueryClientImpl(n),void 0!==r.auditor){e.next=6;break}return e.abrupt("return");case 6:return e.abrupt("return",o.AuditorAttributes(c.QueryAuditorAttributesRequest.fromPartial(r)).catch((function(e){return{}})));case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),w=t(13),y=t(46097),m=t(55119);function b(e){return function(r){var t=(0,n.Z)(r.queryKey,2)[1];return e(t)}}var h=b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,u="testnet"===t?y.X1.un:o.un;return void 0===e?Promise.resolve(void 0):u({owner:e},n)})),k=(b((function(){var e=(0,m.XG)(),r=e.networkType,t=e.rpcNode,n=("testnet"===r?y.a.ic:p)(t);return Promise.any([n])})),b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,o="testnet"===t?y.a.zT:l;return void 0===e?Promise.reject(new Error("No owner provided")):o({owner:e},n).then((function(e){return e}))}))),g=(b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,o=null,u="testnet"===t?y.a.Dn:v;return o=void 0===e?Promise.resolve(void 0):u({owner:e},n),Promise.any([o])})),b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,o=null,u="testnet"===t?y.a.AL:d;return o=void 0===e?Promise.resolve(void 0):u({auditor:e},n),Promise.any([o])})),b((function(){var e=(0,m.XG)(),r=e.networkType,t=e.rpcNode;return("testnet"===r?y.f4.w:w.wN)(t)})),b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,o=null,i="testnet"===t?y.m3.Ib:u.Ib;return o=null!==e&&void 0!==e&&e.owner&&null!==e&&void 0!==e&&e.dseq?i(e.owner,e.dseq,n):Promise.resolve(void 0),Promise.any([o])}))),Z=(b((function(e){var r=(0,m.XG)(),t=r.networkType,n=r.rpcNode,o="testnet"===t?y.m3.gf:u.gf;return e?o(e,n):Promise.resolve(void 0)})),b((function(e){var r=e.owner,t=e.dseq,n=(0,m.XG)(),o=n.networkType,i=n.rpcNode,a="testnet"===o?y.m3.Y8:u.Y8;return r&&t?a({owner:r,dseq:t},i):Promise.resolve(void 0)}))),x=b((function(e){var r=e.owner,t=e.state,n=(0,m.XG)(),o=n.networkType,i=n.rpcNode,a=null,s="testnet"===o?y.m3.$C:u.$C;return a=r?s({owner:r,state:t},i):Promise.resolve(void 0),Promise.any([a])})),P=b((function(e){var r=e.owner,t=e.dseq,n=null,o="testnet"===(0,m.XG)().networkType?y.m3.e8:u.e8;return n=r?o({owner:r,dseq:t}):Promise.resolve(void 0),Promise.any([n])})),T=b((function(e){var r=e.owner,t=null,n="testnet"===(0,m.XG)().networkType?y.m3.i$:u.i$;return t=r?n({owner:r}):Promise.resolve(void 0),Promise.any([t])}))},27173:function(e,r,t){function n(){return"status"}function o(e){return"lease/".concat(e.dseq,"/").concat(e.gseq,"/").concat(e.oseq)}function u(e){return"".concat(o(e),"/status")}function i(e){return"".concat(o(e),"/kubeevents")}function a(e){return"".concat(o(e),"/logs")}t.d(r,{BX:function(){return a},JA:function(){return u},L7:function(){return n},zX:function(){return i}})},4141:function(e,r,t){t.d(r,{$C:function(){return y},Ib:function(){return d},QX:function(){return g},Y8:function(){return m},e8:function(){return h},gf:function(){return k},i$:function(){return b},j7:function(){return Z}});var n=t(11092),o=t(27791),u=t(57066),i=t(77536),a=t(27092),s=(t(53374),t(67435)),c=t(27173),f=t(59504),p=t(44843),l=t(5316),v=(t(270),t(88848),t(55119));var d=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t,o){var i,a,c,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.gT)(o);case 2:return i=e.sent,a=new u.QueryClientImpl(i),c=u.QueryDeploymentRequest.fromJSON({id:{owner:r,dseq:t}}),e.next=7,a.Deployment(c);case 7:return f=e.sent,e.next=10,h({owner:r,dseq:t});case 10:return p=e.sent,e.abrupt("return",{deployment:f,leases:p});case 12:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o,i,a,c,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={countTotal:!0,limit:1},e.next=3,(0,s.gT)(t);case 3:return c=e.sent,f=new u.QueryClientImpl(c),e.next=7,f.Deployments(u.QueryDeploymentsRequest.fromPartial({pagination:a,filters:r}));case 7:return p=e.sent,e.abrupt("return",Number(null===p||void 0===p||null===(o=p.pagination)||void 0===o||null===(i=o.total)||void 0===i?void 0:i.toString()));case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),y=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o,i,a,c,f,p,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.owner,i=r.state,a={limit:100},c={owner:o,state:i},e.next=5,w({owner:c.owner},t);case 5:return(f=e.sent)>100&&(a.limit=f),e.next=9,(0,s.gT)(t);case 9:return p=e.sent,l=new u.QueryClientImpl(p),e.abrupt("return",l.Deployments(u.QueryDeploymentsRequest.fromPartial({pagination:a,filters:c})));case 12:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.gT)(t);case 2:return o=e.sent,u=new a.QueryClientImpl(o),e.abrupt("return",u.Bids(a.QueryBidsRequest.fromJSON({filters:r})));case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,u,i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.owner,o=(0,v.XG)(),u=o.rpcNode,e.next=4,(0,s.gT)(u);case 4:return i=e.sent,c=new a.QueryClientImpl(i),e.abrupt("return",c.Leases(a.QueryLeasesRequest.fromPartial({filters:{owner:t,state:"active"},pagination:{limit:5e3}})));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,v.XG)(),o=t.rpcNode,e.next=3,(0,s.gT)(o);case 3:return u=e.sent,i=new a.QueryClientImpl(u),e.abrupt("return",i.Leases(a.QueryLeasesRequest.fromPartial({filters:r})));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o,u,a,v,d,w,y,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.wT)();case 2:if(o=e.sent,r&&r.leaseId&&"TLS Certificate"===o.$type){e.next=5;break}return e.abrupt("return");case 5:return u=f.LeaseID.toJSON(r.leaseId),a=(0,c.JA)(u),e.next=9,(0,s.gT)(t);case 9:return v=e.sent,d=new i.QueryClientImpl(v),w=i.QueryProviderRequest.fromPartial({owner:r.leaseId.provider}),e.next=14,d.Provider(w);case 14:return y=e.sent,m=(0,l.ih)(o,y.provider.hostUri),e.abrupt("return",m(a).then((function(e){return e.ok&&e.json()}),(function(e){return console.log(e),null})));case 17:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t,o,u){var i,a,s,f,v,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={dseq:o.leaseId.dseq.low,gseq:o.leaseId.gseq,oseq:o.leaseId.oseq},e.next=3,(0,p.wT)(r);case 3:if(a=e.sent,s=(0,c.BX)(i),f=new URL(t.provider.hostUri),v="upstream/".concat(f.hostname,":").concat(f.port),d=new WebSocket("".concat(l.uV,"/").concat(v,"/").concat(s,"?follow=true"),["log-protocol"]),"TLS Certificate"===a.$type){e.next=10;break}return e.abrupt("return",Promise.reject("No certificate available"));case 10:return d.onopen=function(){d.send(x(a))},d.onmessage=u,e.abrupt("return",d);case 13:case"end":return e.stop()}}),e)})));return function(r,t,n,o){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t,o,u){var i,a,s,v,d,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.Lease.toJSON(o.lease),e.next=3,(0,p.wT)(r);case 3:if(a=e.sent,s=(0,c.zX)(i.leaseId),v=new URL(t.provider.hostUri),d="upstream/".concat(v.hostname,":").concat(v.port),"TLS Certificate"===a.$type){e.next=9;break}return e.abrupt("return",Promise.reject("No certificate available"));case 9:return(w=new WebSocket("".concat(l.uV,"/").concat(d,"/").concat(s,"?follow=true"),["event-protocol"])).onopen=function(){w.send(x(a))},w.onmessage=u,e.abrupt("return",w);case 13:case"end":return e.stop()}}),e)})));return function(r,t,n,o){return e.apply(this,arguments)}}();function x(e){return JSON.stringify({type:"certificate",certificate:{csr:e.csr,privateKey:e.privateKey}})}},13:function(e,r,t){t.d(r,{A6:function(){return o},wN:function(){return u}});var n=t(27173);function o(e){return"object"===typeof e&&null!==e&&function(e){return"object"===typeof e&&null!==e&&"object"===typeof e.protocol_version&&"string"===typeof e.id&&"string"===typeof e.listen_addr&&"string"===typeof e.network&&"string"===typeof e.version&&"string"===typeof e.channels&&"string"===typeof e.moniker&&"object"===typeof e.other}(e.node_info)&&function(e){return"object"===typeof e&&null!==e&&"string"===typeof e.latest_block_hash&&"string"===typeof e.latest_app_hash&&"string"===typeof e.latest_block_height&&"string"===typeof e.latest_block_time&&"boolean"===typeof e.catching_up}(e.sync_info)&&function(e){return"object"===typeof e&&null!==e&&"string"===typeof e.address&&"object"===typeof e.pub_key&&"string"===typeof e.voting_power}(e.validator_info)}function u(e){var r=[e,(0,n.L7)()].join("/");return fetch(r).then((function(e){return e.json()})).then((function(e){return e.result}))}}}]);
//# sourceMappingURL=2145.f9e54db0.chunk.js.map