import "./components/CardMovie";
import Tranding from "./Tranding";
import select2 from 'select2';
import { getGenres, getTrending,discoverMovie } from './data/network-data';
import Catalog from "./Catalog";
import './../assets/images/home__bg.jpg';
import './../assets/images/home__bg3.jpg';

const main = () => {
    
    getGenres().then(res => {
        const catalogGenres = document.getElementById('catalog-genres');

        res.forEach(genre => {
            catalogGenres.innerHTML += `<option value="${genre.id}">${genre.name}</option>`
        });
    });

    Tranding();
        
    Catalog();
    /*
    MENU
    */
   const headerBtn =  document.querySelector('.header__btn');
   const headerNav =  document.querySelector('.header__nav');

   headerBtn.addEventListener('click',(e) => {
    headerBtn.classList.toggle('header__btn--active');
    headerNav.classList.toggle('header__nav--active');
    document.querySelector('body').classList.toggle('body--active');
   });

   const searchElement = document.querySelectorAll('.header__search-btn, .header__search-close');

   searchElement.forEach((data,index) => {
        data.addEventListener('click', (e) => {
            document.querySelector('.header__search').classList.toggle('header__search--active');
        });
   });

   $('.catalog__select').select2({
        minimumResultsForSearch: Infinity
   });

    const now = new Date().getUTCFullYear();    
    const years = Array(now - (now - 40)).fill('').map((v, idx) => now - idx);
    years.map(val => {
        document.getElementById('catalog-year').innerHTML += `<option value="${val}">${val}</option>`;
    })

    document.getElementById('scroll-up').addEventListener('click',() => {
        $('html,body').animate({
            scrollTop: 0
        },300)
    })

    const scrollUp = () => {
        const scrollup = document.getElementById('scroll-up');

        if(window.scrollY >= 200){
            scrollup.classList.add('scrollup--show');
        }else{
            scrollup.classList.remove('scrollup--show');
        }
    }

    window.addEventListener('scroll',scrollUp);
}

export default main;