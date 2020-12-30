<template>
  <main>
    <section class="calendar">
      <h1 class="calendar__title">Vue Calendar</h1>

      <div class="calendar__inner">
        <h2 class="calendar__month">
          {{ currentMonthName }} {{ currentYear }}
        </h2>
        <div class="calendar__days">
          <p v-for="day in days" :key="day">{{ day }}</p>
        </div>
        <div class="calendar__numbers">
          <p v-for="num in startDay()" :key="num"></p>
          <p v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">
            {{ num }}
          </p>
        </div>
        <div class="calendar__btns">
          <button @click="prev">Предыдущий</button>
          <button @click="next">Следующий</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        return this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        return this.currentMonth--;
      }
    },
    currentDateClass(num) {
        const calendarFullDate=new Date(this.currentYear, this.currentMonth, num).toDateString()
        const currentFullDate= new Date().toDateString()
        return  calendarFullDate === currentFullDate ? '--current-day' : ''
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
main {
  text-align: center;
}
.calendar__inner {
  width: 20%;
  margin: 0 auto;
}
.calendar__days {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
}
.calendar__days p {
  margin-bottom: 0;
  width: 14%;
  text-align: center;
}
.calendar__numbers {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.calendar__numbers p {
  font-size: 20px;
  width: 14%;
}
.--current-day {
  color: red;
  font-weight: bold;
}
</style>