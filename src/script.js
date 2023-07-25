const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();          // "Deactivate" any active classes
        panel.classList.add("active");  // The current panel is now the only active one
    });
});

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove("active");
    });
}