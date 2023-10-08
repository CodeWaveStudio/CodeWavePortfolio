//toggle navbar icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll navbar

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            })
        };
    });
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle when click on cross
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 // scroll reveal
 ScrollReveal({ 
    // reset: true ,
distance :'80px',
duration:2000,
delay:200
});
ScrollReveal().reveal('.home-content,.heading,.home-content .red', { origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content',{ origin: 'right' });

// typed js
const typed=new Typed('.multiple-text',{
    strings:['Software Developer','Web Developer','UI-UX Designer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const typeds=new Typed('.multiple-texts',{
    strings:['Software Developer','Web Developer','UI-UX Designer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
//contact details



//sent email
function sendEmail(){
   
    var email1=document.getElementById('email').value;
        console.log(email1);
    Email.send({
        Host : "smtp.elasticemail.com",
       
        Username : "sanket.bhoyane8585@gmail.com",
      
        Password : "0A808A3E69FBD7FE3158756788A7ED742959",
        To : 'sanket.bhoyane8585@gmail.com',
        From : 'sanket.bhoyane8585@gmail.com',
        
        Subject : "New Contact Form Enquiry.",
        Body : "Name :"+document.getElementById('full-name').value + "<br> Email :"+document.getElementById('email').value
        + "<br> Mobile :"+document.getElementById('mobile').value + "<br> Subject :"+document.getElementById('sub').value
        + "<br> Message :"+document.getElementById('msg').value
    }).then(
      message => {
        if (message === 'OK') {
            alert('Message sent successfully!');
            clearForm();
        } else {
            alert('Ooops ,Its getting error to sent message: ' + message);
        }

      }
    );
}
//clear form after submit msg
function clearForm() {
    document.getElementById('full-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('sub').value = '';
    document.getElementById('msg').value = '';
}

//chenged theme if clicked on i 
document.getElementById('animated-i').addEventListener('click', function() {
    const body = document.body;
    body.classList.add('glitch');

    // Remove the glitch class after the animation completes
    setTimeout(() => {
        body.classList.remove('glitch');
    }, 500); // Match the duration of the 'tv-glitch' animation
});





