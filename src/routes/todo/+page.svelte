<body>
 <header> 
    <h1> Att göra lista :p</h1> 
    <form id= "ny-task-form">
        <input
            type="text"
            id="ny-task-input"
            placeholder="Vad har du planerat?"/>
        <input 
            type="submit"
            id="ny-task-submit"
            value="Lägg till" />
    </form>


</header>

<main>
    <section class="ärende-lista">
        <h2>att-göra-lista</h2>
        <div id="ärende">
         
          <!-- <div class="ärende">
                <div class="kontent">
                 <input 
                    type="text"
                    class="text"
                    value="King ärende"
                    readonly 
                />
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button> 
             </div>
            </div>   -->
      
        </div>
    </section>
</main>

</body> 


<script>

window.addEventListener('load', () =>{
    const form = document.querySelector("#ny-task-form");
    const input = document.querySelector("#ny-task-input");
    const list_el = document.querySelector("#ärende");   

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ärende = input.value;

        if (!ärende) {
            alert("Please add a task")
        } else {
            console.log("Success")
        }
    })
})





</script>

<style>
:root {
    --dark: #374151;
    --darker: #1F2937;
    --darkest: #111827;
    --grå: #6b7280;
    --vit: #EEE;
    --ros: #00ff6e;
    --lila: #8b5cf6;
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--dark);
    color: #FFF;
}

header {
    padding: 2rem 1rem;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
}
header h1 {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--grå);
    margin-bottom: 1rem; 
}

#ny-task-form {
    display: flex;
}

input, button {
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

#ny-task-input {
    flex: 1 1 0%;
    background-color: var(--darker);
    padding: 1rem;
    border-radius: 1rem;
    margin-right: 1rem;
    color: var(--vit);
    font-size: 1.25rem;

}

#ny-task-input::placeholder {
    color: var(--grå);
}

#ny-task-submit {
    
    color: var(--ros);
    font-size: 1.25rem;
    font-weight: 700;
    background-image: linear-gradient(to right, var(--ros),var(--purple));
    -webkit-background-clip: text;
    
    cursor: pointer;
    transition: 0.4s;
}

#ny-task-submit:hover {
    opacity: 0.8;
}

#ny-task-submit:active {
    opacity: 0.6;
}

main {
    flex: 1 1 0%;
    padding: 2rem 1rem;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}

.ärende-lista {
    padding: 1rem;
}

.ärende-lista h2 {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--darker);
    margin-bottom: 1rem;
}

#ärende .ärende {
    display: flex ;
    justify-content: space-between;
    background-color: var(--darkest);
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
}

#ärende .ärende .kontent .text
{
    color: var(--vit);
    font-size: 1.125rem;
    width: 100%;
    display: block;
    transition: 0.4s;
}

#ärende .ärende .kontent .text:not(:read-only) {
color: var(--ros) ;
}

#ärende .ärende .actions {
    display: flex;
    margin: 0 -0.5rem;
}

.ärende .actions button {
    cursor: pointer;
    margin: 0 0.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.4s;
}

.ärende .actions button:hover {
    opacity: 0.8;
}

.ärende .actions button:active {
    opacity: 0.6;
}

.ärende .actions .edit {
    color: #00ff6e;
}

.ärende .actions .delete {
    color: crimson
}
</style>