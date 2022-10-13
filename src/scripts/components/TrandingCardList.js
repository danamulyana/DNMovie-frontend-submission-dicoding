import './CardMovie';

class TrandingCardList extends HTMLElement{
    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render(){
        this.innerHTML = '';

        this._movies.forEach(movie => {
            const trandingCardItemElement = document.createElement('card-movie');
            trandingCardItemElement.movie = movie;
            this.appendChild(trandingCardItemElement);
        });
    }

    attributeChangedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return [];
    }
}

customElements.define('tranding-list', TrandingCardList)