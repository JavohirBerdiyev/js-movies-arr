let elMoviesList = document.querySelector('.movies-list');
let elMoviesItemTemplate = document.querySelector('#movies-item-template').content;
let elMoviesFr = document.createDocumentFragment();

for(let movie of kinolar.slice(0, 100)){
  let elMovie = elMoviesItemTemplate.cloneNode(true);

  elMovie.querySelector('.movies__title').textContent = movie.title;
  elMovie.querySelector('.movie__year').textContent = movie.year;
  elMovie.querySelector('.movie__genres').textContent = movie.genres.join(', ');
  elMovie.querySelector('.movie__cast').textContent = movie.cast.join(', ');

  elMoviesFr.appendChild(elMovie);
}

elMoviesList.appendChild(elMoviesFr);
