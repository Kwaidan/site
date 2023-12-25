theme();
function theme() {
	const btn = document.querySelector("#btn");
	if(!btn) { return false; }

	const root = document.querySelector(":root");

	const themes = {
		black: {
			"--aside_order": "0",
			"--slider_btn_left": "25px",
			"--body_bgcolor": "#696969",
			"--navbar_bgcolor": "#333",
			"--label_bgcolor": "#000",
			"--putdate_bg": "#ddd",
			"--content_bg": "whitesmoke",
		},
		golden: {
			"--aside_order": "0",
			"--slider_btn_left": "5px",
			"--body_bgcolor": "#6e651d",
			"--navbar_bgcolor": "#4a440e",
			"--label_bgcolor": "#3b360c",
			"--putdate_bg": "#efe9c4",
			"--content_bg": "#f7f4de",
		},
		blue: {
			"--aside_order": "-1",
			"--slider_btn_left": "25px",
			"--body_bgcolor": "#384c72",
			"--navbar_bgcolor": "#172f5d",
			"--label_bgcolor": "#09204b",
			"--putdate_bg": "#cec9f3",
			"--content_bg": "#e5e3f7",
		},
		green: {
			"--aside_order": "-1",
			"--slider_btn_left": "5px",
			"--body_bgcolor": "#3e6342",
			"--navbar_bgcolor": "#0d4614",
			"--label_bgcolor": "#09330e",
			"--putdate_bg": "#c5eeca",
			"--content_bg": "#e4f2e4",
		},
	};
	
	let arr = Object.keys(themes);//получаем массив: [black, green, blue, golden];
	let defaultFlag = arr[0];

	//Проверяем наличие переменной в localStorage
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", JSON.stringify(defaultFlag));
	}

	//Считываем данные с localStorage
	let flag = JSON.parse(localStorage.getItem("theme"));

	//Устанавливаем текущую тему
	changeTheme(flag);

	btn.addEventListener("click", btnHandler);

	//Функция для обработки нажатия кнопки
	function btnHandler(event) {
		event.preventDefault;
		
		//получаем следующий flag
		flag = changeFlag();
		
		localStorage.setItem("theme", JSON.stringify(flag));
		changeTheme(flag);
	}

	//Функция для смены темы
	function changeTheme(flag) {
		Object.entries(themes[flag]).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
		
		//для стилизации btn - другая тема, за которую отвечает следующий flag
		flag = changeFlag();
		let entries = Object.entries(themes[flag]);//[ [key, value], [key, value] ];
		for(let [key, value] of entries) {
			btn.style.setProperty(key, value);
		}
	}
	
	//Ф-я возвращает следующий элемент массива: [black, green, blue, golden];
	function changeFlag() {
		let index = arr.indexOf(flag);
		
		if (index < arr.length-1) {
		  index++;
		}else {
			index = 0;
		}
		
		return arr[index];
	}
}