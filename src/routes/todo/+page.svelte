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
            id="new-task-submit"
            value="Lägg till" />
    </form>


</header>

<main>
    <section class="ärende-lista">
        <h2>att-göra-lista</h2>
        <div id="ärende">
         
            <div class="ärende">
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
            <button class="edit">Delete</button>
        </div>
    </section>
</main>

</body> 


<script>

</script>

<style>
:root {
    --dark: #374151;
    --darker: #1F2937;
    --darkest: #111827;
    --grå: #6b7280;
    --vit: #EEE;
    --ros: #FF0000;
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
    min-height: var(--dark);
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
}
    </style>