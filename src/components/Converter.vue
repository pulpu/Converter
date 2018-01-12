<template>
    <div class="bg-light rounded-bottom">
        <div class="text-lg-center p-5">
            <h1 class="m-5 font-weight-bold">
                <span>123.00</span><span>USD</span>=<span>154.84</span><span>CAD</span>
            </h1>
            <div class="input-group mb-3">
                <input type="number" class="form-control" placeholder="Value">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">USD</span>
                </div>
            </div>
            <form class="form-inline">
                <select class="custom-select col-lg-5">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <span class="col-lg-2 text-center">to</span>
                <select class="custom-select col-lg-5">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
            <div class="col-lg-12 p-5">
                <button type="button" class="btn btn-success d-block mx-auto">Success</button>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
  }
</script>
<style scoped>

.custom-select {
  background: #fff;
}

/* remove spinner on input of number */
input[type='number'] {
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>
