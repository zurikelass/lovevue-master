<script>
import axios from "axios";

export default {
  data() {
    return {
      currencies: [],
    };
  },
  created() {
    axios
      .get(
        "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json?fbclid=IwAR0fbmI9yQ2tc7u6crUvHvobpWMbJDlDv5H4PC0HBvu1tmKWSzNkWGiYANg"
      )
      .then((response) => {
        console.log(response);
        this.currencies = response.data[0].currencies;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Code</th>
          <th class="px-4 py-2">Rate</th>
          <th class="px-4 py-2">Quantity</th>
          <th class="px-4 py-2">Diff</th>
        </tr>
      </thead>
      <tbody v-if="this.currencies.length">
        <tr v-for="currency in this.currencies" :key="currency.code">
          <td class="border px-4 py-2">{{ currency.name }}</td>
          <td class="border px-4 py-2">{{ currency.code }}</td>
          <td class="border px-4 py-2">{{ currency.rate }}</td>
          <td class="border px-4 py-2">{{ currency.quantity }}</td>
          <td class="border px-4 py-2">{{ currency.diff }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
