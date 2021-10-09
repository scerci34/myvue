<template>
  <form action="">
      <label for="adSoyad">Ad Soyad</label>
      <input class="form-control" v-model="isim" v-bind:class="{'is-invalid':isim==''}"  id="adSoyad" type="text">
       <label for="Telwfon Numarasi"></label> 
        <input class="form-control" v-model="tel" v-bind:class="{'is-invalid':tel.length<3,'is-valid':tel>2}"  id="adSoyad" type="text">
        <label for="Adres">Adres</label>
        <input type="text" class="form-control" v-model="adres" v-bind:class="[adres.length>5 ? 'is-valid' : 'is-invalid']">
  </form>
</template>

<script>
export default {
data() {
    return {
       isim:'',
       tel:'',
       adres:'',
    }
},
methods: {
    
},
}
</script>

<style>

</style>