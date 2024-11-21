export const handleClickAnchor = (id: string, offset: number) => {
  const element_to_scroll_to = document.getElementById(id);
  if (element_to_scroll_to) {
    // CHECKING WINDOW WIDTH
    const screenWidth = window.innerWidth;

    // SET OFFSET TO 0 IF SCREEN UNDER 1440 PX
    const adjustedOffset = screenWidth < 1440 ? 0 : offset;

    window.scrollTo({
      top: element_to_scroll_to.offsetTop - adjustedOffset,
      behavior: "smooth",
    });
  }
};
