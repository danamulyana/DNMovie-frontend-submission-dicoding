import $ from 'jquery';
import "owl.carousel";
import "./components/CardMovie";
import { getGenres, getTrending } from './data/network-data';

const main = () => {
    getGenres();
    
    let trandingListElement = document.getElementById('tranding-now');
    
    const renderTranding = results => {
        console.log(results);
        results.forEach(movie => {
            const trandingCardItemElement = document.createElement('card-movie');
            trandingCardItemElement.movie = movie;
            trandingListElement.appendChild(trandingCardItemElement);
        });
    }

    const carouselTranding = () => {
        $('.home__bg').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,
            touchDrag: false,
            items: 1,
            dots: false,
            loop: true,
            autoplay: false,
            smartSpeed: 700,
            margin: 0,
        });
    
        $('.home__bg .item').each( function() {
            if ($(this).attr("data-bg")){
                $(this).css({
                    'background': 'url(' + $(this).data('bg') + ')',
                    'background-position': 'center center',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
            }
        });
    
        $('.home__carousel--bg').owlCarousel({
            mouseDrag: false,
            touchDrag: true,
            dots: false,
            loop: true,
            autoplay: false,
            smartSpeed: 700,
            margin: 20,
            responsive : {
                0 : {
                    items: 2,
                },
                576 : {
                    items: 2,
                },
                768 : {
                    items: 3,
                    margin: 30,
                },
                992 : {
                    items: 4,
                    margin: 30,
                },
                1200 : {
                    items: 5,
                    margin: 30,
                }
            }
        });
    
        $('.home__nav--next').on('click', () => {
            $('.home__carousel--bg, .home__bg').trigger('next.owl.carousel');
        });
        $('.home__nav--prev').on('click', () => {
            $('.home__carousel--bg, .home__bg').trigger('prev.owl.carousel');
        });
    
        $(window).on('resize', function() {
            var itemHeight = $('.home__bg').height();
            $('.home__bg .item').css("height", itemHeight + "px");
        });
        $(window).trigger('resize');
    }
    
    getTrending().then(renderTranding).then(carouselTranding);
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

}

export default main;