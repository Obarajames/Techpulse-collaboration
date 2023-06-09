

        document.querySelector("#search-form").onsubmit = function(e) {
            e.preventDefault();
              // Grab whatever the user typed in
              console.log("It worked");
              let searchTermInput = document.querySelector("#search-id").value.trim();
              let end = "https://api.themoviedb.org/3/search/movie?api_key=473716561aeaecdcec4a3a598dae6440&language=en-US&query=" + searchTermInput + "&page=1&include_adult=false";
              ajax(end);
            }       