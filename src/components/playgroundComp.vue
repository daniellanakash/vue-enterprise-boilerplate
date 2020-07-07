<script>
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueGoodTablePlugin)

export default {
  name: 'MyTable',
  data() {
    return {
      columns: [
        {
          label: 'ID',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'First name',
          field: 'first_name',
          type: 'name',
        },
        {
          label: 'Last name',
          field: 'last_name',
          type: 'name',
        },
        {
          label: 'avatar',
          field: 'avatar',
          type: 'image',
        },
      ],
      rows: [],
    }
  },
  mounted() {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((response) => (this.rows = response.data.data))
      .catch((error) => console.log(error))
  },
}
</script>

<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" />
  </div>
</template>
