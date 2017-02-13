/**
 * Created by Administrator on 2017/2/4 0004.
 */
    var currYear = (new Date()).getFullYear();
    var opt={};
    opt.date = {preset : 'date'};
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "当前时间",
        startYear: currYear - 10, //开始年份
        endYear: currYear + 10 //结束年份
    };
var optDate = $.extend(opt['date'], opt['default']);
var optDateTime = $.extend(opt['datetime'], opt['default']);
var optTime = $.extend(opt['time'], opt['default']);
$("#appDate").mobiscroll(optDate).datetime(optDate);
$("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
$("#appTime").mobiscroll(optTime).time(optTime);

