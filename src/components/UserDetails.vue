<template>
  <div class="user-details">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
        {{ error }}
        </div>
        
        <div v-if="user">
        <h2>{{user.name}}</h2>
        <p>{{user.email}}</p>
        <p>{{user.phone}}</p>
        <p>{{user.address.street}}</p>
        <p>{{user.address.city}}</p>
        <p>{{user.address.zipcode}}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: "user-details",
  data() {
    return {
      loading: false,
      error: null,
      user: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.user = null;
      this.loading = true;
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
          this.loading = false;
          data = data.filter(user => {
            return user.id == this.$route.params.id;
          });
          if (data.length > 0) {
            this.user = data[0];
          }
        });
    }
  }
};
</script>

<style scoped>

</style>
