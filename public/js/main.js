(function(){
	require(["index"],function(Cat){
		var cat= new Cat("mainCanvas");
		//生成猫的对象 并初始化
		window.onload = cat.init();
	})
})();