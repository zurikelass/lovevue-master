
<script>
import axios from 'axios';

export default {
  data() {
    return {
      currencies: []
    };
  },
  created() {
    axios
      .get('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json?fbclid=IwAR0fbmI9yQ2tc7u6crUvHvobpWMbJDlDv5H4PC0HBvu1tmKWSzNkWGiYANg')
      .then(response => {
        console.log(response)
        this.currencies = response.data[0].currencies
      })
      .catch(error => {
        console.error(error);
      });
  }
};

</script>
<template>
  <div>
    <ul v-if="this.currencies.length">
      <li class="bg-teal-500" v-for="currency in this.currencies" :key="currency.code">
        {{ currency.name }}({{ currency.code }}): {{ currency.rate }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>
