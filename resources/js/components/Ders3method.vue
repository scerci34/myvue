<template>
  <div>

      <select  v-on:click=yap() :disabled="durum">  class="form-control col-2"   >
      <option :name="i"   :key="i" v-for="i in 40">
         {{i}} 
      </option>
     </select>
     
    
  </div>
  

     

 
</template>

<script>
export default {
 data(){
        return{
            i:0,durum: false,
           kisiler:[{"isim":"Ali"},{"isim":"Ayse"},{"isim":"Mustafa"}],
        }
    },
    methods:{
        yap(){this.durum=true;}
    },
  
   
  

}

</script>

<style>

</style>