<template>
    <div class="bg-light rounded-bottom">
        <div class="text-lg-center p-5">
            <h1 class="m-5 font-weight-bold">
                <span>{{showResult}}</span>
            </h1>
            <div class="input-group mb-3">
                <input type="number" class="form-control text-right" placeholder="Value" v-model="value">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">{{currency}}</span>
                </div>
            </div>
            <form class="form-inline">
                <select class="custom-select col-lg-5" id="currency" @click="changeCurrency">
                    <option selected v-bind:value="currency[0]" v-for="currency in currencyArray">{{currency[0] +' - '+ currency[1]}}</option>
                </select>
                <span class="col-lg-2 text-center">to</span>
                <select class="custom-select col-lg-5" id="toCurrency" @click="changeCurrency">
                    <option selected v-bind:value="currency[0]" v-for="currency in currencyArray">{{currency[0] +' - '+ currency[1]}}</option>
                </select>
            </form>
            <div class="col-lg-12 p-5">
                <button type="button" class="btn btn-success d-block mx-auto" @click="convert">Convert</button>
            </div>
        </div>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  import cookie from 'json-cookie';

	export default {
    data() {
      return {
        rate: 1,
        currency: "EUR",
        toCurrency: "EUR",
        value : "",
        showResult: "",
        total : "",
        newCookie: [],
        alert: "You reach your 100 conversions limit!",
        alertTitle: "Warning!",
        currencyArray: [['USD', 'United State Dollar'],['CAD','Canadian Dollar'],['AUD','Australian Dollar'],['BGN',' Bulgarian Lev'],['BRL', 'Brazilian Real'],['CHF','Swiss Franc'],['CNY', 'Chinese Yuan Renminbi'],['RON','Romanian Leu'],['EUR', 'Euro']]
        }
    },
    created(){
        eventBus.$on('reset', (latest)=> {
            this.newCookie = latest;
        })
    },
    methods:{
      changeCurrency(){
        this.currency = document.getElementById("currency").value;
        this.toCurrency = document.getElementById("toCurrency").value;
      },
      setCookie(){

        if(this.value <= 0 ) {
          return
        }

        let vCookie = {
                'date':[ 
                    {'conversion': this.total,'forConvert':this.value, 'onDate': this.dateToYMD(new Date())},                      
                ]
            };

        let newVCookie = {'conversion': this.total,'forConvert':this.value, 'onDate': this.dateToYMD(new Date())};

        this.newCookie.length < 100 ? this.newCookie.unshift(newVCookie) : this.newCookie;  

        this.newCookie.length < 0 
            ? cookie.set('Latest', vCookie, {expires: 30})
            : this.newCookie.length < 100
                ? cookie.set('Latest', this.newCookie, {expires: 30})
                : eventBus.$emit('alert', [this.alert,this.alertTitle]);

          eventBus.$emit('latestConversion', this.newCookie);
      },
      dateToYMD(date) {
        let d = new Date().getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
            hours = hours % 12;
            hours = hours ? hours : 12; 
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            seconds = seconds < 10 ? '0'+seconds : seconds;
        let strTime = hours + ':' + minutes + ':' + seconds;

        return '' + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m) + '/' + y + ' - ' +  strTime;
      },
      convert() {
        this.$http.get('https://api.fixer.io/latest?base=' + this.currency + '&symbols=' + this.toCurrency) 
          .then(response=> {
            return response.json();
          })
          .then(data=> {
            return this.rate = (+(Object.values(data['rates']).join('')));
          })
          .then(()=> { 
            this.total = this.value * this.rate;
            this.total = this.total.toFixed(2);

             return this.showResult =`${this.value}${' '}${this.currency}${'='}${this.total}${' '}${this.toCurrency}`              
          })
          .then(()=> {
            this.setCookie();
          })
      }
    },
    mounted: function () {
        this.$nextTick(function () {
             !Object.keys(cookie.get('Latest')).length > 0 
                   ? this.newCookie
                   : this.newCookie = cookie.get('Latest').filter((el)=> {
                      let timestamp = new Date().getTime() + (30)
                       return timestamp < new Date(el['onDate'].match(/(([1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/[12]\d{3})/g).join(""))  
                   })

        })
      }
  }

</script>


<style scoped>

  .custom-select {
    background: #fff;
  }


  input[type='number'] {
      -moz-appearance:textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

</style>
