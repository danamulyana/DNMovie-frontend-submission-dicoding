import $ from 'jquery';
import "owl.carousel";
import "./components/CardMovie";
import { getTrending } from './data/network-data';

const Tranding = () => {
    let trandingListElement = document.getElementById('tranding-now');

    const renderTranding = results => {
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

        $('.home__bg .item').each(() => {
            if ($(this).attr("data-bg")){
                $(this).css({
                    'background': `url(${$(this).data('bg')})`,
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

        $(window).on('resize', () => {
            var itemHeight = $('.home__bg').height();
            $('.home__bg .item').css("height", `${itemHeight}px`);
        });
        $(window).trigger('resize');
    }

    getTrending().then(renderTranding).then(carouselTranding);

}

export default Tranding;