<template>
    <form @submit.prevent="submitRequst" :class="{errors : !formIsValid}">
        <div class="form-control">
            <label for="email">Your email</label>
            <input name="email" id="email" type="email" v-model.trim="form.email">
        </div>


        <div class="form-control">
            <label for="message">Your message</label>
            <textarea row="5" name="message" id="message" type="message" v-model.trim="form.message"></textarea>
        </div>


        <div class="actions">
            <base-button>Send</base-button>
        </div>
        <p v-if="!formIsValid"> Email and message is required</p>
    </form>
</template>

<script>
    export default {

        data() {
            return {
                form:{
                    email:'',
                    message:'',
                },

                formIsValid:true
            }
        },

        methods:{
            validateForm(){
                if (this.form.email==='' || this.form.message==='' ) {
                    this.formIsValid = false;
                    return;
                }

            },
            submitRequst(){
                this.validateForm()
               this.$store.dispatch('addNewRequest',this.form);
            }
        }
       
    }
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>