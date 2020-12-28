let target = "";

window.addEventListener("load", (event) => {

    target = document.getElementById("intersectionObserverVideo");
    createObserver();
}, false);

let callback = (entries, observer) => {
    const video = '<p class="lead"><iframe width="100%" style="max-width: 704" height="396" src="https://www.youtube.com/embed/_JkwZok_GHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>'
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            target.insertAdjacentHTML("beforeend", video);
            observer.disconnect();
        }
    });
}

createObserver = () => {

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target)
}