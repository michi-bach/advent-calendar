var currentDate = new Date();

function checkday(id) {
	
  const cbox = document.getElementById(id);
  const vis = document.getElementById(id+'a');
  // alert(id);
  
    if (cbox.checked == true && parseInt(id.slice(1)) <= currentDate.getDate() ){
		vis.style.opacity = 1;
		vis.style.transform = 'scale(1.5,1.5)';
	} else {
		cbox.checked = false
		vis.style.opacity = 0;
	}
  
}
