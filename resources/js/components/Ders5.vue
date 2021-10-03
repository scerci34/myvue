<template>
  <div class="container">
      <div class="row justify-content-center">
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">
                        Form Islemleri
                    </div>
                    <div class="card-body">
                        <p>{{name}}</p>
                        <input  v-model.number="name"  type="number" class="form-control">
                        <select name="" id="" v-model="cins">
                        <option :key="cinsiyet" :value="cinsiyet.value" v-for="cinsiyet in cinsiyetler">{{cinsiyet.cinsiyetAdi}}</option>

                        </select>
                    </div>
                </div>
            </div>
      </div>
  </div>
 
</template>

<script>
export default {
    data(){
        return{
            name:null,
            cinsiyetler:[
                {"cinsiyetAdi":"Erkek","value":0},
                {"cinsiyetAdi":"Kiz","value":1},
            ],
            cins:1,
          
        }
    },
    
}
</script>

<style>

</style>