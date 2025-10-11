<template>
    <form @submit.prevent="handleSubmit">
        <label >Email</label>
        <input type="email" required v-model="email">

        <label >Password</label>
        <input type="password" required v-model="password"> 
        <div v-if="passwordError" class="error">{{ passwordError }}</div>    

        <label>Role</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label for="">Skills</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <!-- splice method
        <div v-for="(skill, index) in skills" class="pill" :key="skill">
           <span @click="removeSkill(index)">{{ skill }}</span> 
        </div> -->
        <div v-for="skill in skills" class="pill" :key="skill">
           <span @click="deleteSkill(skill)">{{ skill }}</span> 
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label for="">Accept terms and Conditions</label>
        </div>
        <div class="submit">
            <button>Create an Account</button>
        </div>    
    </form>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            role: 'developer',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods:{
        addSkill(e){
            if(e.key === ',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }                
                this.tempSkill = ''
            }
    },
    // splice method
    // removeSkill(index){
    //     this.skills.splice(index, 1)
    // }
    deleteSkill(skill){
        this.skills = this.skills.filter((item)=>{
            return skill != item
        })
    },
    handleSubmit(){
        this.passwordError = this.password.length > 5 ? '' : 'Password must be 6 chars long'
        if(!this.passwordError){
            console.log('email: ', this.email)
            console.log('password: ',this.password)
            console.log('role: ',this.role)
            console.log('skills: ',this.skills)
            console.log('terms accepted: ',this.terms)
    }
    }
    
}
}
</script>
<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background:white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select {
    display: block;
    padding: 10px 6px;
    width:100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color:#555
}
.pill {
display: inline-block;
margin: 20px 10px 0 0;
padding: 6px 12px;
background: #eee;
border-radius: 20px;
font-size: 12px;
letter-spacing: 1px;
font-weight: bold;
color:#777;
cursor: pointer;
}
button {
background:#eb6dff;
border: 0;
padding: 10px 28px;
margin-top: 20px;
color: white;
border-radius: 20px
}
.submit{
    text-align: center
}
</style>