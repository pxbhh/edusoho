webpackJsonp(["app/js/course-manage/index"],{d14d05cad9e7abf02a5d:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.toggleIcon=function(e,t,s){var a=e.find(".js-remove-icon"),n=e.find(".js-remove-text");a.hasClass(t)?(a.removeClass(t).addClass(s),n?n.text(Translator.trans("收起")):""):(a.removeClass(s).addClass(t),n?n.text(Translator.trans("展开")):"")};t.chapterAnimate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(e).on("click",t,function(e){var i=$(e.currentTarget);i.nextUntil(t).animate({height:"toggle",opacity:"toggle"},"normal"),s(i,a,n)})}},"4e68e437f5b716377a9d":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TaskListHeaderFixed=t.updateTaskNum=t.TabChange=t.showSettings=t.unpublishTask=t.publishTask=t.deleteTask=t.publishCourse=t.deleteCourse=t.closeCourse=t.taskSortable=t.sortablelist=void 0;var n=s("b334fd7e4c5a19234db2"),i=a(n),o=s("8f840897d9471c8c1fbd"),r=a(o),l=t.sortablelist=function(e){var t=$(e),s=t.sortable("serialize").get();$.post(t.data("sortUrl"),{ids:s},function(e){var s=0,a=0,n=0;t.find(".task-manage-item").each(function(){var e=$(this);e.hasClass("js-task-manage-item")?e.find(".number").length>0&&(s++,e.find(".number").text(s)):e.hasClass("task-manage-unit")?(n++,e.find(".number").text(n)):e.hasClass("task-manage-chapter")&&(a++,n=0,e.find(".number").text(a))}),t.trigger("finished")})};t.taskSortable=function(e){$(e).length&&(0,r.default)({element:e,ajax:!1},function(t){l(e)})},t.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var t=$(e.currentTarget);confirm(Translator.trans("是否确定关闭该教学计划？"))&&$.post(t.data("check-url"),function(e){e.warn&&!confirm(Translator.trans(e.message))||$.post(t.data("url"),function(e){e.success?((0,i.default)("success","关闭成功"),location.reload()):(0,i.default)("danger","关闭失败："+e.message)})})})},t.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){confirm(Translator.trans("是否确定删除该教学计划？"))&&$.post($(e.currentTarget).data("url"),function(e){e.success?((0,i.default)("success","删除成功"),location.reload()):(0,i.default)("danger","删除失败："+e.message)})})},t.publishCourse=function(){$("body").on("click",".js-publish-course",function(e){confirm(Translator.trans("是否确定发布该教学计划？"))&&$.post($(e.target).data("url"),function(e){e.success?((0,i.default)("success","发布成功"),location.reload()):(0,i.default)("danger","发布失败："+e.message,{delay:5e3})})})},t.deleteTask=function(){$("body").on("click",".delete-item",function(e){if("task"==$(e.currentTarget).data("type")){if(!confirm(Translator.trans("是否确定删除该任务吗？")))return}else if("chapter"==$(e.currentTarget).data("type")&&!confirm(Translator.trans("是否确定删除该章节吗？")))return;$.post($(e.currentTarget).data("url"),function(t){t.success?((0,i.default)("success","删除成功"),$(e.target).parents(".task-manage-item").remove(),l("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,i.default)("danger","删除失败："+t.message)})})},t.publishTask=function(){$("body").on("click",".publish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var s=$(e.target).closest(".task-manage-item");(0,i.default)("success","发布成功"),$(s).find(".publish-item").addClass("hidden"),$(s).find(".delete-item").addClass("hidden"),$(s).find(".unpublish-item").removeClass("hidden"),$(s).find(".publish-status").addClass("hidden")}else(0,i.default)("danger","发布失败："+t.message)})})},t.unpublishTask=function(){$("body").on("click",".unpublish-item",function(e){$.post($(e.target).data("url"),function(t){if(t.success){var s=$(e.target).closest(".task-manage-item");(0,i.default)("success","取消发布成功"),$(s).find(".publish-item").removeClass("hidden"),$(s).find(".delete-item").removeClass("hidden"),$(s).find(".unpublish-item").addClass("hidden"),$(s).find(".publish-status").removeClass("hidden")}else(0,i.default)("danger","取消发布失败："+t.message)})})},t.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var t=$(e.currentTarget),s=t.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},t.TabChange=function(){$('[data-role="tab"]').click(function(e){var t=$(this);$(t.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},t.updateTaskNum=function(e){},t.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var t=e.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})}}},0:function(e,t,s){"use strict";var a=s("4e68e437f5b716377a9d"),n=s("d14d05cad9e7abf02a5d");$('[data-help="popover"]').popover();var i="#sortable-list";(0,a.taskSortable)(i),(0,a.updateTaskNum)(i),(0,a.closeCourse)(),(0,a.deleteCourse)(),(0,a.deleteTask)(),(0,a.publishTask)(),(0,a.unpublishTask)(),(0,a.showSettings)(),(0,a.TaskListHeaderFixed)(),$("#sortable-list").on("click",".js-chapter-toggle-show",function(e){var t=$(e.currentTarget),s=t.closest(".js-task-manage-chapter");s.nextUntil(".js-task-manage-chapter").animate({height:"toggle",opacity:"toggle"},"normal"),(0,n.toggleIcon)(s,"es-icon-keyboardarrowdown","es-icon-keyboardarrowup")})}});