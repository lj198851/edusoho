webpackJsonp(["app/js/courseset-manage/header/index"],{0:function(e,s){e.exports=jQuery},"227988cf7d09fe542431":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.publishCourseSet=void 0;var t=a("b334fd7e4c5a19234db2"),n=function(e){return e&&e.__esModule?e:{default:e}}(t);(s.publishCourseSet=function(){$("body").on("click",".course-publish-btn",function(e){confirm(Translator.trans("course_set.manage.publish_hint"))&&$.post($(e.target).data("url"),function(e){e.success?((0,n.default)("success",Translator.trans("course_set.manage.publish_success_hint")),location.reload()):(0,n.default)("danger",Translator.trans("course_set.manage.publish_fail_hint")+":"+Translator.trans(e.message),{delay:5e3})})})})()}},["227988cf7d09fe542431"]);