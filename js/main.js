function submitData() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var rollno=document.querySelector("#rollno").value;
  var address=document.querySelector("#address").value;
  var clg=document.querySelector("#clg").value;
  var branch=document.querySelector("#branch").value;
  var yop=document.querySelector("#yop").value;
  var percentage=document.querySelector("#percentage").value;
  var degree=document.querySelector("#degree").value;
  var college=document.querySelector("#college").value;
  var yop1=document.querySelector("#yop1").value;
  var diplomapercentage=document.querySelector("#diplomapercentage").value;
  var name1=document.querySelector("#name1").value;
  var type=document.querySelector("#type").value;
  var yop2=document.querySelector("#yop2").value;
  var marks=document.querySelector("#marks").value;
  var skills=document.querySelector("#skills").value;


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
  store.put({
    career:career,
    name:name,
    email:email,
    rollno:rollno,
    address:address,
    education:
    [{
    clg:clg,
    branch:branch,
    per:percentage,
    yop:yop

  },
  {
    clg:college,
    branch:degree,
    per:diplomapercentage,
    yop:yop1


  },
  {
     clg:name1,
   branch:type,
   per:marks,
   yop:yop2
 }],

   skills:skills
  });

  }




  window.open("index.html");
}
