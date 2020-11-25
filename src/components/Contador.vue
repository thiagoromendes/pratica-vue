<template>
  <div class="contador">
      <span>{{contador}}</span>
      <button @click="add">+</button>
      <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        add(){
            this.contador++
        },
        sub(){
            this.contador--
        }
    }
}
</script>

<style>
    .contador {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contador span {
        font-size: 30px;
        padding: 5px 10px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: #000;
        color: #fff;
        font-weight: bold;
        font-size: 15px;
        margin-left: 10px;
        outline: none;
    }
</style>