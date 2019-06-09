let input = document.querySelector('input#username');
let submit = document.querySelector('.submit');
let password = document.querySelector('input#password');
let header = document.querySelector('#header');



input.addEventListener('blur', function(){
    validateEmail(input);
});

submit.addEventListener('click', function(){
    if(input.value && password.value && validateEmail(input)){
    console.log(header);
    input.style.display = 'none';
    password.style.display = 'none';
    submit.style.display = 'none';
    header.innerHTML = "Redirecting!!!"
    }
    if(!input.value){
        g = document.createElement('div');
        input.after(g);
        g.setAttribute("id", "required");
        g.innerHTML = "Field cannot be empty"
        setTimeout(function(){
            g.parentNode.removeChild(g);
          }, 2000);

    }

    if(!password.value){
        g1 = document.createElement('div');
        password.after(g1);
        g1.setAttribute("id", "required");
        g1.innerHTML = "Field cannot be empty"
        setTimeout(function(){
            g1.parentNode.removeChild(g1);
          }, 2000);
    }
})

function validateEmail(input){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(input.value) == false) 
    {
        g2 = document.createElement('div');
        input.after(g2);
        g2.setAttribute("id", "required");
        g2.innerHTML = "Please enter a valid email!!!"
        setTimeout(function(){
            g2.parentNode.removeChild(g2);
          }, 2000);

        return false;
    }

    return true;

}