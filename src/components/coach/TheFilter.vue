<template>
  <base-card>
    <span>
      <input type="checkbox" id="frontend" name="frontend" checked @change="setFilter"/>
      <label for="frontend">Frontend </label>
    </span>

    <span>
      <input type="checkbox" id="backend" name="backend" checked @change="setFilter"/>
      <label for="backend">Backend </label>
    </span>

    <span>
      <input type="checkbox" id="career" name="career" checked @change="setFilter"/>
      <label for="career">Career</label>
    </span>


  </base-card>
</template>

<script>
export default {
    data() {
        return {
            filters:{
                frontend:true,
                backend:true,
                career:true,
            }
        }
    },

     methods:{
        setFilter(e){
            const inputId = e.target.id;
            const isActive = e.target.checked;
          const updatedFilter={
            ...this.filters,
            [inputId]: isActive,
          }

          this.filters =updatedFilter;

          this.$emit('change-filter',updatedFilter);
        }
    } 
};
</script>