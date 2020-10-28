$(function(){
    var status = {
        Notice  : {value : 1, flash: 'notice' , title : '連絡: '}, // 連絡等に使用
        Warning : {value : 2, flash: 'warning', title : '警告: '}, // メンテナンス周知等に使用
        Error   : {value : 3, flash: 'error'  , title : '重要連絡:'} // 不具合などの通知に使用
    };

    // todo: selected_status、message、administrator を更新してください。
    var display_status = status.Warning;
    var message = '2020/10/29(木) 16:00～メンテナンスを行います';
    var administrator = '名前'
    // end todo
    
    // impl: 日時判定を入れて自動でお知らせを非表示にする機能が欲しい

/*
    // impl: PJごとに連絡したい場合を実装したい
    // error: 宣言ができない
    var jr-projects = ['project-id1', 'project-id2'];
    
    for (const project of jr-projects) {
        $('body.project-' + project + ' #content').prepend(
        $('<div class="flash ' + display_status.flash + '">'
             + display_status.title + message  
             + 'by' + administrator + '</div>'));
    }
*/

    // すべてのProjectに適用するのであれば以下を使用
    $('#content').prepend(
        $('<div class="flash ' + display_status.flash + '">'
             + display_status.title + message  
             + 'by' + administrator + '</div>'));
});
