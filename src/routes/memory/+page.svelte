<h1>JUNGLE MEMORY</h1>
<script>
  function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
      }

    return array;
    }

    let flipcard1 = "";
    let flipcard2 = "";

    let img = ["/emory8.png","/emory8.png","/emory7.png","/emory7.png","/emory1.png","/emory2.png", "/emory3.png", "/emory4.png","/emory5.png","/emory6.png","/emory6.png","/emory1.png","/emory2.png", "/emory3.png", "/emory4.png","/emory5.png"];
    let Picturelist = shuffle(img);
  
  let cards = [];
  for (let index = 0; index < 16; index++) {
    cards.push({
      id: index, 
      img: Picturelist[index], // TODO: unique images per card card
      flipped: false,  
      completed: false,
    });
  }
  let flipcount = 0;
  function flip(card) {
    
    if (!card.flipped && flipcount < 2) {
      
      
      if (flipcount == 0) {
        flipcard1 = card.img; 
      }
      if (flipcount == 1) {
        flipcard2 = card.img; 
      }

      flipcount += 1; 
      card.flipped = true; 

      if (flipcount == 2 && flipcard1 == flipcard2) {

        setTimeout(() => {
          
          cards.forEach((card) => {
            
            card.completed = card.flipped;
        });
          flipcount = 0;
          cards = cards;
        }, 2000);
      }

      if (flipcount == 2 && flipcard1 != flipcard2) {

        setTimeout(() => {
  
          cards.forEach((card) => {
    
          card.flipped = card.completed;
        });
        flipcount = 0;
        cards = cards;
        }, 2000);
}
      cards = cards;
    } else {
      alert("tryck på en annan!");
    }
  }
</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
  }

  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }



    h1 {
	margin-left: auto;
	margin-right: auto;
	text-align: center;
  }
</style>
