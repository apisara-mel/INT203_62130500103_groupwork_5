app.component('search-img', {
    props: {
        search: Object
    },

    template: 
    `<div class="flex justify-center w-full mb-8">
    <div v-if="search.hidden == false">
        <button v-on:click="search.hidden = !search.hidden" :class="{show: search.hidden == false}">
            <span class="material-icons p-1 rounded-sm ">
                search
            </span>
        </button>
    </div>

    <div v-else>
        <input
            class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded"
            type="text" placeholder="Please enter text for searching photos" v-model="search.text">
        <button class="ml-2 p-1 rounded-lg focus:outline-none bg-green-500" v-on:click="search.hidden = !search.hidden,search.text = '' ">Cancel</button>
    </div>
    </div>`,

methods:{
   
}
})