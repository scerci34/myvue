<template>
  <div>
      <span v-html="kisiler.isim"></span>{{kisiler.yas}}
  </div>
</template>

<script>
export default {
    data(){
        return{
           kisiler:{
               isim:"<b>Ali</b>",
               yas:30,
           }
        }
    },
}
</script>

