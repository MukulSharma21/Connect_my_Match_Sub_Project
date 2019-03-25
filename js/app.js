const btn =document.getElementById('course-btn');
const hidden_section =document.getElementById('hidden');
let num = 0;

// Show the hidden section
btn.addEventListener('click' , function(){
	if (num === 0) {
		hidden_section.style.display = "block";
		num=num+1;
	} else {
		hidden_section.style.display = "none";
	}
});