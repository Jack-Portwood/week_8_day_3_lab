<template>
  <div id="bookingsGrid" v-if="bookings">
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

        eventBus.$on('booking-deleted',(id)=>{
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice(index, 1)
        });

        eventBus.$on('booking-changed', () => {
            this.fetchData();
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

<style scoped>
#bookingsGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

h2 {
    padding: 0;
    margin: 0;
}

</style>