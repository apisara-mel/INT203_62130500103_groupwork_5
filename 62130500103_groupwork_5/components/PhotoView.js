app.component('photo-view', {
    props: {
        modal:Object
    },

    template: 
    `<div v-if="modal.exit" class="mt-10 fixed w-screen">
    <div class="bg-blue-200 bg-opacity-95 px-20 flex-row">
        <div class="flex justify-center">
            <img class="h-96 m-8 border-4 border-red-900 rounded-lg object-scale-down" :src="modal.imgExit">
        </div>
        <div class="flex justify-center">
            <div class="">
                <button @click="exitPopup" class="hover:bg-red-600 bg-red-500 mb-8 text-white rounded px-2">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>`,

    methods: {
        exitPopup(){
          this.$emit('exit-popup');  
        }
    }
})