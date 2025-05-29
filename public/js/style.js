

    document.querySelector('.hamburger').onclick = function() {
        document.querySelector('.nav-links').classList.toggle('active');
    }
    dropdowns = document.querySelectorAll('.dropdown');
    for(i = 0; i < dropdowns.length; i++) {
        dropdowns[i].querySelector('a').onclick = function(e) {
            if(window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        }
    }
    document.querySelector('.book-btn').onclick = function() {
        document.getElementById('modal').style.display = 'block';
    }
    document.querySelector('.close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    }
    document.getElementById('modal').onclick = function(e) {
        if(e.target == this) {
            this.style.display = 'none';
        }
    }
    document.querySelector('.modal-content .book-btn').onclick = function() {
        email = document.querySelector('.modal input[type="email"]').value;
        password = document.querySelector('.modal input[type="password"]').value;
        if(email && password) {
            alert('Login attempt with:\nEmail: ' + email);
            document.getElementById('modal').style.display = 'none';
        }
    }



  let gal = document.getElementById("gallery");

    function moveSlide(index) {
      let width = document.querySelector(".wrapper").offsetWidth;
      gal.style.transform = "translateX(" + (-index * width) + "px)";

      let dots = document.querySelectorAll(".dots div");
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
      }
      dots[index].classList.add("active-dot");
    }


  let slides = document.querySelectorAll('.div17');
  let dots = document.querySelectorAll('.dot');
  let index = 0;

  let showSlide = () => {
    let track = document.querySelector('.div16');
    track.style.transform = 'translateX(-' + index * 100 + 'vw)';
    slides.forEach((slide, i) => {
      dots[i].classList.remove('active');
      if (i === index) dots[i].classList.add('active');
    });
  };

  let nextSlide = () => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide();
  };

  let interval = setInterval(nextSlide, 2000);
  let bookButton = document.getElementById("bookBtn");
  let videoButton = document.getElementById("videoBtn");

  bookButton.onclick = function() {
    alert("Table booked successfully!");
  };

  videoButton.onclick = function() {
    window.open("https://www.bing.com/videos/riverview/relatedvideo?q=kichk&mid=AA3C261CD3D42647B931AA3C261CD3D42647B931&mmscn=stvo&FORM=VAMGZC", "_blank");
  };
let div40Index = 0;
let div40Slides = document.querySelectorAll(".div40-slide");
let div40Dots = document.querySelectorAll(".div40-dot");
function div40Show(i) {
  for (let j = 0; j < div40Slides.length; j++) {
    div40Slides[j].classList.remove("active");
    div40Dots[j].classList.remove("active");
  }
  div40Slides[i].classList.add("active");
  div40Dots[i].classList.add("active");
}
function div40Next() {
  div40Index = (div40Index + 1) % div40Slides.length;
  div40Show(div40Index);
}
let div40Timer = setInterval(div40Next, 5000);
for (let i = 0; i < div40Dots.length; i++) {
  div40Dots[i].onclick = function () {
    div40Index = i;
    div40Show(i);
    clearInterval(div40Timer);
    div40Timer = setInterval(div40Next, 4000);
  };
}
  let buttons = document.querySelectorAll('.menu-btn');
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      let category = buttons[i].getAttribute('category');
      for (let j = 0; j < items.length; j++) {
        let itemCat = items[j].getAttribute('category');
        if (itemCat === category) {
          items[j].style.display = 'block';
        } else {
          items[j].style.display = 'none';
        }
      }
    });
  }
