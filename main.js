alert("hello");
function message(){
     var Name = document.getElementById('name');
     var email = document.getElementById('email');
     var mobile = document.getElementById('mobile');
     var msg = document.getElementById('msg');
     const success = document.getElementById('success');
     const danger = document.getElementById('danger');

     if(Name.value === ''  || email.value === '' || mobile.value === '' ||msg.value === ''){
        danger.style.display = 'block';
     }
     else{
        setTimeout(()=>{
            Name.value ='';
            email.value = '';
            mobile.value ='';
            msg.value = '';
        },2000);

        success.style.display = 'block';
     }

     setTimeout(()=>{
        danger.style.display ='none';
        success.style.display='none';
    },4000);

}