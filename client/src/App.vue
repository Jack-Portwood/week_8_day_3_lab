
<template>
  <div id='app'>
    <marquee><h1>Hotel Guesthouse Paradiso ⭐️⭐️⭐️⭐️⭐️</h1></marquee>
    <bookings-form />
    <bookings-grid />
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
h1 {
  display: flex;
  justify-content: center;
}

</style>
