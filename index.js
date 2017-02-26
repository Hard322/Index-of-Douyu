var sub=document.getElementsByClassName('classify')[0];
var timeout;
sub.onmouseover=function(){
	clearTimeout(timeout);
	this.getElementsByTagName('img')[0].src='assort-icon-hover.png';
	document.getElementsByClassName('submenu')[0].style.display='block';
}
var submenu=document.getElementsByClassName('submenu')[0];
sub.onmouseout=function(){
		clearTimeout(timeout);
		timeout=setTimeout(function(){sub.getElementsByTagName('img')[0].src='assort-icon.png';
	    	submenu.style.display='none';
		},50);
}
submenu.onmouseover=function(){
	clearTimeout(timeout);
	sub.getElementsByTagName('img')[0].src='assort-icon-hover.png';
	this.style.display='block';
}
var timeout2;
var sub2=document.getElementById('history');
var login_sub=document.getElementsByClassName('login_sub')[0];
sub2.onmouseover=function(){
	clearTimeout(timeout2);
	this.children[0].style.backgroundPosition='-23px'+' 0px';
	this.children[1].style.color='#FF630E';
	login_sub.style.display='block';
}
sub2.onmouseout=function(){
	clearTimeout(timeout2);
	timeout2=setTimeout(function(){
		sub2.children[0].style.backgroundPosition='0px'+' 0px';
		sub2.children[1].style.color='black';
	    login_sub.style.display='none';
	},50);
}
login_sub.onmouseover=function(){
	clearTimeout(timeout2);
	sub2.children[0].style.backgroundPosition='-23px'+' 0px';
	sub2.children[1].style.color='#FF630E';
	login_sub.style.display='block';
}
var sub3=document.getElementById('attention');
var timeout3;
sub3.onmouseover=function(){
	clearTimeout(timeout3);
	this.children[0].style.backgroundPosition='-23px'+' -26px';
	this.children[1].style.color='#FF630E';
	
	document.getElementsByClassName('login_sub')[1].style.display='block';
}
sub3.onmouseout=function(){
	clearTimeout(timeout3);
	timeout3=setTimeout(function(){
		sub3.children[0].style.backgroundPosition='0px'+' -26px';
		sub3.children[1].style.color='black';
		document.getElementsByClassName('login_sub')[1].style.display='none';
	},50);
}
document.getElementsByClassName('login_sub')[1].onmouseover=function(){
	clearTimeout(timeout3);
	sub3.children[0].style.backgroundPosition='-23px'+' -26px';
	sub3.children[1].style.color='#FF630E';
	this.style.display='block';
}
var sub4=document.getElementById('download');
sub4.onmouseover=function(){
	this.children[0].style.backgroundPosition='-23px'+' -51px';
	this.children[1].style.color='#FF630E';
}
sub4.onmouseout=function(){
	this.children[0].style.backgroundPosition='0px'+' -51px';
	this.children[1].style.color='black';
}
var sub5=document.getElementsByTagName('input')[0];
function changelength(mls) {
	var sear=document.getElementById('search');
	var ml=window.getComputedStyle(sear,null).marginLeft;
	ml=parseInt(ml.slice(0,-2))-mls;
	if(ml>30&&ml<=50){
		console.log(ml);
	    var wi=200-ml;
		sear.style.marginLeft=ml+'px';
		sear.style.width=wi+'px';
		var t1=setTimeout(function(){changelength(mls);},10);
	}
}
sub5.onfocus=function(){
	changelength(2);
}
sub5.onblur=function(){
	changelength(-2);
}
var leftbtn=document.getElementsByClassName('leftbtn')[0];

leftbtn.onclick=function(){
	var sidebar=document.getElementsByClassName('sidebar')[0];
	var sidebarwidth=window.getComputedStyle(sidebar,null).width;
	var shrink=document.getElementsByClassName('shrink')[0];
	var spread=document.getElementsByClassName('spread')[0];
	if (sidebarwidth==='50px') {
		sidebar.style.width='244px';
		leftbtn.style.backgroundPositionY='0px';
		shrink.style.display='none';
		spread.style.display='block';
		scroll();
		changecontent();
	}else{
		sidebar.style.width='50px';
		leftbtn.style.backgroundPositionY='-151px';
		shrink.style.display='block';
		spread.style.display='none';
		changecontent();
	}
}

/*滑动栏实现*/
var scrollbar=document.getElementsByClassName('scrollbar')[0],
    track=document.getElementsByClassName('track')[0],
	thumb=document.getElementsByClassName('thumb')[0],
	overview=document.getElementsByClassName('overview')[0],
	sbarheightcopy,thumbtop,sbarheight,ovheight;
function scroll(){
	sbarheight=window.getComputedStyle(scrollbar,null).height;
	ovheight=window.getComputedStyle(overview,null).height;
	ovheight=parseInt(ovheight.slice(0,-2));
	sbarheight=parseInt(sbarheight.slice(0,-2))-102;
	var thumbheight;
		thumbheight=sbarheight*sbarheight/ovheight;
		sbarheightcopy=sbarheight-thumbheight;
		thumb.style.height=thumbheight+'px';
		track.style.height=sbarheight+'px';
}
var thumbmove;
thumb.onmousedown=function(event){
	var y0=event.clientY;
	thumbtop=parseInt(window.getComputedStyle(thumb,null).top.slice(0,-2));
	thumbmove=true;
	document.onmousemove=function(event){
		var y1=thumbtop+event.clientY-y0;
	    if(thumbmove&&(y1>=0)&&(y1<=sbarheightcopy)) {
	   		 thumb.style.top=y1+'px';
	   		 y1=52-y1/sbarheight*ovheight;
	   		 overview.style.marginTop=y1+'px';
	    }
	};
}
overview.onmousewheel=function(event){
	var thumbtop2=parseInt(window.getComputedStyle(thumb,null).top.slice(0,-2));
	var y2=thumbtop2-event.wheelDelta/10;
	console.log(y2);
	if(y2<0) {
		thumb.style.top=0+'px';
		 overview.style.marginTop='52'+'px';
	} else {
		if(y2>sbarheightcopy){
			thumb.style.top=sbarheightcopy+'px';
			y2=52-sbarheightcopy/sbarheight*ovheight;
			overview.style.marginTop=y2+'px';
		} else {
			thumb.style.top=y2+'px';
			y2=52-y2/sbarheight*ovheight;
			overview.style.marginTop=y2+'px';
		}
	}
}
window.onmouseup=function(){
	thumbmove=false;
}

//内容大小改变
function changecontent(){
	var a1=262,a2=382,i=0,j,
	    will=parseInt($('.sidebar').eq(0).css('width').slice(0,-2)),
	    will2=$(window).innerWidth();
	    will3=will2-will-45;
	$('.main-content').eq(0).css({'margin-left':will+'px','width':will3+'px','backgroundColor':'#f2f2f2'});
	j=parseInt($('.main-content').eq(0).css('width').slice(0,-2));
	while((a1*i<j)&&(a2*(i+1)<j)){
		i=i+1;
	}
	var catalog1=document.getElementsByClassName('catalog')[0];
	var catalog2=document.getElementsByClassName('catalog')[1];
	setcolumn(catalog1,1,i+1,will3/(i+1)-22);
	setcolumn(catalog2,3,i+1,will3/(i+1)-22);
}

function change(){
	scroll();
	changecontent();
}
function setcolumn(div,row,column,width){
	while(div.hasChildNodes()){
        div.removeChild(div.firstChild);
      }
	for(var i=0;i<row*column;i++){
		e=document.createElement('li');
		e.style.width=width+'px';
		e.style.height=width/3*2+'px';
		e.style.position='relative';
		img1=document.createElement('img');
		img1.src='890551_20161212085005_small.jpg';
		img1.style.width=width+'px';
		img1.style.height=(width/3*2-50)+'px';
		e.appendChild(img1);
		d=document.createElement('div');
		d.style.width=width-8+'px';
		d.style.marginLeft=4+'px';
		d.style.marginRight=4+'px';
		h=document.createElement('h3');
		h.innerHTML='起晚了';
		h.className='host-title';
		sp1=document.createElement('span');
		sp1.innerHTML='DOTA';
		sp1.className='tagName';
		p=document.createElement('p');
		p.innerHTML='<span class="host"><p>天使焦</p></span><span class="viewer">3.8万</span>';
		d.appendChild(h);	
		d.appendChild(sp1);	
		e.appendChild(d);
		e.appendChild(p);
		div.appendChild(e);
	}
}

window.onload=change;
window.onresize=function(){
	scroll();
	changecontent();
};

//登陆层js
$("#login :nth-child(2)").click(function(){
	$(".login_all").css({
		"display":"block"
	});
	$(".la_head div:first-child").css({
		"border-bottom": "2px solid #FF6634"
	});
});
$(".close_icon").click(function(){
	$(".login_all").css({
		"display":"none"
	});
});
