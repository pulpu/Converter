<template>
    <div>
        <h5 class="my-5">Your Latest Conversion</h5>
        <div class="alert alert-warning show" role="alert"  v-show="showAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeAlert">
                <span aria-hidden="true">×</span>
            </button>
            <strong>{{alertTitle}}</strong> {{alert}}
        </div>
        <table class="table table-bordered text-lg-center mt-3">
            <thead>
                <tr>
                    <th>Date</th>
                    <th colspan="3">Conversion <span class="badge badge-danger float-right" @click="reset">Reset</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in latersConversion">
                    <td>{{x.onDate}}</td>
                    <td>{{x.forConvert}}</td>
                    <td>=</td>
                    <td>{{x.conversion}}</td>
                </tr>
            </tbody>
        </table>      
    </div>
</template>
<script>
    import { eventBus } from '../main';
    import cookie from 'json-cookie';

	export default {
        data() {
            return {
                latersConversion : [],
                showAlert: true,
                alert: "You can save up to 100 conversions, which will be stored for 30 days!",
                alertTitle: "Notice!"      
          }
        },
        created(){
            eventBus.$on('latestConversion', (latest)=> {
                this.latersConversion = latest;
            }),
            eventBus.$on('alert', (latest)=> {
                this.alert = latest[0];
                this.alertTitle = latest[1];
                this.showAlert = true;
            })
        },
        methods:{
            reset(){                
                this.latersConversion = [];
                cookie.delete('Latest');
                eventBus.$emit('reset', this.latersConversion);
            },
            closeAlert(){
                this.showAlert = false
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                    return this.latersConversion = cookie.get('Latest')                          
            })
        }

    }
</script>
<style scoped>

    td:first-of-type {
        max-width:60px;
    }

    td:nth-child(3) {
        width: 35px;
    }

    .alert {
        margin-bottom: 0;
    }

    .badge-danger {
        cursor: pointer;
    }

</style>
