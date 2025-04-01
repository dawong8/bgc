
const seasonNames = {
  1: "Los Angeles", 
  2: "NYC", 
  3: "Miami", 
  4: "Atlanta", 
  5: "Chicago",
  6: "Houston",
  7: "Las Vegas",
  8: "Phoenix",
  9: "Cincinnati",
  10: "Atlantic City",
  11: "Forcible",
  12: "Euphoria",
  13: "Unforgiven",
  14: "Temptation",
  15: "Insatiable Sisters",
  16: "Resurgence",
  17: "Seduction",
  A1: "BGC All Stars 1: Heroes vs Villains",
  A2: "BGC All Stars 2: Rivals",
  A3: "BGC All Stars 3: Redemption",
  B1: "Baddies Girls Trip",
  B2: "Baddies South",
  B3: "Baddies West",
  B4: "Baddies North",
  B5: "Baddies East"
}
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


for (let i = 0; i < records.length; i ++) {
	let $pic1; 
  let seasonNameTitle = records[i].season[0] !== 'B' ? `BGC ${records[i].season}: ${seasonNames[records[i].season]}` : `${seasonNames[records[i].season]}`
	let otherSeasons = records[i].additionalSeasons.map(x=> seasonNames[x]).join(",");
  $pic1 = $(`<div class="img-container">
		<img data-og='${records[i].replacement ? "Replacement": "Original"}' data-season='${seasonNameTitle}' 
    data-city='${records[i].city}'
    data-otherSeasons='${otherSeasons}'
    src='./images/${records[i].name}.png' onclick='onClick(this)' alt='${records[i].name}'>
		<div class="namePlate"> ${records[i].name} </div>
    <div class="seasonPlate"> ${seasonNameTitle} </div>
    </div>`);

	$("#photo-grid").append($pic1);
}
