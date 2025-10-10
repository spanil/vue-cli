<template>
    <form action="">
        <label >Email</label>
        <input type="email" required v-model="email">
        <label >Password</label>
        <input type="password" required v-model="password">     
        <label>Role</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>
        <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label for="">Accept</label>
        </div>
        <div>
            <input type="checkbox" value="Hari" v-model="names">
            <label for="">Hari</label>
        </div>
        <div>
            <input type="checkbox" value="Shyam" v-model="names">
            <label for="">shyam</label>
        </div>
        <div>
            <input type="checkbox" value="Neta" v-model="names">
            <label for="">Neta</label>
        </div>
    </form>
    <p>Email : {{email}}</p>
    <p>Password : {{password}}</p>
    <p>Role : {{role}}</p>
    <p>Accept Term : {{terms}}</p>
    <p>Names : {{names}}</p>
</template>
<script>
export default {
    data(){
        return {
            email:'test@sest.com',
            password:'1234',
            role: 'developer',
            terms: false,
            names :[]
        }
    }
}
</script>
<style>
</style>