<script setup>
defineProps(['name', 'height', 'mass', 'birth_year']);

</script>

<template>
    <div class="card card-people">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Altura</th>
                    <th>Peso:</th>
                    <th>Nascimento:</th>
                </tr>
            </thead>
            <tbody>
                <tr class="active">
                    <td>{{ name.charAt(0).toUpperCase() + name.substr(1) }}</td>
                    <td>{{ height.charAt(0).toUpperCase() + height.substr(1) }}</td>
                    <td>{{ mass.charAt(0).toUpperCase() + mass.substr(1) }}</td>
                    <td>{{ birth_year.charAt(0).toUpperCase() + birth_year.substr(1) }}</td>
                </tr>
            </tbody>
            <br>
        </table>
    </div>
</template>


<style scoped>

</style>