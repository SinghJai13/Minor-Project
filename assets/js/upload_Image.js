const cookieParser = require("cookie-parser");

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();
      console.log(e.target.result)
      $(".image-title").html(input.files[0].name);
    };
    var name = input.files[0].name;
    if (!(name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".jpeg"))) {
      alert("Image Extension not valid");
      window.location.replace("/");
    } else {
      reader.readAsDataURL(input.files[0]);
    }
    console.log(input.files[0])

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});