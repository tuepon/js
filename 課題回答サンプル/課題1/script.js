;(function() {

    /*------------------------------------*
     * 開閉メニュー
     * メニューにマウスをのせた際にサブメニューが開閉するしよう。
     *------------------------------------*/

    //初期状態の作成
    var target = document.querySelectorAll('.js-gloablNavi ul');
    for (var i = 0; i < target.length; i++) {
        target[i].style.display = 'none';
    }

    //イベントの設定
    var trigger = document.querySelectorAll('.js-gloablNavi>li');
    for (i = 0; i < trigger.length; i++) {
        //マウスをのせた場合
        trigger[i].addEventListener('mouseover', function () {
            //サブメニュー開く
            this.querySelector('ul').style.display = 'block';
        }, false);
        //マウスを外した場合
        trigger[i].addEventListener('mouseout', function () {
            //サブメニュー閉じる
            this.querySelector('ul').style.display = 'none';
        }, false);
    }

})();
(function(){

    /*------------------------------------*
     * スライダー
     * ギャラリーがスライドして表示が切り替わる仕様
     *------------------------------------*/

    //現在表示しているページ
    var page=1;

    //ギャラリーの左側がクリックされた場合
    document.querySelector('.js-leftSlideTrigger').addEventListener('click', function () {
        //現在のページから1ページ前を指定
        page--;
        //0ページ目の場合は3ページ目を指定する
        if(page===0)page=3;
        //指定したページを表示する
        galleryRender();
    }, false);

    //ギャラリーの右側がクリックされた場合
    document.querySelector('.js-rightSlideTrigger').addEventListener('click', function () {
        //現在のページから1ページ後を指定
        page++;
        //3ページ目より大きい場合は1ページ目を指定する
        if(page>3)page=1;
        //指定したページを表示する
        galleryRender();
    }, false);

    function galleryRender(){
        //表示ページのleftプロパティを設定する
        document.querySelector('#slideshow ul').style.left = (1-page)*950+'px';
    }

})();
(function(){

    /*------------------------------------*
     * ボックス高揃え
     * 表示位に高さが揃っている仕様
     *------------------------------------*/
    var target = document.querySelectorAll('.js-block'),
        maxHeight = 0,
        padding;

    //最大の高さを取得
    for(var i=0;i<target.length;i++) {
        if(target[i].offsetHeight>maxHeight){
            maxHeight = target[i].offsetHeight;
        }
    }

    //最大の高さを描く要素の適応
    for(i=0;i<target.length;i++) {
        //パディングの値を取得
        padding = parseInt(getComputedStyle(target[i]).paddingTop,10)
                + parseInt(getComputedStyle(target[i]).paddingBottom,10);
        //高さの設定
        target[i].style.height = (maxHeight-padding)+'px';
    }

})();
(function(){

    /*------------------------------------*
     * 切替えタブ
     * クリック時にタブが切り替わっている仕様
     *------------------------------------*/

    //初期状態の作成
    //タブをアクティブにする
    document.querySelector('#notenav a').classList.add('active');

    //パネルを開く
    var target = document.querySelectorAll('#notecont div');
    for(var i=0;i<target.length;i++) {
        target[i].style.display = 'none';
    }
    target[0].style.display = 'block';

    //イベントの設定
    var trigger = document.querySelectorAll('#notenav a');
    for (i = 0; i < trigger.length; i++) {

        //マウスをのせた場合
        trigger[i].addEventListener('click', function (event) {

            //ブラウザのデフォルトイベントを抑制
            event.preventDefault();

            //タブをアクティブにする
            document.querySelector('#notenav a.active').classList.remove('active');
            this.classList.add('active');

            //パネルをアクティブを開く
            for(i=0;i<target.length;i++) {
                target[i].style.display = 'none';
            }
            document.querySelector(this.hash).style.display = 'block';
        }, false);
    }

})();