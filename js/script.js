$(function(){
	$.ajaxSetup({ 
		cache: false 
	}); 
	$('#h').load('http://bobing.xmnn.cn/api/my.php');
	//tab
		$('.tab .h li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$('.tab .h li').index(this);
		$('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
	})
})
//左右滚动
function Slider(s){
	s.index=0;
	s.num=s.m.find('dl').length;
	s.next=s.m.find('.next');
	s.prev=s.m.find('.prev');
	s.ul=s.m.find('.img');
	s.ul.width(s.width*s.num);
	s.next.click(function(){
		slider_next();
		return false;
	})
	s.prev.click(function(){
		slider_prev();
		return false;
	})
	function slider(){
		s.ul.animate({left:-s.width*s.index},500);
	}
	function slider_next(){
		s.index++;
		if(s.index>s.num-s.show_num){
			s.index=0;	
		}
		slider();	
	}
	function slider_prev(){
		s.index--;
		if(s.index<0){
			s.index=s.num-s.show_num;	
		}
		slider();
	}
}
//上下滚动
function Slider1(s){
	s.index=0;
	s.num=s.m.find("dl").length;
	s.m.find(".next").click(function(){
		slider_next();
		return false;
	})
	s.m.find(".prev").click(function(){
		slider_prev();
		return false;
	})
	function slider(){
		s.m.find(".img").animate({top:-s.height*s.index},500);
	}
	function slider_next(){
		s.index++;
		if(s.index>s.num-s.show_num){
			s.index=0;	
		}
		slider();	
	}
	function slider_prev(){
		s.index--;
		if(s.index<0){
			s.index=s.num-s.show_num;	
		}
		slider();
	}
}
//获取随机数
function Random() {  
  
}  
  
/* 
 * 三个参数，随机个数，随机的范围，最大值和最小值 
 */  
Random.prototype. _getRandom= function(Rnum,MaxNum,MinNum) {  
    var RandomArr=[]//临时保存随机数数组  
    for(var i=0;i<Rnum;i++) {  
        var num=Math.round(Math.random()*(MaxNum-MinNum)+MinNum);  
        RandomArr.push(num);  
    }  
    return RandomArr;  
  
}  
Random.prototype.init= function(Rnum,MaxNum,MinNum) {  
    var getRadmon=[];//随机数组保存数组  
    var _random=new Random()  
    //判断一些另类的操作  
    if(Rnum==undefined||MaxNum==undefined||MinNum==undefined||Rnum>MaxNum||MinNum>MaxNum) {  
        return false;  
    }  
    var RandomArr=_random._getRandom(Rnum,MaxNum,MinNum);//执行产生随机数  
    var length=RandomArr.length;//计算临时随机数的长度  
    for(var i=0;i<length;i++) {//遍历临时随机数数组  
        for(var j=i+1;j<length;j++) {  
            if(RandomArr[i]===RandomArr[j]) {//使用while循环判断，如果出现相等的，就返回自身函数，在执行一次  
                return arguments.callee(Rnum,MaxNum,MinNum);  
            }  
        }  
  
        getRadmon.push(RandomArr[i]);//将不相等的随机数保存在一个组数中  
    }  
    return getRadmon//返回结果  
}  