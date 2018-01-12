<template>
    <div>
        <h5 class="mt-5">Your Latest Conversion</h5>
        <div class="alert alert-warning alert-dismissible fade show my-4" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <strong>Notice!</strong> You can save up to 100 conversations, which will be stored for 30 days!
        </div>
        <table class="table table-bordered text-lg-center">
            <thead>
                <tr>
                    <th>Date</th>
                    <th colspan="3">Conversion <span class="badge badge-danger float-right">Reset</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19/07/2017 - 10:58:59</td>
                    <td>123.00 USD</td>
                    <td>=</td>
                    <td>154.84 CAD</td>
                </tr>
                <tr>
                    <td>19/07/2017 - 10:58:59</td>
                    <td>123.00 USD</td>
                    <td>=</td>
                    <td>154.84 CAD</td>
                </tr>
                <tr>
                    <td>19/07/2017 - 10:58:59</td>
                    <td>123.00 USD</td>
                    <td>=</td>
                    <td>154.84 CAD</td>
                </tr>
                <tr>
                    <td>19/07/2017 - 10:58:59</td>
                    <td>123.00 USD</td>
                    <td>=</td>
                    <td>154.84 CAD</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
	export default {
    }
</script>
<style scoped>
/* atribultul scope se pune doar daca vrei ca stylul de aici sa se aplice doar acestei coponente*/

th:first-of-type {
    width:190px;
}

td:nth-child(3) {
    width: 20px;
}

</style>
