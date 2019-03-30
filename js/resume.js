var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB||window.mozIndexrdDB||window.msIndexedDB||window.webkitIndexedDB;
if (!idb in window)
{
console.log("indexDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(e){
var request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created") ;
}

open.onerror=function(error){
console.log("error is occured")
}

open.onsuccess=function(e){
request=e.target.result;
var tx=request.transaction("formdata","readwrite");
store=tx.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
console.log(data);
personalinfo(data.target.result);
}
}
var parent=document.querySelector(".parent");
var left=document.querySelector(".child1");
var right=document.querySelector(".child2");
function personalinfo(pi)
{
  var image=document.createElement("img");
  image.src="images/b1.jpg";
  image.alt=pi.name;
  var name=document.createElement("h3");
  name.textContent=pi.name;
  var email=document.createElement("h3");
  email.textContent=pi.email;
  var rollno=document.createElement("h3");
  rollno.textContent=pi.rollno;
  var address=document.createElement("h3");
  address.textContent=pi.address;



  left.append(image);
  parent.append(left);
  left.append(name);
  left.append(email);
  left.append(rollno);
  left.append(address);



  parent.append(right);
  var v1=document.createElement("h1");
       v1.textContent="CAREER OBJECTIVE";
       right.append(v1);
  var career=document.createElement("h3");
career.textContent=pi.career;
right.append(career);

var head1=document.createElement("h1");
 head1.textContent="EDUCATION DETAILS";
  right.append(head1);

  var table=document.createElement("table");
  table.border="4;"
  var tr1="<tr><th>institute</th><th>qualification</th><th>percentage</th><th>yop</th></tr>";
  var tr2=" ";
  for(var i in pi.education)
  {

    tr2=tr2+"<tr><td>"+pi.education[i].clg+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].per+"</td><td>"+pi.education[i].yop+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
  var head11=document.createElement("h1");
  head11.textContent="TECHNICAL SKILLS";
  right.append(head11);

  var skills=document.createElement("skills");
  skills.textContent=pi.skills;
  right.append(skills);
}
