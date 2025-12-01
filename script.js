    // // console.log("script loaded");
    // //themeToggle
    // const themeToggle = document.getElementById('themeToggle');
    // themeToggle.addEventListener('click',()=>{
    //     document.documentElement.classList.toggle('dark');
    //     themeToggle.textContent=document.documentElement.classList.contains('dark')?'☀️':'🌙';
    // });

    // //simple contact form handling (no backend)
    // const form=document,getElementById('contactForm');
    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault();
    //     const name=form.name.value.trim();
    //     const email=form.email.value.trim();
    //     const message=form.message.value.trim();
    //     if(!name || !email ||!message){
    //         alert('Please fill in all fields.');
    //         return;
    //     }
    //     alert('Thanks, '+ name + '! I received you message and will contact you soon.');
    //     form.reset();
    // });
    console.log('script loaded');
    const toggle=document.getElementById("themeToggle");
    toggle.addEventListener("click",() =>{
        document.body.classList.toggle("dark");
        
        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
            toggle.textContent="☀️";
        }
        else{
            localStorage.setItem("theme","light");
            toggle.textContent="🌙";
        }
    });
    if(localStorage.getItem("theme")==="light"){
        document.body.classList.add("dark");
        toggle.textContent ="☀️";
    }