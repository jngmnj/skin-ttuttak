
$(document).ready(function(){
  // to-top
  $(".totop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 0 && !$(".all-menu-btn").hasClass("active")) {
      $(".totop").addClass("show");
    } else {
      $(".totop").removeClass("show");
    }
  });

  // all menu(gnb) toggle button
  $(".side-btn").click(function () {
    $(".fade-bg").show();
    var target = $(this);
    if (target.hasClass("active")) {
      target.removeClass("active");
      $("#l_side").removeClass("active");
      closeAll();
    } else {
      target.addClass("active");
      $("#l_side").addClass("active");
    }
  });

  
  // has-ch
  $(".sub_category_list").each(function(index, item){
	$(this).siblings(".link_item").addClass("has-ch").append("<button></button>");
  });
  
  // lnb dropdown mouseover
  $(".category .has-ch button").on("click", function (e) {
    e.stopPropagation();
    var element = $(this).parent(".has-ch");
    // console.log("clicked");
    e.preventDefault();
    if (!element.hasClass("fold")) {
      element.addClass("fold");
      element.siblings(".sub_category_list").slideUp(200);
    } else {
      element.removeClass("fold");
      element.siblings(".sub_category_list").slideDown(200);
    }
  });
});

// fade-bg
function closeAll() {
  $(".popup").hide();
  $(".fade-bg").hide();
  if ($(".side-btn").hasClass("active")) {
    $(".side-btn").removeClass("active");
	$("#l_side").removeClass("active");
  }
}
function popClose(self) {
  $(self).parents(".popup").hide();
  $("#fade").hide();
}

function popOpen(name) {
  // popCloseAll();
  $("#" + name + "Pop").show();
  $("#fade").show();
  // console.log("popopen");
}

function popOpen(name, idx) {
  // popCloseAll();
  $("#" + name + "Pop").show();
  $("#fade").show();
}
