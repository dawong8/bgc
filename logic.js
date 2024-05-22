
console.log("here:", records);

// sort records by random? 
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function determineWinRate(fightsArr) {
  let score = 0; 
  console.log("what is fightsArr", fightsArr)
  for(let a = 0; a < fightsArr.length; a++) {
    switch(fightsArr[a].split("-")[1]) {
      case "w":
        score++;  
        break; 
      case "l": 
        score--; 
        break;
      default: 
        break;
    }
  }
  return score; 
}

function sortByWinRate(a, b) {
  let aWins = determineWinRate(a.fights); 
  let bWins = determineWinRate(b.fights); 

  if (aWins > bWins) {
    return -1; 
  } else if ( aWins < bWins) {
    return 1; 
  } else {

    // determine num fights 
    if (a.fights.length > b.fights.length) {
      return -1; 
    } else if (a.fights.length < b.fights.length) {
      return 1; 
    } else {
      return 0; 
    }
  }
}


function sortByNumFights(a, b) {
  if (a.fights.length > b.fights.length) {
    return -1; 
  } else if (a.fights.length < b.fights.length) {
    return 1; 
  } else {
    return 0; 
  }
}

function sortByName(a, b) {
  if (a.name > b.name) {
    return 1; 
  } else if (a.name < b.name) {
    return -1; 
  } else {
    return 0; 
  }
}

function sortBySeason(a, b) {
  if (a.season > b.season) {
    return 1; 
  } else if (a.season < b.season) {
    return -1; 
  } else {
    return 0; 
  }
}

function sortByCity(a, b) {
  if (a.city > b.city) {
    return 1; 
  } else if (a.city < b.city) {
    return -1; 
  } else {
    return 0; 
  }
}


records = records.sort(sortByWinRate); //shuffle(records);
console.log("records", records)

for (let i = 0; i < records.length; i ++) {
	let $pic1; 

	$pic1 = $(`<div class="img-container">
		<img data-og='${records[i].replacement ? "Replacement": "Original"}' data-season='${records[i].season}' src='./images/${records[i].name}.png' onclick='onClick(this)' alt='${records[i].name}'>
		<div class="namePlate"> ${records[i].name} </div>
    <div class="seasonPlate"> Season ${records[i].season} </div>
    </div>`);

	$("#photo-grid").append($pic1);
}