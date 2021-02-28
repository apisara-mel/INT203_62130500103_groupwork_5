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
            text: '',
            hidden: false,
            exit: false,
            imgExit: '',

        }
    },

    methods: {
        toggleDone(tag) {
            for (let index = 0; index <= this.tasks.length; index++) {
                const element = this.tasks[index];
                if (element.tag == tag) {
                    this.imgExit = element.img
                    this.exit = !this.exit;
                    break
                }
            }
        },
        exitPopup(tag) {
            this.exit = !this.exit;
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
            return this.tasks.filter(showResult => {
                return showResult.content.toLowerCase().includes(this.text.toLowerCase())
            })

        }
    }
})