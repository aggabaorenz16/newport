
const html_Project = document.querySelector('#HTML');
const covid = document.querySelector('#covidTracker');
const js_Project = document.querySelector('#JAVASCRIPT');
const gene = document.querySelector('#generator');
const css_Project = document.querySelector('#CSS');
const systems = document.querySelector('#system');
const trackings = document.querySelector('#Tracking');
const upperCase = document.querySelector('#UpperCase');
const starbucks = document.querySelector('#Starbucks');

const HTML = () => { 
    starbucks.style.display = 'none';
    html_Project.style.display = 'grid';
    css_Project.style.display = 'none';
    js_Project.style.display = 'none';
    covid.style.display = 'none';
    gene.style.display = 'none';
    systems.style.display = 'none';
    trackings.style.display = 'none';
    upperCase.style.display = 'none';
};

const PHP = () => { 
    starbucks.style.display = 'grid';
    css_Project.style.display = 'none';
    js_Project.style.display = 'none';
    html_Project.style.display = 'none';
    covid.style.display = 'none';
    gene.style.display = 'none';
    systems.style.display = 'grid';
    trackings.style.display = 'grid';
    upperCase.style.display = 'none';
};
const CSS = () => {
    starbucks.style.display = "none"; 
    css_Project.style.display = 'grid';
    js_Project.style.display = 'none';
    html_Project.style.display = 'none';
    covid.style.display = 'none';
    gene.style.display = 'none';
    systems.style.display = 'none';
    trackings.style.display = 'none';
    upperCase.style.display = 'none';
};
const JS = () => { 
    starbucks.style.display = "none"
    css_Project.style.display = 'none';
    js_Project.style.display = 'grid';
    html_Project.style.display = 'none';
    covid.style.display = 'grid';
    gene.style.display = 'grid';
    systems.style.display = 'none';
    trackings.style.display = 'none';
    upperCase.style.display = 'grid';
};
const ALL = () => { 
    starbucks.style.display = "grid";   
    css_Project.style.display = 'grid';
    js_Project.style.display = 'grid';
    html_Project.style.display = 'grid';
    covid.style.display = 'grid';
    gene.style.display = 'grid';
    trackings.style.display = 'grid';
    systems.style.display = 'grid';
    upperCase.style.display = 'none';
};

/* DOWNLOAD MODAL SUCCESSFULLY */
const success = document.querySelector("#success"); 
success.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Downloaded Successfully',
    }) 
})



const icon = document.querySelector('#icon');
const iconTrig = document.querySelector('#iconTrig');
const nav = document.querySelector('.nav');

iconTrig.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')
        nav.classList.add('show')
        nav.classList.remove('hide')
        nav.style.display = 'block';
      } else {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')
        nav.classList.remove('show')
        nav.classList.add('hide')
        nav.style.display = 'none';
      }
})