function calculate() {
    var radius = document.getElementById('radius').value;
    var dientich = Math.PI * Math.pow(radius, 2);
    var chuvi = 2 * Math.PI * radius;
   
    document.getElementById('tinh').innerHTML = "dientich: " + dientich + "<br>chuvi: " + chuvi;
   }