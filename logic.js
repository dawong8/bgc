
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

records = shuffle(records);

for (let i = 0; i < records.length; i ++) {
	let $pic1; 

	$pic1 = $(`<div class="img-container">
		<img data-og='${records[i].replacement ? "Replacement": "Original"}' data-season='${records[i].season}' src='./images/${records[i].name}.png' onclick='onClick(this)' alt='${records[i].name}'>
		</div>`);

	$("#photo-grid").append($pic1);
}