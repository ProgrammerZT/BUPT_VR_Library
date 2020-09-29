export const showMask=()=>{
  const mask = $(".byr-mask-show");
  const web = $(".web");
  let showfflag = false;
  mask.click(() => {
    if (!showfflag) {
      mask.html("Close");
      web.show();
      showfflag = true;
    } else if (showfflag) {
      mask.html("More");
      web.hide();
      showfflag = false;
    }
  });
}

