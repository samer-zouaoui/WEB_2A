let T = [17, 38, 10, 25, 72];


T.sort();
console.log("Tableau trié :", T);

T.push(12);
console.log("Tableau avec ajout de 12 :", T);

T.reverse();
console.log("Tableau renversé :", T);

console.log("Indice de l'élément 17 :", T.indexOf(17));

T.splice(T.indexOf(38), 1);
console.log("Tableau sans l'élément 38 :", T);

console.log("Sous-tableau du 2e au 3e élément :", T.slice(1, 3));

console.log("Sous-tableau du début au 2e élément :", T.slice(0, 2));

console.log("Sous-tableau du 3e élément à la fin de la liste :", T.slice(2));