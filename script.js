const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

     //   Main Page

  ScrollReveal().reveal(".container img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".container h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".container p",{
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".para_1 h3",{
    ...scrollRevealOption,
    delay: 500,
  });

 ScrollReveal().reveal(".para_2 ",{
    ...scrollRevealOption, 
    delay: 1000,
 });

 ScrollReveal().reveal(".para_3",{
    ...scrollRevealOption,
    delay: 1500, 
   origin: "left",
 });

 ScrollReveal().reveal(".para_4",{
    ...scrollRevealOption,
    delay: 1500, 
   origin: "right",
 });

 ScrollReveal().reveal(".image",{
    ...scrollRevealOption,
    origin: "left",
 });


ScrollReveal().reveal(".para_5 img",{
...scrollRevealOption,
delay: 500,
origin:"right",
});

ScrollReveal().reveal(".partner_heading", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".para_6", {
    ...scrollRevealOption,
    delay: 500,
    origin:"bottom",
  });

ScrollReveal().reveal(".container h2",{
 ...scrollRevealOption,
 delay: 500,
});
 
ScrollReveal().reveal(".course",{
    ...scrollRevealOption,
    delay: 300,
    origin: "bottom",
   });
    
ScrollReveal().reveal(".form_container",{
    ...scrollRevealOption,
    delay: 1000,
    origin: "bottom",
});