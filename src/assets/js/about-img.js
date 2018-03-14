/**
 * Created by web-01 on 2017/11/23.
 */
$('img.small').click(function(){
    var url = $(this).attr('data-target');
    // console.log('url');
    $('img.big').attr('src',url);
})