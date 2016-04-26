var current_page = undefined;

var project = query_params["project"];

if(project === undefined)
    project = "its";

changeTab(project);

$("#research_tabs").find("a").click(function() {
    window.history.pushState({}, document.title, "/#!research?project=" + $(this).data("tab"));
    changeTab($(this).data("tab"));

    return false;
})

function changeTab(page) {
    if(page === current_page)
        return;

    current_page = page;

    $("#research_tabs").find("a").parent().removeClass("active");
    $("#research_tabs").find("a[data-tab=" + page + "]").parent().addClass("active");

    $("#research_holder").html(loading_html);

    $.ajax("/pages/research/" + page + ".html")
    .done(function(data) {
        if(page === current_page)
            $("#research_holder").html(data);
    })
    .fail(function() {
        if(page === current_page)
            $("#research_holder").html('<div class="alert alert-danger text-center" style="margin-top: 100px; margin-bottom: 100px;">Unable to find content for the requested project</div>');
    });
}
