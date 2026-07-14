/* /js/scripts.js in github Silus-Counter-2n making silus-counter.bauska-2m.org */
/* July 13, 2026 = ## (## hours approx)
 */
let counter = 0;
/* ##,### from July 13 (## hours - xx day), 
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
