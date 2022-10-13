class CardMovie extends HTMLElement{
    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="card__cover">
                <img src="https://image.tmdb.org/t/p/w300/${this._movie.poster_path}" alt="">
                <a href="#" class="card__play">
                    <i class="bi bi-play"></i>
                </a>
                <div class="card__rate card__rate--green">
                    5.0
                </div>
            </div>
            <div class="card__content" id="movie-${this._movie.id}">
                <h3 class="card__title">
                    <a href="#">${this._movie.name ?? this._movie.original_title}</a>
                </h3>
                <span class="card__category">
                ${
                    this._movie.genre_ids.map((genre) => {
                        const genres = JSON.parse(window.localStorage.getItem('genres'));
                        const type = this._movie.media_type;
                        const gntype = genres[type];
                        const res = gntype.find(x => x.id === genre)
                        return `<a href="#">${res.name}</a>`;
                    })
                }
                </span>
            </div>
        `;
        
    }
}

customElements.define('card-movie',CardMovie);