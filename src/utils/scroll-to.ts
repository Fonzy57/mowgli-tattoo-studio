export const handleClickAnchor = (id: string, offset: number) => {
  const element_to_scroll_to = document.getElementById(id);
  if (element_to_scroll_to) {
    window.scrollTo({
      top: element_to_scroll_to.offsetTop - offset,
      behavior: "smooth",
    });
  }
};
