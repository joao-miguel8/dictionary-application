
const searchInput = document.querySelector(".search-input");
const searchedWordEle = document.querySelector(".word-searched");
const wordAudioButton = document.querySelector("chosen-word__audio-button");
const phoneticsEle = document.querySelector(".phonetic-text");



// Debounce delay Function for search input reducing the amount of api requests to the server
function debounce(cbFunc, Delay = 800) {
  let timeoutCounter;
  return (...args) => {
    clearTimeout(timeoutCounter);
    timeoutCounter = setTimeout(() => cbFunc(...args),Delay);
  }
}

// Function api request for search input 
function searchResult() {
  let searchValue = searchInput.value;
  console.log(searchValue);
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
  fetch(api).then( response => response.json()).then((data) => {
    searchedWordEle.textContent = (data[0].word);
    console.log(data);
  })
}

let triggeredDebounce = debounce(() => searchResult());

// <<<<<<<<< EVENT LISTENERS >>>>>>>>
searchInput.addEventListener("input", triggeredDebounce);


// --------------
// --------------
  //   let wordInfo = (data[0]);
  //   console.log(wordInfo);
  //   const wordDetails =  (wordInfo.meanings[0].definitions);
  //   console.log(wordDetails);
  //   for(let key of wordDetails) {
  //     console.log(key.definition);
  //   }
  // })