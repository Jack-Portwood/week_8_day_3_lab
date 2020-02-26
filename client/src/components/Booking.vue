<template>
  <div class="booking" v-if="booking">
      <h3>Name: {{booking.name}}</h3>
      <h3 class="capitalize">Checked-In: {{booking.status}}</h3>
      <button v-on:click="updateBooking" v-if="booking.status == 'false'">Check In</button>
      <p>Email Address: {{booking.emailAddress}}</p>
      <button v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js';
import {eventBus} from '../main.js';
export default {
    name: 'booking',
    props: ['booking'],
    methods:{
        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then(()=> eventBus.$emit("booking-deleted", this.booking._id))
        },
        updateBooking(){
            BookingService.updateBooking(this.booking._id, {status: 'true'})
            .then(() => eventBus.$emit("booking-changed", this.booking._id))
        }
    }

}
</script>

<style>
.capitalize {
    text-transform: capitalize;
}

.booking {
    width: 30%;
    background: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
    padding: 25px;
}

button {
    color: #fff;
    border: none;
    font-size: 18px;
    padding: 10px;
    margin-top: 10px;
    background: #F55536;
}

</style>