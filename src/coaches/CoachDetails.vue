<template>
  <section>
    <base-card>
      <h2>{{ selectedCoach.firstName  }} {{ selectedCoach.lastName }}</h2>
      <h3>$ {{selectedCoach.hourlyRate}}/hour</h3>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>Interested ? Reach out now !</h2>
        
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :text="area"/>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
    data() {
        return {
            coach:null
        }
    },
  props: ['id'],
  computed: {
    selectedCoach(){
        return this.coach
    },

    contactLink(){
        return this.$route.path+'/contact';
    }
  },
  created() {
    this.coach=this.$store.getters['coaches/coaches'].find(coach =>coach.id===this.id)
  },
};
</script>

<style  scoped>
</style>