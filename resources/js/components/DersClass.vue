<template>
 <div class="container">
      <div class="row justify-content-center">
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">
                        Class&Style İşlemleri
                    </div>
                    <div class="card-body">
                        <p v-bind:class="{'text-danger':red,'buyut':buyuk}">    Merhaba ben Vuejs Developer.</p>
                        <button @click="degistir()">Kırmızı yap</button>
                        <button @click="buyut()">Buyut</button>
                    </div>
                </div>
            </div>
      </div>
  </div>
  
</template>

<script>
export default {
data() {
    return {
        red:true,
        buyuk:false,
    }
},

methods:{
        degistir(){
            this.red=!this.red;
        },
        buyut(){
            this.buyuk=!this.buyuk;
        }
        
    },


}
</script>

<style>
.buyut{
    font-size:50px;
}
</style>