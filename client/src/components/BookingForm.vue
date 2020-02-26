<template>
  <form id='bookings-form' v-on:submit='addBooking'>
      <h2>Add A Booking</h2>
      <div class='formwrap'>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model='name' required>
      </div>
      <div class='formwrap'>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model='emailAddress' required>
      </div>
      <div class="formwrap">
          <select name="status" id="status" v-model='status'>
              <option value="true">True</option>
              <option value="false">False</option>
          </select>
      </div>
      <input type="submit" value="Save" id="save"/>
  </form>

</template>

<script>
import BookingService from '../services/BookingService.js';
import {eventBus} from '../main.js';
export default {
    name: 'bookings-form',
    data() {
        return {
            name: '',
            emailAddress: '',
            status: ''
        }
    },
    methods: {
        addBooking(e){
            e.preventDefault()
            const booking = {
                name:this.name,
                emailAddress:this.emailAddress,
                status:this.status
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }
    }

}
</script>

<style scoped>
h2 {
    margin: 10px 0;
    padding: 0;
}

form {
    width: 75%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    margin-bottom: 40px;
}

label {
    min-width: 100px;
    display: inline-block;
}

.formwrap {
    margin-bottom: 10px;
}

</style>