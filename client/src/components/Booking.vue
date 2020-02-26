<template>
  <div class="booking">
      <h3>Name: {{booking.name}}</h3>
      <h3 class="capitalize">Checked-In: {{booking.status}}</h3>
      <p>Email Address: {{booking.emailAddress}}</p>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js';
export default {
    name: 'booking',
    props: ['booking']

}
</script>

<style>
.capitalize {
    text-transform: capitalize;
}

</style>