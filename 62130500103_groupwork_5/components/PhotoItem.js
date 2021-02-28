app.component('task-list', {
    props: {
        task: Object,
    },

    template: `
        <img :src="task.img" class="w-52 h-64 rounded-lg mx-20 hover:scale-110 delay-150 motion-reduce:transform-none transform" @click="toggleDone(task.tag)">
        <p class="my-4 text-center text-xl text-blue-600">{{ task.content }}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mt-2 mb-8 mx-20" @click="like(task.tag)">Like</button>
        <span class="material-icons ml-12 text-blue-700 align-middle" v-show="task.done">thumb_up</span>`,

    methods: {
        like(tag) {
            this.$emit("like-done", tag);
        },
        toggleDone(tag){
            this.$emit("when-toggle", tag);
        }
    }
})