function shopModalOpen(dispText){
    var sModal = document.getElementById("sModalDiv");
    if(sModal){
        sModal.parentNode.removeChild(sModal);
    };
    sModal = document.createElement("div");
    sModal.id = "sModalDiv";
    sModal.className = "";
    var shopTxt = "";
    shopTxt += "<div>";
    shopTxt += "  <div>";
    shopTxt += "    <a href='javascript:void(0)' onclick='shopModalOpenClose();return false;'>×&nbsp;close</a>";
    shopTxt += ""+dispText;
    shopTxt += "  </div>";
    shopTxt += "</div>";
    sModal.innerHTML = ""+shopTxt;
    document.getElementsByTagName("body")[0].appendChild(sModal);
}
function shopModalOpenClose(){
    var sModal = document.getElementById("sModalDiv");
    if(sModal){
        sModal.parentNode.removeChild(sModal);
    };
}

function hamburgerModalOpen(){
  if($("#hamburgerPopList").css("display") == "block"){
      $("#hamburgerPop").hide();
      $("#hamburgerPopList").hide();
      $("#hamburgerPopList").css("left","-1024px");
  }else{
      $("#hamburgerPop").show();
      $("#hamburgerPopList").show();
      $("#hamburgerPopList").css("left","0px");
  }

}
function hamburgerModalOpenC(){
  if($("#hamburgerPopCList").css("display") == "block"){
      $("#hamburgerPopC").hide();
      $("#hamburgerPopCList").hide();
      $("#hamburgerPopCList").css("left","-1024px");
  }else{
      $("#hamburgerPopC").show();
      $("#hamburgerPopCList").show();
      $("#hamburgerPopCList").css("left","0px");
  }

}
