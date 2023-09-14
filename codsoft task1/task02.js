//Typing Effect
let typed = new Typed('.auto-input',{
    strings: ['Full-Stack Developer', 'Network Administrator', 'Database Administrator', 'Junior-Level Programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true,
})






//Active Link STate on Scroll

//Get ALL links
let navlinks=document.querySelectorAll('nav ul li a')
//Get All Sections
let sections=document.querySelectorAll('section')
console.log(sections)
forEac
window.addEventListener('scroll', function(){
    const scrollPos=this.window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos >section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
            navlinks.forEach(links=> {
                links.classList.remove('active');
            if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                link.classList.add('active')
               }
            });
        }
        
    });
});
