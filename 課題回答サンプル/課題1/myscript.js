(function(){
	/*---------------------
	*開閉メニューの写経2016/12/11
	*/
	
	//初期状態の作成
	var target = document.querySelectorAll('.js-globalNavi ul');
	for(var i = 0; i < target.length; i++){
		target[i].style.display = 'none';
	}
	
	//イベントの設定
	var trigger = document.querySelectorAll('.js-globalNavi li');
	for(var i = 0; i < target.length; i++){
		//マウスオーバー
		trigger[i].addEventListener('mouseover',function(){
			//サブメニューを開く
			this.querySelector('ul').style.display = 'block';
		},false);
		//マウスアウト
		trigger[i].addEventListener('mouseout',function(){
			//サブメニューを閉じる
			this.querySelector('ul').style.display = 'none';
		},false);
	}
})();

(function(){
	/*---------------------
	*スライダーの写経2016/12/11
	*/

	//現在表示しているページ
	var page = 1;

	//ギャラリーの左側がクリックされた場合
	document.querySelector('js-leftSlideTrigger').addEventListener('click',function(){
		//現在のページから１ページ前を指定
		page--;
		//0ページ目の場合は3ページ目を指定する
		if(page===0)page=3;
		//指定したページを表示する
		galleryRender();
	},false);

	//ギャラリーの右側がクリックされた場合
	document.querySelector('.js-rightSlideTrigger').addEventListener('click',function(){
		//現在のページから1ページ後を指定
		page++;
		//3ページ目より大きい場合は1ページ目を指定する
		if(page>3)page=1;
		//指定したページを表示する
		galleryRender();
	},false);

	function galleryRender(){
		//表示ページのleftプロパティを設定する
		document.querySelector('#slideshow ul').style.left = (1-page)*950+'px';
	}
})();

