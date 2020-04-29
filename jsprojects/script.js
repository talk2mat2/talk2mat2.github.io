


const sendBtn = document.querySelector('#buttonsend');
const messin = document.querySelector('#mess');
const messout= document.querySelector('#messOut');



function outMess(){
	let content = messin.value;
	if(messin.value==''){
	alert('please put a valid messgae');
}
else{messout.innerHTML=content;}
	messin.value='';

};

sendBtn.addEventListener('click',outMess);




// if(){
// 	
// 	else {
// 		messout.innerHTML=content;
// 	messin.value='';

// 	}
// 	}