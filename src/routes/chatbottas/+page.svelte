<script>
  import "@picocss/pico/css/pico.min.css";
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { onMount } from "svelte";
  let eliza = new ElizaBot();
  let chat = [{user: "Elizabot", text: eliza.getInitial() }];
  onMount(()=>{
  chat = JSON.parse(localStorage.getItem('Chat')??[{user: "Elizabot", text: eliza.getInitial() }]);
})

  async function write(message) {
    // TODO: yeet in the new message
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    // TODO: write the text
    if (eliza.quit){
      chat.push({user: "Elizabot", text: eliza.getFinal})
    }
    else{
      chat.push({user: 'Elzabot', text: eliza.transform(message)})
    }
    chat = chat
    localStorage.setItem('Chat', JSON.stringify(chat))
  }
</script>

<div class="container" data-theme="light">
  <h1>Elizabot at ur service!</h1>
  <div class="scrollable">
    {#each chat as message}
    <article>
      <span>
        {message.user}: {message.text}
      </span>
    </article>
    {/each}
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      form.reset();
      const text = data.get("text");
      chat.push({user: "You", text: text})
      chat=chat;
      write(text);
      cancel(); //don't post anything to server
      
    }}
  >
    <input type="text" name="text" />
  </form>
</div>

<style>
  .container {
    text-align: center;
  }
  h1{
    color: black;
  }
</style>
