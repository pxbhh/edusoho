webpackJsonp(["app/js/question-manage/read/index"],{"39d310d4ad12934a07ab":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(e){if(!e)return!1;var t=o.attr("action"),r=o.attr("method");i.button("loading"),$.ajax({type:r,url:t,data:e,cache:!1,processData:!1,contentType:!1,success:function(e){i.button("reset"),!0===e.success?n(e):a(e)},error:function(e){i.button("reset"),d.val(""),e=e.responseJSON.error}})}function n(e){window.location.href=e.url}function a(e){p.addClass("hidden"),u.addClass("hidden"),f.html(e).removeClass("hidden"),g.removeClass("hidden")}var r=void 0,o=$("#import-step-form"),i=$("#upload-btn"),d=$("#form_file"),s=$("#upload-file-box"),l=document.getElementById("upload-file-box"),p=$("#old-template-btn"),u=$(".js-step1-view"),c=$(".js-step2-view"),f=$(".js-step3-view"),v=$(".js-step2-btn"),g=$(".js-step3-btn");d.on("change",function(e){var n=e.currentTarget.files;if(0===n.length)return!1;r=n[0].name;var a=r.split(".");a.pop(),r=a.join("."),t(new FormData(o[0]))}),s.on({dragleave:function(e){e.preventDefault(),e.stopPropagation()},drop:function(e){e.preventDefault(),e.stopPropagation()},dragenter:function(e){e.preventDefault(),e.stopPropagation()},dragover:function(e){e.preventDefault(),e.stopPropagation()}}),l.addEventListener("dragenter",function(e){s.toggleClass("bg-primary-light")},!1),l.addEventListener("dragleave",function(e){s.toggleClass("bg-primary-light")},!1),l.addEventListener("drop",function(e){s.removeClass("bg-primary-light");var n=e.dataTransfer.files;if(0===n.length)return!1;r=n[0].name;var a=r.split(".");a.pop(),r=a.join(".");var o=new FormData;o.append("importFile",n[0]),t(o)},!1),p.click(function(){$.ajax({type:"get",url:o.data("plumberUrl")}).done(function(e){$("#modal").html(e)})}),$("#re-import-btn").click(function(){p.removeClass("hidden"),u.removeClass("hidden"),c.addClass("hidden"),f.addClass("hidden"),v.addClass("hidden"),g.addClass("hidden"),d.val("")}),$('[data-toggle="popover"]').popover()};t.registerEvent=a},b62005c30b9bbcf95883:function(e,t,n){"use strict";var a=n("39d310d4ad12934a07ab"),r=$("#import-testpaper-box");(0,a.registerEvent)(r)}},["b62005c30b9bbcf95883"]);