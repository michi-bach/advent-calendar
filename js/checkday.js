function checkday(id) {
	
  const cbox = document.getElementById(id);
  const vis = document.getElementById(id+'a');
  // alert(id);
  
    if (cbox.checked == true){
		vis.style.opacity = 1;
		vis.style.transform = 'scale(1.5,1.5)';
	} else {
		vis.style.opacity = 0;
	}
  
}
