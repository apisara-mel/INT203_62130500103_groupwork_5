const app = Vue.createApp({
    data() {
        return {
            tasks: [{
                    tag: '1',
                    img: 'img/1.jpg',
                    content: 'Pink Pelicans',
                    done: false,
                    show: false
                },
                {
                    tag: '2',
                    img: 'img/2.jpg',
                    content: 'France',
                    done: false,
                    show: false
                },
                {
                    tag: '3',
                    img: 'img/3.jpg',
                    content: 'Bali',
                    done: false,
                    show: false
                }
            ],
            search : {
                text: '',
                hidden: false, 
            },
           
            modal : {
               exit: false,
               imgExit: '',
            }

        
        }
    },

    methods: {
        toggleDone(tag) {
            for (let index = 0; index <= this.tasks.length; index++) {
                const element = this.tasks[index];
                if (element.tag == tag) {
                    this.modal.imgExit = element.img
                    this.modal.exit = !this.modal.exit;
                    break
                }
            }
        },
        exitPopup(tag) {
            this.modal.exit = !this.modal.exit;
        },

        like(tag) {
            for (let index = 0; index < this.tasks.length; index++) {
                const element = this.tasks[index];
                if (element.tag == tag) {
                    element.done = !element.done;
                    break
                }
            }
        }
    },

    computed: {
        countUndone() {
            return this.tasks.filter(t => t.done).length
        },

        searching() {
            return this.tasks.filter((showResult) => {
                console.log(showResult.content.toLowerCase().includes(this.search.text.toLowerCase()))
                return showResult.content.toLowerCase().includes(this.search.text.toLowerCase())
            })
        }
    }
})