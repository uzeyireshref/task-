
function validateForm(e) {
    const username = document.forms['myForm']['username'].value;
    const password = document.forms['myForm']['password'].value;
    const form=document.querySelector('.form')
   const loginText=document.querySelector('.login')
   const logOutbtn=document.querySelector('#logoutbtn')

    e.preventDefault()
   
   let regex = /^[a-zA-Z]+$/
 
    if (username === '' || password === '') {
        alert('Username or password cannot be empty!');
        return false; 
    }

    else if (isNaN(password)) {
        alert('Password must be a number!');
        return false; 
    }else if (!(regex.test(username))){
       alert('username must be have only letters')
       return false
    }
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    form.style.display='none';
    loginText.textContent=`Welcome ${username} you are login successfully!`
    logOutbtn.style.display = 'block';

    return true; 
}

 function loading() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password'); 
    const logOutbtn=document.querySelector('#logoutbtn')
 
    if (username && password) {
        const form = document.querySelector('.form');
        const loginText = document.querySelector('.login');

         form.style.display='none';
         logOutbtn.style.display = 'block';
    loginText.textContent=`Welcome ${username},  you are login successfully!`
    }else {
        logOutbtn.style.display = 'none';
    }
    
    
}

const logOut =function(){
    const username=localStorage.removeItem('username');
    const password=localStorage.removeItem('password');

    const form = document.querySelector('.form');
    const loginText = document.querySelector('.login');
    const logOutbtn = document.querySelector('#logoutbtn');
   
form.style.display='block';
loginText.textContent='';
logOutbtn.style.display = 'none !important';   
}