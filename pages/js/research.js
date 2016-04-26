var project = query_params["project"];

if(project === undefined)
    project = "its";

changeTab(project);

$("#research_tabs").find("a").click(function() {
    changeTab($(this).data("tab"));

    return false;
})

function changeTab(page) {
    $("#research_tabs").find("a").parent().removeClass("active");
    $("#research_tabs").find("a[data-tab=" + page + "]").parent().addClass("active");

    console.log(loading_html);
    $("#research_holder").html(loading_html);
}
