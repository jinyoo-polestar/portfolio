$(function () {
  gsap.registerPlugin(ScrollTrigger);

  //intro section folder effect
  gsap.fromTo(
    document.querySelector(".intro__bg"),
    { width: "20%" },
    {
      width: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector(".intro"),
        scroller: document.querySelector(".layout"),
        endTrigger: document.querySelector(".profile"),
        toggleActions: "restart none restart none",
      },
    }
  );

  //profile section title show effect
  gsap.fromTo(
    document.querySelector(".profile__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector(".profile"),
        scroller: document.querySelector(".layout"),
        endTrigger: document.querySelector(".cover"),
      },
    }
  );

  //process section title show effect
  gsap.fromTo(
    document.querySelector(".process__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector(".process"),
        scroller: document.querySelector(".layout"),
      },
    }
  );

  //about section title show effect
  gsap.fromTo(
    document.querySelector(".about__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.querySelector(".about"),
        scroller: document.querySelector(".layout"),
      },
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
