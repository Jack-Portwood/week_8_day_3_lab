
<template>
  <div id='app'>
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingForm.vue';
import BookingsGrid from './components/BookingGrid.vue';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }

}
</script>

<style>

</style>
