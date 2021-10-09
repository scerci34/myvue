<template>
  <div class="container">
      <div class="row justify-content-center">
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">
                        Watch Islemleri
                    </div>
                    <div class="card-body">
                        <h1>{{yaz}}</h1>
                        <p>Sayi: {{counter}}</p>
                        <button @click="counter++;">Arttir</button>

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
        counter:0,
        yaz:"",
    }
},
watch:{
    //counter degiskeninde her bir degisiklik oldugunda tetiklenecektir.
    
    counter(){
        this.yaz="Degisti";
        if(this.counter>=5){this.yaz="Oooo";}
    }
}
}
</script>

<style>

</style>