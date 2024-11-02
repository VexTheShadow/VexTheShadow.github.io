timeline(document.querySelectorAll('.timeline'), {
    forceVerticalMode: 1000,
    mode: 'horizontal',
    visibleItems: 4
});
first_item_close = document.getElementById("collapseOne");
if (first_item_close.classList.contains("collapse") && first_item_close.classList.contains("show")) {
    first_item_close.classList.remove("show");
}
second_item_close = document.getElementById("collapseTwo");
if (second_item_close.classList.contains("collapse") && second_item_close.classList.contains("show")) {
    second_item_close.classList.remove("show");
}