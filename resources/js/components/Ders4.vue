<template>
  <div>
      <input type="text" v-model="yas" name="kutu">
      <p>   {{yas}}</p>
      <p>   {{yas2}}</p>

       <button type="button" @click="yasbul()" class="btn btn-info">
           Arttir
       </button>
  </div>
 
</template>

<script>
export default {
    data(){
        return{
           yas:24,
            yas2:0,
        }
    },
    methods:{
        yasbul(){
           this.yas2=(parseInt(this.yas2)+parseInt(this.yas));
        }
        
    },
}
</script>

<style>

</style>