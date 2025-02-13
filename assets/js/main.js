// chuyen doi hinh anh banner
var images = [
    "assets/img/content/banner/Banner-top.png",
    "assets/img/content/banner/Banner-top2.jpg"
]

var currentIndex = 0;
var imgSlider = document.getElementById('js-slider');
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
            setTimeout(function()  {
                imgSlider.src = images[currentIndex]; 
            });
        }
setInterval(changeImage, 5000);

// khi di chuot vao hinh anh thi hinh anh se phong to
var imgElements = document.querySelectorAll('.js-hoverImage');
imgElements.forEach(function(imgElements) {
    imgElements.addEventListener("mouseenter", function()  {
        imgElements.style.transform = "scale(1.05)";
        imgElements.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
        imgElements.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });

    imgElements.addEventListener("mouseleave", function() {
        imgElements.style.transform = "scale(1)";
        imgElements.style.boxShadow = "none";
    });
});

// modal login
var loginBtn = document.querySelector('.js-btn-login');
var showModalLogin = document.querySelector('.js-modal-login');
var hideModalLogin = document.querySelector('.js-btn-closelogin')

loginBtn.addEventListener('click',function showLogin() {
    showModalLogin.style.display = 'flex';
    showModalLogin.style.backgroundColor = "rgba(211, 211, 211, 0.5)";;
});

hideModalLogin.addEventListener('click', function hideLogin() {
    showModalLogin.style.display = 'none';
});