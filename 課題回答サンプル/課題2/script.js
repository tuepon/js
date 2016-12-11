;(function() {

    /*------------------------------------*
     * 固定ヘッダー
     * ポートレート時のみページをスクロールしてもヘッダーが固定される仕様
     *------------------------------------*/

    //向きによりclassを切り替える関数
    function fixChange(){
        if(window.innerHeight < window.innerWidth){
            //横向きになった際にclassを削除
            document.querySelector('#header').classList.remove('fix-header');
        }else{
            //縦向きになった際にclassを付与
            document.querySelector('#header').classList.add('fix-header');
        }
    }

    //読み込み時のイベント
    window.addEventListener('load', fixChange,false);
    //回転時のイベント
    window.addEventListener('orientationchange', fixChange,false);

})();
(function(){

    /*------------------------------------*
     * パララックス
     * スクロールにより上下動作による視差を表現する仕様（target.jpg、tam_office.jpgの2箇所で実装のこと）　
     *------------------------------------*/
    var target1 = document.querySelector('#slide2'),
        target2 = document.querySelector('#slide4');

    window.addEventListener('scroll', function(){
        var top1 = target1.getBoundingClientRect().top,
            top2 = target1.getBoundingClientRect().top,
            height = window.innerHeight;

        //#slide2が画面内にいる場合のみ
        if(top1 > height*-1 && top1<height){
            //背景画像をスクロールよりゆっくりと動かす
            target1.style.backgroundPositionY =-200+(height-top1)/5+'px';
        }

        //#slide4が画面内にいる場合のみ
        if(top2 > height*-1 && top2<height){
            //背景画像をスクロールよりはやく動かす
            target2.style.backgroundPositionY =(top2-height)/10+'px';
        }

    },false);
})();
(function(){

    /*------------------------------------*
     * サイドドロワー
     * pencilマークのクリックで右から申し込みフォームが現れる仕様　
     *------------------------------------*/

    //pencilマークがクリックされた場合
    document.querySelector('.drawer-button a').addEventListener('click', function (event) {
        document.querySelector('body').classList.add('show-drawer');
        //ブラウザのデフォルトイベントを抑制
        event.preventDefault();
    }, false);
    //レイヤーがクリックされた場合
    document.querySelector('.drawer-close').addEventListener('click', function (event) {
        document.querySelector('body').classList.remove('show-drawer');
    }, false);


})();
(function(){

    /*------------------------------------*
     * ページトップボタン
     * 一定スクロール後に表示される仕様　
     *------------------------------------*/
    var pageTop = document.querySelector('#page-top');
    window.addEventListener('scroll', function() {
        if(window.scrollY>300){
            pageTop.style.display = 'block';
        }else{
            pageTop.style.display = 'none';
        }
    }, false);
})();