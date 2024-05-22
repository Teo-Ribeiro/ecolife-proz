function marcaDesmarca(caller) {
  var checks = document.querySelectorAll('input[type="checkbox"]');    
  checks.forEach(c => c.checked = (c == caller) );
}

     



<div style='position: relative;'>
  <input id="metal" name="tipoentrada" type="checkbox" value="M" 
         onclick="marcaDesmarca(this)"> 
  <label style='display: contents;'>Metal</label>
  <input id="papel" name="tipoentrada" type="checkbox" value="P" 
         onclick="marcaDesmarca(this)">
  <label style='display: contents;'>papel</label>
  <input id='plastico'  name="tipoentrada" type="checkbox" value="H" 
         onclick="marcaDesmarca(this)">
  <label style='display: contents;'>Plástico</label>
</div>



