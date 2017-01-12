window.onload=function(){
	waterfull('main','pin');
	var dataInt={'data':[{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'}]};
	window.onscroll=function(){
		if(checkscrollside()){
			var oParent=document.getElementById('main');
			for(var i=0;i<dataInt.data.length;i++){
				var oPin=document.createElement('div');
				oPin.className='pin';
				oParent.appendChild(oPin);
				var oBox=document.createElement('div');
				oBox.className='box';
				oPin.appendChild(oBox);
				var oImg=document.createElement('img');
				oImg.src='images/'+dataInt.data[i].src;
				oBox.appendChild(oImg);
			}
			waterfull('main','pin');
		}
	}

}
function checkscrollside(){
	var oParent=document.getElementById('main');
	var aPin=getClassObj(oParent,'pin');
	var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var documentH=document.documentElement.clientHeight; 
	return(lastPinH<scrollTop+documentH)?true:false;
}
function waterfull(parent,box){
	var oParent=document.getElementById(parent);
	var aPin=getClassObj(oParent,box);
	var iPinW=aPin[0].offsetWidth;
	var num=Math.floor(oParent.offsetWidth/iPinW);
	var pinHArr=[];
	for(var i=0;i<aPin.length;i++){
		var pinH=aPin[i].offsetHeight;
		if(i<num){
			pinHArr[i]=pinH;
		}
		else{
			var minH=Math.min.apply(null,pinHArr);
			var minHIndex=getminHIndex(pinHArr,minH);
			aPin[i].style.position='absolute';
			aPin[i].style.top=minH+'px';
			aPin[i].style.left=minHIndex*iPinW+'px' 
			pinHArr[minHIndex]+=aPin[i].offsetHeight;
		}
	}


}
function getClassObj(parent,className){
	var obj=parent.getElementsByTagName('*');
	var pinS=[];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className==className){
			pinS.push(obj[i]);
		}
	}
	return pinS;
}
function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}
