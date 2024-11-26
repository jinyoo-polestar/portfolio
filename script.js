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

  //about-process section title show effect
  gsap.fromTo(
    $(".about-process__title"),
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: $(".about-process"),
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
});
