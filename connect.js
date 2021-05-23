'use strict';
function myFun(){

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("card");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    
    }
}

function toggleGenreList() {
    document.getElementsByClassName("dropdown-menu").classList.toggle("show");
}
// window.onclick = function(e) {

//     if (!e.target.matches('#dropdownMenuButton1')) {
  
//       var dropdownContent = document.getElementsByClassName("dropdown-menu");
  
//       if (dropdownContent.classList.contains('show')) {
//         dropdownContent.classList.remove('show');
//       }
//     }
//   }

function getMediaPosters(selectedGenre) {
    var countMovies = 0;
    var mediaCarouselMovies;
    // currentGenre = selectedGenre;
    document.getElementById("genreText").innerHTML = selectedGenre;
  
    if (selectedGenre == 'All') {
      document.getElementsByClassName('movies-action')[0].style.display = "block";
      document.getElementsByClassName('movies-action')[0].style.display = "block";
      document.getElementsByClassName('movies-drama')[0].style.display = "block";
      document.getElementsByClassName('movies-scifi')[0].style.display = "block";
      mediaCarouselMovies = document.getElementsByClassName("card");
    }
    if (selectedGenre == 'Action') {
      document.getElementsByClassName('movies-action')[0].style.display = "flex";
      document.getElementsByClassName('movies-drama')[0].style.display = "none";
      document.getElementsByClassName('movies-scifi')[0].style.display = "none";
      mediaCarouselMovies = document.getElementsByClassName('movies-action')[0].getElementsByClassName("card");
    }
    if (selectedGenre == "Drama") {
      document.getElementsByClassName('movies-action')[0].style.display = "none";
      document.getElementsByClassName('movies-drama')[0].style.display = "flex";
      document.getElementsByClassName('movies-scifi')[0].style.display = "none";
      mediaCarouselMovies = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("card");
    }
    if (selectedGenre == 'Sci-Fi') {
      document.getElementsByClassName('movies-action')[0].style.display = "none";
      document.getElementsByClassName('movies-drama')[0].style.display = "none";
      document.getElementsByClassName('movies-scifi')[0].style.display = "flex";
      mediaCarouselMovies = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("card");
    }
  
  
    var mediaCarouselMoviesCount = mediaCarouselMovies.length;
  
    for (var count = 0; count < mediaCarouselMoviesCount; count++) {
      if (mediaCarouselMovies[count].style.display == "block")
        countMovies++;
    }
    console.log(countMovies);
  
    showNoResultsText(countMovies);
  }
  