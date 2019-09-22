let xSize = 3; //размер таблицы по оси абсцисс
let ySize = 3; //размер таблицы по оси ординат
let arrSize = xSize * ySize;

let gameArr = new Array(arrSize).fill(0,1) //заполнение массива рандомными значениями
.map((a, i) => a = i).sort(() => Math.random() - 0.5); //https://stackoverflow.com/questions/5836833/create-an-array-with-random-values


function createTable(arr) {

  	let tbl = document.createElement('table');
  	let tbdy = document.createElement('tbody');
  	
	for (let i = 0; i < ySize; i++ ) {
		let tr = document.createElement('tr');
		tbdy.append(tr);
		
		for(let j = 0; j < xSize; j++) {
			let td = document.createElement('td');
			td.innerHTML = gameArr[j];
			if(td.innerHTML == 'undefined') td.innerHTML = '';
    		tr.append(td);
		}
		
		for(let k = 0; k < xSize; k++) {
			gameArr.shift();
		}
		
		tbl.append(tbdy);		
	}
document.body.append(tbl);
}
createTable(gameArr);

