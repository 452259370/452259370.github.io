(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237b43"],{fbf7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[0!==t.blogArticles.length||t.loading?a("div",[a("v-card-title",{staticClass:"d-block text-center"},[t._v("最新文章")]),a("ArticlePreview",{attrs:{"blog-articles":t.blogArticles,"total-page":t.totalPages,loading:t.loading,"show-tags":!0,"show-type":!0},on:{transferCurrentPage:t.getCurrentPage}})],1):a("div",[a("EmptyArticles")],1)])},i=[],o=a("ab89"),r=a("4482"),l={name:"Home",components:{EmptyArticles:r["a"],ArticlePreview:o["a"]},data:function(){return{blogArticles:[],totalPages:0,loading:Boolean}},methods:{getArticles:function(t){this.loading=!0;var e=this;this.axios.get(this.API.URL.QUERY_ARTICLE+"&page="+(t-1),{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.loading=!1;var a=t.data;a.success&&(e.totalPages=a.data.totalPages,e.blogArticles=a.data.data)}),(function(){e.loading=!1}))},getCurrentPage:function(t){this.getArticles(t)}},created:function(){this.getArticles(1)}},s=l,c=a("2877"),g=a("6544"),d=a.n(g),u=a("99d9"),f=a("a523"),h=Object(c["a"])(s,n,i,!1,null,"35e33825",null);e["default"]=h.exports;d()(h,{VCardTitle:u["d"],VContainer:f["a"]})}}]);
//# sourceMappingURL=chunk-2d237b43.936e5b53.js.map