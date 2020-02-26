<template>
  <div id="bookingsGrid">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking.vue';
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main.js';
export default {
    name: 'bookings-grid',
    data() {
        return {
            bookings: []
        }
    },
    components: {
        'booking': Booking
    },
    mounted(){
        this.fetchData();

        eventBus.$on('booking-added', (booking) => {
            this.bookings.push(booking)
        });
    },
    methods: {
        fetchData(){
            BookingService.getBookings()
            .then(bookings => this.bookings = bookings);
        }
    }
}
</script>

<style>

</style>