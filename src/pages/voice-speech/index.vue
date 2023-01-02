<template>
  <div class="container">
    <Header />
    <div class="container__group">
      <label for="voices">Voices</label>
      <select class="select" name="voices" id="voices"></select>
    </div>

    <div class="container__row">
      <div class="container__col">
        <div class="container__group">
          <label for="rate">Speed (<span class="rate-value">1</span>)</label>
          <input
            type="range"
            id="rate"
            min="0.5"
            max="3"
            value="1"
            step="0.1"
          />
        </div>
      </div>

      <div class="container__col">
        <div class="container__group">
          <label for="pitch"> pitch (<span class="pitch-value">1</span>)</label>
          <input type="range" id="pitch" min="0" max="2" value="1" step="0.1" />
        </div>
      </div>
    </div>

    <div class="container__group">
      <label for="text">Text</label>
      <textarea id="text" cols="30" rows="10"></textarea>
    </div>

    <div class="container__group">
      <button class="btn btn-stop" id="btn-stop">Stop</button>
      <button class="btn btn-start" id="btn-start" type="submit">Start</button>
    </div>
  </div>
</template>

<script setup></script>
