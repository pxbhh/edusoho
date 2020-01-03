webpackJsonp(["app/js/testpaper-manage/create/index"],{0:function(e,t){e.exports=jQuery},"1be2a74362f00ba903a0":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7ab4a89ebadbfdecc2bf"),r=i(a),s=n("4602c3f5fe7ad9e3e91d"),o=i(s),l=function(){function e(t,n){(0,r.default)(this,e),this.select1=t,this.select2=n,this._initEvent()}return(0,o.default)(e,[{key:"_initEvent",value:function(){var e=this;this.select1.on("change",function(t){return e._selectChange(t)})}},{key:"_selectChange",value:function(e){var t=this.select1.data("url"),n=this.select1.val(),i=this;if(i.select2.text(""),0==n)return void this.select2.hide();$.post(t,{courseId:n},function(e){if(""!=e){var t='<option value="0">'+Translator.trans("site.choose_hint")+"</option>";$.each(e,function(e,n){t+='<option value="'+n.id+'">'+n.title+"</option>"}),i.select2.append(t),i.select2.show()}else i.select2.hide()})}}]),e}();t.default=l},a41ed839d324b3dcacf1:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=$('[name="ranges[courseId]"]').val(),n=$('[name="ranges[lessonId]"]').val();$.post(e,{courseId:t,lessonId:n},function(e){$('[role="questionNum"]').text(0),$.each(e,function(e,t){$("[type='"+e+"']").text(t.questionNum)})})}var r=n("7ab4a89ebadbfdecc2bf"),s=i(r),o=n("4602c3f5fe7ad9e3e91d"),l=i(o),c=n("8f840897d9471c8c1fbd"),d=i(c),u=n("9181c6995ae8c5c94b7a"),f=n("1be2a74362f00ba903a0"),m=i(f),h=n("b334fd7e4c5a19234db2"),p=i(h);new(function(){function e(t){(0,s.default)(this,e),this.$form=t,this.$description=this.$form.find('[name="description"]'),this.validator=null,this.difficultySlider=null,this._initEvent(),this._initValidate(),this._initSortList(),this.scoreSlider=null}return(0,l.default)(e,[{key:"_initEvent",value:function(){var e=this;this.$form.on("click",'[data-role="submit"]',function(t){return e._submit(t)}),this.$form.on("click",'[name="mode"]',function(t){return e.changeMode(t)}),this.$form.on("click",'[name="range"]',function(t){return e.changeRange(t)}),this.$form.on("blur",'[data-role="count"]',function(t){return e.changeCount(t)})}},{key:"initScoreSlider",value:function(e,t){var n=document.getElementById("score-slider"),i={start:e,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:t}};this.scoreSlider?this.scoreSlider.updateOptions(i):(this.scoreSlider=noUiSlider.create(n,i),n.noUiSlider.on("update",function(e,n){$(".noUi-tooltip").text((e[n]/t*100).toFixed(0)+"%"),$(".js-passScore").text(parseInt(e[n]))})),$(".noUi-handle").attr("data-placement","top").attr("data-original-title",Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:e})).attr("data-container","body"),$(".noUi-handle").tooltip({html:!0}),$(".noUi-tooltip").text((e/t*100).toFixed(0)+"%")}},{key:"changeMode",value:function(e){"difficulty"==$(e.currentTarget).val()?(this.$form.find("#difficulty-form-group").removeClass("hidden"),this.initDifficultySlider()):this.$form.find("#difficulty-form-group").addClass("hidden")}},{key:"changeRange",value:function(e){"course"==$(e.currentTarget).val()?this.$form.find("#testpaper-range-selects").addClass("hidden"):this.$form.find("#testpaper-range-selects").removeClass("hidden")}},{key:"initDifficultySlider",value:function(){if(!this.difficultySlider){var e=document.getElementById("difficulty-percentage-slider");this.difficultySlider=noUiSlider.create(e,{start:[30,70],margin:30,range:{min:0,max:100},step:1,connect:[!0,!0,!0],serialization:{resolution:1}}),e.noUiSlider.on("update",function(e){var t=parseInt(e[0]),n=e[1]-e[0],i=100-e[1];$(".js-simple-percentage-text").html(Translator.trans("activity.testpaper_manage.simple_percentage",{simplePercentage:t})),$(".js-normal-percentage-text").html(Translator.trans("activity.testpaper_manage.normal_percentage",{normalPercentage:n})),$(".js-difficulty-percentage-text").html(Translator.trans("activity.testpaper_manage.difficulty_percentage",{difficultyPercentage:i})),$('input[name="percentages[simple]"]').val(t),$('input[name="percentages[normal]"]').val(n),$('input[name="percentages[difficulty]"]').val(i)})}}},{key:"_initEditor",value:function(e){var t=this,n=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100});n.on("change",function(){t.$description.val((0,u.delHtmlTag)(n.getData()))}),n.on("blur",function(){t.$description.val((0,u.delHtmlTag)(n.getData())),e.form()})}},{key:"changeCount",value:function(){var e=0;this.$form.find('[data-role="count"]').each(function(t,n){e+=parseInt($(n).val())}),this.$form.find('[name="questioncount"]').val(e>0?e:null)}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0},limitedTime:{min:0,max:1e4,digits:!0},mode:{required:!0},range:{required:!0},questioncount:{required:!0}},messages:{questioncount:Translator.trans("activity.testpaper_manage.question_required_error_hint"),name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})},mode:Translator.trans("activity.testpaper_manage.generate_mode_hint"),range:Translator.trans("activity.testpaper_manage.question_scope")}}),this.$form.find(".testpaper-question-option-item").each(function(){var e=$(this);e.find('[data-role="count"]').rules("add",{min:0,max:function(){return parseInt(e.find('[role="questionNum"]').text())},digits:!0}),e.find('[data-role="score"]').rules("add",{min:0,max:1e3,es_score:!0}),e.find('[data-role="missScore"]').length>0&&e.find('[data-role="missScore"]').rules("add",{min:0,max:function(){return parseInt(e.find('[data-role="score"]').val())},es_score:!0})}),this._initEditor(this.validator)}},{key:"_initSortList",value:function(){(0,d.default)({element:"#testpaper-question-options",itemSelector:".testpaper-question-option-item",handle:".question-type-sort-handler",ajax:!1})}},{key:"_submit",value:function(e){var t=this,n=$(e.currentTarget),i=this.validator.form(),a=0;this.$form.find('[data-role="count"]').each(function(){var e=$(this);a+=Number(e.val())}),i&&(a>2e3?(0,p.default)("danger",Translator.trans("activity.testpaper_manage.questions_length_hint")):$.post(n.data("checkUrl"),this.$form.serialize(),function(e){"no"==e.status?$(".js-build-check").html(Translator.trans("activity.testpaper_manage.question_num_error")):($(".js-build-check").html(""),n.button("loading").addClass("disabled"),t.$form.submit())}))}}]),e}())($("#testpaper-form")),new m.default($('[name="ranges[courseId]"]'),$('[name="ranges[lessonId]"]')),$('[name="ranges[courseId]"]').change(function(){a($(this).data("checkNumUrl"))}),$('[name="ranges[lessonId]"]').change(function(){a($(this).data("checkNumUrl"))})}},["a41ed839d324b3dcacf1"]);