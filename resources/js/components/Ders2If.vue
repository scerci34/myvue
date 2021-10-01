<template>
  <div>
      <label>Merhaba</label>
      <input type="text" class="form-control col-6"  value=""  v-model="kisiler.yas">
          <select id="grup" class="form-control col-3">
              <option value="deneme">deneme</option>
          <option  v-if="kisiler.yas==34" name="" id="">Istanbul</option>
          <option  v-else-if="kisiler.yas==6"   name="" id="">Ankara</option>
          <option  v-else-if="kisiler.yas==35" id="">Izmir</option>
          </select> 

  </div>
</template>

<script>
export default {
    data(){
        return{
           kisiler:{
               isim:"<b>Ali</b>",
               yas:"",
           }
        }
    },
}
</script>

