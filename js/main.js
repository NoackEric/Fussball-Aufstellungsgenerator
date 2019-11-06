let Mannschaft = {
    name: '1 FC Supercode',
    mannschaft: [],
    abwehr: 4,
    mittelfeld: 4,
    sturm: 2,
    aufstellung(eTarget) {
        if (eTarget) {
            this[eTarget.id] = Number(eTarget.value); // Bekommen dadurch das value, durch das eventlistener , wenn etwas verändert wurde
            if (this.abwehr + this.mittelfeld + this.sturm === 10) {                       // hier wird überprüft ob die gesamt anzahl der spieler 11 beträgt!
                document.getElementById('error').innerHTML = 'Kann losgehen'
            } else {
                document.getElementById('error').innerHTML = 'Die Mannschaft muss 11 Spieler haben, DU Juppi'
            }
        }
        // container  speichern und initalisieren // um zu verhindern dass der cointainer ewig viele namen aufnimmt
        let abwehrContainer = document.getElementById('abwehrContainer');
        abwehrContainer.innerHTML = '';
        let mittelfeldContainer = document.getElementById('mittelfeldContainer');
        mittelfeldContainer.innerHTML = '';
        let sturmContainer = document.getElementById('sturmContainer');
        sturmContainer.innerHTML = '';
        // damit der changer erkennt dass entwerder ++ oder - gedrückt wurde
        let anzahlAbwehr = 0;
        let anzahlMittelfeld = 0;
        let anzahlSturm = 0;
        // In dieser funktion wird geprüft ob ein event sattgefunden hat
        this.mannschaft.forEach((spieler) => {    // Arrowfunction für einen call back ( um infos heraus zu holen )
            console.log(this);
            //Wenn innerhalb einer Methode eine Function ausgeführt wird , bezieht sich "this."  nichtmehr auf das object!
            //innerhalb der forEach funktion wird this. ( aufs window ) bezogen. deshalb muss man das objekt direkt angeben (Mannschaft)!!
            if (spieler.position == 'Torwart') { // spieler ist hier ein parameter
                document.getElementById("torContainer").innerHTML = `<div> ${spieler.name}</div>`;
            }
            // Abwehr
            if (spieler.position == 'Abwehr' && anzahlAbwehr < this.abwehr) {
                document.getElementById("abwehrContainer").innerHTML += `<div> ${spieler.name}</div>`
                anzahlAbwehr++;
            }
            //MIttelfeld
            if (spieler.position == 'Mittelfeld' && anzahlMittelfeld < this.mittelfeld) {
                document.getElementById("mittelfeldContainer").innerHTML += `<div> ${spieler.name}</div>`
                anzahlMittelfeld++;
            }
            //Sturm
            if (spieler.position == 'Sturm' && anzahlSturm < this.sturm) {
                document.getElementById("sturmContainer").innerHTML += `<div> ${spieler.name}</div>`
                anzahlSturm++;
            }
        })
    }
    generiereAbwehr (){
        
    } 
}
//Array innerhalb von einem object
Mannschaft.mannschaft = [
    { name: 'Micha', position: 'Torwart' },
    { name: 'Eric', position: 'Abwehr' },
    { name: 'Anass', position: 'Abwehr' },
    { name: 'Richie', position: 'Abwehr' },
    { name: 'Klaus', position: 'Abwehr' },
    { name: 'Christian', position: 'Abwehr' },
    { name: 'Sergio', position: 'Abwehr' },
    { name: 'Anton', position: 'Mittelfeld' },
    { name: 'Michal', position: 'Mittelfeld' },
    { name: 'Navid', position: 'Mittelfeld' },
    { name: 'Georg', position: 'Mittelfeld' },
    { name: 'Rihab', position: 'Mittelfeld' },
    { name: 'Ali', position: 'Mittelfeld' },
    { name: 'Mustafa', position: 'Sturm' },
    { name: 'Shapour', position: 'Sturm' },
    { name: 'Sam', position: 'Sturm' },
    { name: 'Kim', position: 'Sturm' },
    { name: 'Rezan', position: 'Sturm' },
    { name: 'Waheel', position: 'Sturm' }
]
// Prüft ob etwas in der html id "eingabe" geschehen ist. Dies kann alles sein was seine struktur verändert.
//in diesem falle wenn der wert eines input feldes verändert wird. Wenn das der fall ist wird die methode "aufstellung" ausgeführt.
document.getElementById('eingabe').addEventListener('change', function (e) {
    console.log()
    Mannschaft.aufstellung(e.target);
})
// Muss angegeben werden um den torwart auf defalt anzuzeigen!
Mannschaft.aufstellung()

// let func = () => {
//     alert( 'Arrowfunc')   <----Dies ist eine aufrufbare arrow function welche man mit mit der var. () aufrufen kann!
// }




/* if(eTarget.id == 'abwehr'){
       this.abwehr = eTarget.value;
}
   if(eTarget.id == 'mittelfeld'){
       this.mittelfeld = eTarget.value;
}
   if(eTarget.id == 'sturm'){
       this.sturm = eTarget.value;
}
*/