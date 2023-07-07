$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})


const movies = [{
              id:1,
              img: "Images/inception.jpg",
              title: "Inception",
              year: 2019,
              url: "player.html",
              most: "movie"
            },
            {
              id:2,
              img: "Images/bat.jpg",
              title: "The Dark Knight Rises",
              year: "2012",
              url: "player.html",
              most: "movies"
            },
            {
              id:3,
              img: "Images/parasite.jpg",
              title: "Parasite",
              year: "2019",
              url: "player.html",
              most: "movies"
            },
            {
              id:4,
              img: "Images/Were_the_Millers_poster.jpg",
              title: "We're the Millers",
              year: "2013",
              url: "player.html",
              most: "movies"
            },
            {
              id:5,
              img: "Images/the terminal.jpg",
              title: "The Terminal",
              year: "2004",
              url: "player.html",
              most: "movies"
            },
            {
              id:6,
              img: "Images/Matrix.jpg",
              title: "The Matrix Resurrections",
              year: "2021",
              url: "player.html",
              most: "movies"
            },
]





let search = document.getElementById("searchText")
let search_bx2 = document. getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () =>{
    movies. forEach(element => {
         const { img, title, year, url } = element;

         let card = document.createElement('a');
        card.href = url;
         card.innerHTML = `<img src="${img}" alt="">
         <div class="content2">
             <h6>${title}</h6>
             <p>${year}</p>
         </div>`;
         search_bx2.appendChild(card);
    });
})

search.addEventListener('keyup', ()=> {
   let filter = search.value.toUpperCase();
   let a = search_bx2.getElementsByTagName('a');
   for(let i = 0; i < a.length; i++){
      let b = a[i].getElementsByClassName('content2')[0];
      let c = b.getElementsByTagName('h6')[0];

      let TextValue = c.textContent || c.innerText;

      if(TextValue.toUpperCase().indexOf(filter) > -1){
          a[i].style.display = '';
          search_bx2.style.visibility = "visible";
      }else{
          a[i].style.display = 'none';
      }

      if(search.value == 0){
          search_bx2.style.visibility = "hidden";
      }
   }
})
