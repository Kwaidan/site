scrollButton();
function scrollButton() {
	let btn = createBtn("&#9650;");
	if(!btn) { return false; }
	
	//1. Полная высота документа
	let scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	
	//2. Обработчик события scroll
	window.addEventListener("scroll", function() {
		if( window.scrollY > (scrollHeight/2) ) {
			document.documentElement.append(btn);
		}else {
			if(btn) { btn.remove(); }
		}
	});
	
	//3. Кнопка для прокрутки
	function createBtn(text) {
		let btn = document.createElement("button");
		btn.innerHTML = text;
		btn.classList.add("scrollButton");
		
		document.documentElement.style.scrollBehavior = "smooth";
		
		btn.addEventListener("click", function(event) {
			document.documentElement.scrollTop = 0;
		});

		return btn;
	}


    let navbar = document.querySelector('.navbar');
	let sidebar = document.querySelector('.sidebar');
    let prevScrollpos = window.scrollY;

    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            //document.querySelector(".navbar").style.top = "0";
            navbar.style.top = "";
            sidebar.style.top = "";
        } 
        else {
            //document.querySelector(".navbar").style.top = "-7rem";
            navbar.style.top = "-7rem";
            sidebar.style.top = "0rem";
        }
        prevScrollpos = currentScrollPos;
    }

}