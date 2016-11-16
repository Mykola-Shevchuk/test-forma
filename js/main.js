window.onload = function() {

	var subMenuElement = document.querySelector('.sub-menu'),
		menuList = document.querySelector('nav ul'),
		placeholderEmail = document.querySelector('#e-mail'),
		placeholderPassword = document.querySelector('#password');


/*Работа SubMenu в мобильное версии сайта*/

	subMenuElement.addEventListener('click', toggleSubMenu, false);

	function toggleSubMenu () {
		if (menuList.style.display === "block") {
			menuList.style.display = "none";

		} else {
			menuList.style.display = "block";
		}

		
	}

	if (window.innerWidth <= 530) {
		placeholderEmail.setAttribute('placeholder', 'E-mail');
  		placeholderPassword.setAttribute('placeholder', 'Пароль');
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