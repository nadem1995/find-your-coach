<template>
    <li>
        <h3>{{ coach.firstName }} {{ coach.lastName }}</h3>
        <h4>${{ coach.rate }}/hour</h4>
        <div>
            <base-badge :text="area" :type="area" v-for="area in coach.areas" :key="area"/>
        </div>
        <div class="actions">
            <base-button  mode="outline" :link="true"  :to="coachContactLink">Contect</base-button>
            <base-button :link="true"   :to="coachDetailsLink">View details</base-button>
        </div>
    </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
    export default {
  components: { BaseBadge },
        props:{
            coach:Object,
        },
        computed:{
            coachContactLink(){
                return this.$route.path +'/'+this.coach.id+'/contact';
            },

            coachDetailsLink(){
                return this.$route.path +'/'+this.coach.id;
            }
        }


        
    }
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

</style>