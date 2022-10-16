class CardMovie extends HTMLElement{
    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="card__cover">
                <img src="https://image.tmdb.org/t/p/w300/${this._movie.poster_path}" alt="${this._movie.name ?? this._movie.original_title}">
                <a href="#" class="card__play">
                    <i class="bi bi-play"></i>
                </a>
                <div class="card__rate ${this._movie.vote_average >= 4 && this._movie.vote_average < 7 ? 'card__rate--yellow' : this._movie.vote_average >= 7 ? 'card__rate--green' : 'card__rate__red'} ">
                    ${this._movie.vote_average != 0 ? parseFloat(this._movie.vote_average).toFixed(1) : 'NR'}
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
                        const res = genres.find(x => x.id === genre)
                        return `<a href="#">${res.name}</a>`;
                    })
                }
                </span>
            </div>
        `;
        
    }
}

customElements.define('card-movie',CardMovie);