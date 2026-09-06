"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=t(function(k,u){
var p=require('@stdlib/stats-strided-dvariancewd/dist').ndarray,w=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,i,f){return w(p(e,r,a,i,f))}u.exports=x
});var n=t(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,a,i){return m(e,r,a,i,j(e,i))}v.exports=l
});var c=t(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),_=s();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),d,y=O(E(__dirname,"./native.js"));b(y)?d=g:d=y;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
