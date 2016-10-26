var current_page = 1;
var items_per_page = 10;

var item_json = [
    { id: "Malesuada placerat: 1"},
    { id: "Malesuada placerat: 2"},
    { id: "Malesuada placerat: 3"},
    { id: "Malesuada placerat: 4"},
    { id: "Malesuada placerat: 5"},
    { id: "Malesuada placerat: 6"},
    { id: "Malesuada placerat: 7"},
    { id: "Malesuada placerat: 8"},
    { id: "Malesuada placerat: 9"},
    { id: "Malesuada placerat: 10"},	
     { id: "Malesuada placerat: 11"},
    { id: "Malesuada placerat: 12"},
    { id: "Malesuada placerat: 13"},
    { id: "Malesuada placerat: 14"},
    { id: "Malesuada placerat: 15"},
    { id: "Malesuada placerat: 16"},
    { id: "Malesuada placerat: 17"},
    { id: "Malesuada placerat: 18"},
    { id: "Malesuada placerat: 19"},
    { id: "Malesuada placerat: 20"},
     {id: "Malesuada placerat: 21"},
    { id: "Malesuada placerat: 22"},
    { id: "Malesuada placerat: 23"},
    { id: "Malesuada placerat: 24"},
    { id: "Malesuada placerat: 25"},
    { id: "Malesuada placerat: 26"},
    { id: "Malesuada placerat: 27"},
    { id: "Malesuada placerat: 28"},
    { id: "Malesuada placerat: 29"},
    { id: "Malesuada placerat: 30"},
    { id: "Malesuada placerat: 31"},
    { id: "Malesuada placerat: 32"},
    { id: "Malesuada placerat: 33"},
    { id: "Malesuada placerat: 34"},
    { id: "Malesuada placerat: 35"},
    { id: "Malesuada placerat: 36"},
    { id: "Malesuada placerat: 37"},
    { id: "Malesuada placerat: 38"},
    { id: "Malesuada placerat: 39"},
    { id: "Malesuada placerat: 40"}

    	];
console.log(item_json);

/* Previous page */
function previous_action() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
/* next page */
function next_action() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
/* calculate page */
function numPages()
{
    return Math.ceil(item_json.length / items_per_page);
}	
/* Current page */
function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_previous = document.getElementById("btn_previous");
    var list = document.getElementById("content");
    var page_status = document.getElementById("page");

    // Validating  page
    if (page < 1) {
        page = 1;
    }
    if (page > numPages()) {
        page = numPages();
    }

    list.innerHTML = "";
    /*loop*/
    for (var i = (page - 1) * items_per_page; i < (page * items_per_page); i++) {
        list.innerHTML += item_json[i].id + "<br>";
    }
    page_status.innerHTML = page;
    /* button visibility */
     if (page == 1) {
        btn_previous.style.visibility = "hidden";
    } else {
        btn_previous.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }

}
/* default page */
window.onload = function() {
    changePage(1);
};
