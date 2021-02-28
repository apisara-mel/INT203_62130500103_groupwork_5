app.component('task-list', {
    props:{
        task: Object,
    },

    templete:
    `<div class="flex justify-center grid-cols-3 font-mono ">
        <div v-if="searching.length !== 0" v-for="(task,index) in searching" :class="{done: task.done}" :key="task.tag">
            <img :src="task.img"
                class="w-52 h-64 rounded-lg mx-20 hover:scale-110 delay-150 motion-reduce:transform-none transform"
                @click="toggleDone(task.tag)">
            <p class="my-4 text-center text-xl text-blue-600">{{ task.content }}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mt-2 mb-8 mx-20"
                @click="like(task.tag)">
                Like
            </button>
            <span class="material-icons ml-12 text-blue-700 align-middle" v-show="task.done">
                thumb_up
            </span>
        </div>
        <div v-else>
            <h2 class="px-12 py-8 text-2xl font-mono text-gray-800 bg-white rounded-lg">No Photos.</h2>
        </div>`,

        methods: {
            like(tag){
                this.$emit("like", tag);
            }
        }
})