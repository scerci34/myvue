<template>
 <div class="container">
      <div class="row justify-content-center">
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">
                        Watch Islemleri
                    </div>
                    <div class="card-body">
                        <input type="text" class="form-control" v-model="name"  id="">
                        <span :key="key" v-for=" (error,key) in errors">{{error}}</span></br>
                        <button @click="ekle()" :disabled="(errors.length!=0) ||  (name=='')" class="btn btn-primary">Ekle</button>

                    </div>
                </div>
            </div>
      </div>

      <div :disabled="errors.length==0"  class="row justify-content-center">
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">
                        Uye Listesi
                    </div>
                    <div class="card-body">
                        <ul>
                            <li :key="key" v-for="(kisi,key) in users">{{kisi}}<span @click="sil(key)">Sil</span></li>
                        </ul>

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
            name:"",
            errors:[],
            users:[],
        }
    },
    methods: {
        ekle(){
            this.users.push(this.name)
        },

        sil(key){
             this.users.splice(key,1);
        }
        
    },
    watch:{
        name(){
            this.errors=[]
            if (this.name==""){
                this.errors.push('Bos birakamazsiniz')
            }else
            if(this.name.length<5){
                this.errors.push('6 karakterden az giremezsiniz')
            }

        }
    }


}
</script>

<style>

</style>