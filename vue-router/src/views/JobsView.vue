<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <p>{{job.title}}</p>
        <p>{{job.details}}</p>
      
    </div>
</template>
<script>
export default {
    data(){
        return {
            jobs: [
                {title: 'Ninja UX Designer', id: 1, details: 'lorem dfg' },
                {title: 'Ninja Web Developer', id: 2, details: 'lorem sss'},
                {title: 'Ninja Vue Developer', id: 3, details: 'lorem bbbbbbbb' },
            ]
        }
    }
}
</script>
<style></style>