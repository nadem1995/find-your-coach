<template>
  <main>
    <!-- <base-dialog :show="!!error">
    <p>{{ error }}</p>
  </base-dialog> -->
    <section>
      <the-filter @change-filter="setFilter"></the-filter>
    </section>
    <base-card>
      <section>
        <base-button mode="outline" @click="loadCoaches">Refreash</base-button>
        <base-button :link="true" :to="{ name: 'register' }"
          >Register as a Coach !</base-button
        >
        <div v-if="isLoading && hasCoaches">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <base-card v-for="coach in coaches" :key="coach.id">
            <the-coach-card :coach="coach"></the-coach-card>
          </base-card>
        </ul>
        <p v-else-if="!hasCoaches" class="text-center">No data</p>
      </section>
    </base-card>
  </main>
</template>

<script>
import TheCoachCard from '../components/coach/TheCoachCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import TheFilter from '../components/coach/TheFilter.vue';
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { TheCoachCard, BaseCard, BaseButton, TheFilter },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      /* return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    }, */

      return coaches;
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilters = updatedFilter;
    },

    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || 'Some thimg went wrong';
      }
    },
  },
};
</script>

<style scoped >
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.text-center{
  text-align: center;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>