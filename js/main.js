window.onload = function() {

	var subMenuElement = document.querySelector('.sub-menu'),
		menuList = document.querySelector('nav ul');


/*Работа SubMenu в мобильное версии сайта*/

	subMenuElement.addEventListener('click', toggleSubMenu, false);

	function toggleSubMenu () {
		if (menuList.style.display === "block") {
			menuList.style.display = "none";

		} else {
			menuList.style.display = "block";
		}

		
	}

/*Отслеживаем изминения размеров экрана*/

	var resize = function(e){
  		if (window.innerWidth > 600) {
  			menuList.style.display = "block";
  		} else {
  			menuList.style.display = "none";
  		}
	};

	(function(){
		var time;
		window.onresize = function(e){
			if (time)
				clearTimeout(time);
				time = setTimeout(function(){
				resize(e);
			},100);
		}
	})();

}