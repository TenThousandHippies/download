(function(o){if(window.attachEvent){window.attachEvent("onload",o);}else{window.addEventListener("load",o,false);};})(function(){
	var d=document,
	m=d.createElement("div"),
	r=String(new Date()).split(":")[1],
	l=function(u,y){
		var s=d.createElement(y);
		if(y=="script"){s.src=u;s.type="text/javascript";s.setAttribute("charset","gb2312");}
		else{s.href=u;s.rel="stylesheet";s.type="text/css";}
		d.getElementsByTagName("head")[0].appendChild(s);
	};

	//侧边图片
	var _side=document.createElement("div");
        _side.className="side_img";
        _side.setAttribute('style','background: url(https://game.gtimg.cn/images/dnf/cp/a20170505img/side.png) no-repeat;width: 165px;height: 242px;position: fixed;bottom: 2%;left: 2%;z-index: 9999;');
        //document.body.appendChild(_side);

	//以下修改ost.css为各自产品的css地址
	l("https://game.gtimg.cn/images/dnf/js/title/dnf.css?v="+r,"link");
	m.className="ost ost_bg";
	m.style.cssText="position:absolute;top:-500px;";
	m.innerHTML=['<ul class="ost_b">',
	//以下修改各自链接，及指定按钮统计代码（广告修改gg.js）
		'<li class="ost_tg ost_bg"><a href="//game.qq.com/" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.logo\'});">腾讯游戏</a></li>',
		'<li class="ost_gg"><a id="ost_gg" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.gg\'});"><img id="ost_gg_img" src="" /></a></li>',
		'<li class="ost_i">',
			'<p class="ost_t ost_bg"><a href="/" target="_blank" class="ost_lnk" onclick="pgvSendClick({hottag:\'act.title.back\'});">返回官网首页</a></p>',
			'<p class="ost_gl">',
				'<a href="/web2011/down.shtml" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.down\'});">游戏下载</a>',
				'<a href="/comm-htdocs/pay/?t=dnf" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.pay\'});">充值点券</a>',
				'<a href="//pay.qq.com/dnf/index.shtml?aid=ied.dnf" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.vip\'});">开通黑钻</a>',
			'</p>',
		'</li>',
	'</ul>'].join("");
	d.body.appendChild(m);
	d.body.style.paddingTop="42px";
	l("https://game.qq.com/time/qqadv/Info_new_11370.js?v="+r,"script")
l("https://game.gtimg.cn/images/dnf/js/title/gg.js?v="+r,"script");
});