import { discoverMovie } from './data/network-data';
import "./components/CardMovie";

const Catalog = () => {

    let genreChoose = '';
    let gradeChoose = 'popularitas.desc';
    let yearChoose = '';

    let CatalogElement = document.getElementById('catalog-movie');
    
    const resultRender = results => {
        if(results.init){
            CatalogElement.innerHTML = '';
        }

        results.result.map(movie => {
            const carditem = document.createElement('card-movie');
            carditem.movie = movie;
            const catalogElem = document.createElement('div');
            catalogElem.classList.add('col-6','col-sm-4','col-lg-3','col-xl-2');
            catalogElem.appendChild(carditem);
            CatalogElement.appendChild(catalogElem);
        })
    }

    const changeDiscover = (init) => {
        let page = document.getElementById('more-catalog').dataset.page;
        discoverMovie(page,genreChoose,gradeChoose,yearChoose,init).then(resultRender);
    }
    
    $('#catalog-genres').change(e => {
        genreChoose  = e.target.value;
        changeDiscover(true);
    });

    $('input[name="grade"]').change(e => {
        gradeChoose = e.target.value;
        changeDiscover(true);
    });

    $('#catalog-year').change(e => {
        console.log(e.target.value)
        yearChoose = e.target.value;
        changeDiscover(true);
    });

    document.getElementById('more-catalog').addEventListener('click',(e) => {
        let page = parseInt(e.target.dataset.page);
        e.target.dataset.page = ++page;
        changeDiscover(false);
    })

    discoverMovie(1,'','popularity.desc','',true).then(resultRender);
}

export default Catalog;