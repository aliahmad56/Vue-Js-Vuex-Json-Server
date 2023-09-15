<template>
  <div>
        <HeaderMenu />
    <h1 class="h1"> {{name}} Welcome to Home page</h1>

    <table class="table customtable">
  <thead class="thead-dark">
    <tr>
      <th scope="col">SerialNo</th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Number</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dataa in displayName" :key="dataa.id">
        <td>{{dataa.id}}</td>
        <td>{{dataa.name}}</td>

    <td>
        {{dataa.location}}
    </td>
    <td>
        {{dataa.number}}
    </td>
    <td><router-link :to="'/update/'+dataa.id">Update</router-link>
</td>
<td>
<button class="btn btn-primary" v-on:click="DeleteRestaurant(dataa.id)">Delete</button>

</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import HeaderMenu from './HeaderMenu.vue'
import { mapGetters, mapActions} from 'vuex'
export default
{
    name:'HomePage',
        components:{
         HeaderMenu
        },
        data(){
            return{
              
               restaurant:[],
                }
          },
       
     async mounted()
    {
    this.dataloaded();
    },

    computed:{
      ...mapGetters(["displayName"])
      
    },
    methods:{

      ...mapActions(['fetchItems', 'removeItem']),

      fetchItemsss()
      {
        this.fetchItems();
      },
      
        async DeleteRestaurant(id)
      {
        this.removeItem(id);
        },    
},
created() {
    this.fetchItemsss();
  }
}
</script>

<style>

.h1{
  margin-top: 20px;
}
</style>