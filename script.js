$(function () {
  //profile section title show effect
  gsap.fromTo(
    $(".profile__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: $(".profile"),
      endTrigger: $(".cover"),
    }
  );

  //process section title show effect
  gsap.fromTo(
    $(".process__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: $(".process"),
    }
  );

  //about section title show effect
  gsap.fromTo(
    $(".about__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: $(".about"),
      start: "top top",
    }
  );

  $(".intro__bg").animate(
    {
      width: "100%",
    },
    {
      duration: 1000,
      easing: "swing",
      step: function (now) {
        if (now > 0) {
          $(".intro__bg").css("overflow", "unset");
        }
      },
      complete: function () {},
    }
  );

  // totop button click event handler
  $(".intro__totop-btn").click(function () {
    $(".layout").scrollTop(0);
  });

  // scroll event handler (show/hide totop-btn & scroll-guide)
  $(".layout").on("scroll", function () {
    if ($(".layout").scrollTop() < window.innerHeight) {
      $(".intro__totop-btn").fadeOut();
      $(".intro__scroll-guide").fadeIn();
    } else {
      $(".intro__totop-btn").fadeIn();
      $(".intro__scroll-guide").fadeOut();
    }
  });

  // image modal click event handler
  $(".detail-page__img").click(function () {
    let originalSrc = $(this).attr("src");
    let newSrc = originalSrc.replace(/\.(\w+)$/, "_full.$1");

    $(".detail-page__modal").show();
    $(".detail-page__modal-content").append(
      `<img src="${newSrc}" alt="상세페이지 이미지" />`
    );
  });

  // modal close event handler
  $(".detail-page__modal").click(function () {
    $(this).hide();
  });

  $(".detail-page__modal-content").click(function (e) {
    e.stopPropagation();
  });
});
