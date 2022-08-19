window.addEventListener("load", function() {
    setLinkTitles();
    setWindowTitle();
    loadBreadcrumbs();
    seperateSections();
});

// Insert breaks between <section/> in main content
function seperateSections() {
    const divs = document.querySelectorAll(".main");
    for (const div of divs) {
        const sections = div.querySelectorAll("section");
        let i = 0;
        for (const section of sections) {
            if (i < sections.length - 1) section.insertAdjacentHTML("afterend", "<hr/>");
            i += 1;
        }
    }
}

// Set tab window from first encountered breadcrumbs' contents
function setWindowTitle() {
    const breadcrumbs = document.querySelectorAll(".breadcrumbs"), items = [];
    if (breadcrumbs && breadcrumbs.length > 0) {
        const links = breadcrumbs[0].querySelectorAll("a");
        for (const link of links) items.push(link.innerText);
        items.shift();
    }
    document.title = "Italian" + (items.length === 0 ? "" : " | " + items.join(" | "));
}

// Set <a/> title to its href if unset
function setLinkTitles() {
    const links = document.querySelectorAll("a");
    for (const link of links) {
        let title = link.getAttribute("title");
        if (title === "" || title == null) link.setAttribute("title", link.href);
    }
}

// Take <a/> in <div class="breadcrumbs" /> and make nice
function loadBreadcrumbs() {
    const divs = document.querySelectorAll(".breadcrumbs");
    for (const div of divs) {
        const links = div.querySelectorAll("a"), count = links.length;
        let i = 0;
        for (const link of links) {
            if (i < count - 1) link.insertAdjacentHTML("afterend", " &gt; ");
            i += 1;
        }
    }
}