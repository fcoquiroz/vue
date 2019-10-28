<template>
    <div>
        Unidades Operativas de cliente: 

        <ul class="list-group list-group-flush"
            v-for="(item, index) in customers" :key="index">
            <li class="list-group-item">{{item.C_TEXT}}</li>
        </ul>
        <button @click="getCustomers">Cargar</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    name: 'Customers',
    computed:{
        ...mapState(['customers'])
    },
    methods: {
        ...mapMutations(['fillCustomers']),
        ...mapActions(['getCustomers'])
    },
    beforeCreate() {
        // this.$store.dispatch('getCustomers')
    }
}
</script>