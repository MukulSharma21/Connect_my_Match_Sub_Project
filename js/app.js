const btn =document.getElementById('course-btn');
const hidden_section =document.getElementById('hidden');
const caret_icon =document.querySelector('.caret_icon');
let num = 0;

btn.addEventListener('click' , function(){
	if (num === 0) {
		hidden_section.style.display = "block";
		caret_icon.innerHtml = `<i class="fas fa-caret-down "></i>`;
		num=num+1;
	} else {
		hidden_section.style.display = "none";
		caret_icon.innerHtml = `<i class="fas fa-caret-up "></i>`;
		num =0;
	}
});