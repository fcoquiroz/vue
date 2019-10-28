<template>
    <div>
        <h1>Galeria de Fotos</h1>
        <router-link :to="{ name: pictures, params: {id: item} }" 
            v-for="(item,index) of picturesArray" :key="index">
            <button>foto {{item}}</button>
        </router-link>
        <Picture/>
        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
import Picture from '@/components/Picture.vue';
export default {
    name: 'Pictures',
    components:{
        Picture
    },
    data() {
        return {
            picturesArray: [1,2,3]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
        
    },
}
</script>