<template>
  <div class="list">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td><router-link :to="{ name: 'userDetails', params: { id: user.id }}">View</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      users: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.users = data;
      });
  }
};
</script>

<style scoped>
table {
  width: 85%;
  margin: auto;
  border: 2px solid #3cbd15;
  padding: 10px;
  border-collapse: collapse;
}
table > thead > tr {
  background-color: #359119;
  color: #eceaea;
  font-size: 120%;
}
table td {
  padding: 6px;
}
table tr:nth-child(2n) {
  background: #eceaea;
}

table > tbody > tr:hover {
  background-color: #69d847;
}
</style>
