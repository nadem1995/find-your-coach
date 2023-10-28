<template>
  <form @submit.prevent="submitForm" :class="{invalid : !isValide}">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" v-model="form.firstName" />
    </div>

    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" v-model="form.lastName" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="5" name="description" id="description" v-model="form.description"></textarea>
    </div>

    <div class="form-control">
      <label for="hourlyRate">Hourly rate</label>
      <input type="number" id="hourlyRate" name="hourlyRate" v-model="form.hourlyRate " />
    </div>

    <div class="form-control">
      <h3>Areas to expertise</h3>
      <div>
        <input type="checkbox" id="frontend" name="frontend" value="frontend" v-model="form.areas" />
        <label for="frontend">Frontend</label>
      </div>

      <div>
        <input type="checkbox" id="backend" name="backend" value="backend" v-model="form.areas" />
        <label for="backend">Backend</label>
      </div>

      <div>
        <input type="checkbox" id="career" name="career" value="career" v-model="form.areas" />
        <label for="career">Career</label>
      </div>
    </div>
    <base-button>
    <base-spinner v-if="isLoading"></base-spinner>
    <span v-else>Register</span>
  </base-button>

    <p v-if="!isValide">
      All fields is required
    </p>
  </form>
</template>

<script>
export default {
    data() {
        return {
          isValide:true,
          isLoading:false,
            form:{
                id:new Date(),
                firstName:'',
                lastName:'',
                hourlyRate:null,
                description:'',
                areas:[],
            }
        }
    },

    methods: {
      formValidation(){
        const values= Object.values(this.form);
        values.forEach((vlaue)=>{
          if (!vlaue || vlaue.length==0) {
            this.isValide = false;
          } else{
            this.isValide = true;
          }
        });

      },
        async submitForm(){
          this.isLoading=true;
          this.formValidation();
          if (this.isValide==false) {
            this.isLoading=false;
            return;
          }
          await this.$store.dispatch('coaches/addNewCoach',this.form);
          this.isLoading=false;
          this.$router.push('/');
        }
    },
};
</script>

<style  scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}



input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>