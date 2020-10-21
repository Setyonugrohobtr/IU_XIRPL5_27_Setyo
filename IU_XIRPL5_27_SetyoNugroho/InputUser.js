function myFunction() {
  var v = document.getElementById("name").value;
  var w = document.getElementById("email").value;
  var x = document.getElementById("negara").value;
  var z = document.getElementsByName('gender');
  for (var i = 0;i < z.length; i++){
	  if (z[i].checked == true) {
	  	var g = z[i].value;
	  }
  }
  var y = document.getElementById("tahun").value;
  var u = 2020-y;
  var tulisan = "Selamat Datang Di Hatiku <br><br>"+
  "<table><tr><td>Nama Lengkap </td><td>:</td><td>"+v+"</td></tr><tr><td>Email </td><td>:</td><td>"+w+
  "</td></tr><tr><td>Jenis Kelamin </td><td>:</td><td>"+g+
  "</td></tr><tr><td>Negara </td><td>:</td><td>"+x+
  "</td></tr><tr><td>Umur </td><td>:</td><td>"+u+"</td></tr></table>";
  var hasil = tulisan.bold();
  if (w == ""){
    document.getElementById("tampilan").innerHTML = "Mohon masukan Email";
  }
  if (v == "") {
  	document.getElementById("tampilan").innerHTML = "Mohon Masukan Nama";
  }
  if (x.length == 0){
  	document.getElementById("tampilan").innerHTML = "Mohon masukan Asal Negara";
  }
  if (g.checked == 0){
  	document.getElementsByName("tampilan").innerHTML = "Mohon masukan Gender";
  }
  if (y.length == 0){
  	document.getElementById("tampilan").innerHTML = "Mohon Masukan Tahun Lahir";
  }
  else{
  document.getElementById("tampilan").innerHTML = hasil;
	}
}