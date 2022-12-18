<template>
    <div class="container">
        <br>
        <h5>Personagens Star Wars:</h5>
        <div class="">

            <div class="col-md-6">
                <div class="card shadow mt-4 px-3">                    
                    <input 
                    class="form-control form-control-sm mt-3" 
                    type="text" 
                    placeholder="Filtre por nome:" 
                    aria-label=".form-control-sm example"
                    v-model="search"
                    >
                    <hr>

                    <div 
                    class="row listagem-peoples">
                        <CardSwapi 
                        v-for="people in peoplesFilteredComputed"
                        :key="people.name"
                        @click="selectPeople(people)"
                        :name=people.name
                        :height=people.height
                        :mass=people.mass
                        :birth_year=people.birth_year
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import CardSwapi from '../components/CardSwapi.vue';


let peoples = reactive(ref());
let peopleSelected = ref(null);
let search = ref('');
let loading = ref(true);
let loadingSelectPeople = ref(true);

const peoplesFilteredComputed = computed(()=>{
    if(peoples.value && search.value){
        return peoples.value.filter(people => {
            return people.name.toLowerCase().includes(search.value.toLowerCase());
        });
    }else{
        return peoples.value;
    }
})

async function getPeoples() {
    await fetch('https://swapi.dev/api/people/')
        .then(res=>res.json())
        .then(response => {
            peoples.value = response.results;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            loading.value = false;
        });
}

function selectPeople(people) {
    loadingSelectPeople.value = true;
    fetch(people.url)
        .then(res=>res.json())
        .then(response => {
            peopleSelected.value = response;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            loadingSelectPeople.value = false;
        });
}

onMounted(() => {
    getPeoples();    
});

</script>

<style scoped>
    
    h5 {
        color:rgb(6, 6, 235);
    }
</style>