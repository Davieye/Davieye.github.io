window.addEventListener('load', () =>{
    const form = document.querySelector("#ny-task-form");
    const input = document.querySelector("#ny-task-input");
    const list_el = document.querySelector("#ärende");   

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ärende = input.value;

        if (!ärende) {
            alert("Please add a task");
            return;
        } 
        const ärende_el = document.createElement("div");
        ärende_el.classList.add("ärende");

        const ärende_content_el = document.createElement("div");
        ärende_content_el.classList.add("kontent");
        ärende_content_el.innerText = ärende;

        ärende_el.appendChild(ärende_content_el);

        list_el.appendChild(ärende_el);

    })
})