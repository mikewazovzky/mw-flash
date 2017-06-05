<template>
    <div v-show="show">
        <strong :class="alertType" v-text="body"></strong>
    </div>
</template>

<script>
const DEFAULT_DELAY = 3000;

export default {
    // name: 'Flash',
    props: ['data', 'events', 'delay'],
    data () {
        return {
            body: '',
            level: '',
            show: false
        }
    },

    computed: {
        alertType() {
            let availableLevels = ['success', 'info', 'warning', 'danger'];
            let level = 'success';

            if(availableLevels.indexOf(this.level) != -1) {
                level = this.level;
            }

            return ['alert', 'alert-' + level];
        }
    },

    created() {
        if(this.data) {
            this.flash(this.data);
        }

        if(this.events == 'on') {
            window.events.$on('flash', data => this.flash(data));
        }        
    },

    methods: {
        flash(data) {
            if (typeof data === 'object') {
                return this.display(data.message, data.level);
            }

            if (typeof data === 'string') {
                return this.display(data);
            }            

            return this.display('Unacceptable data type', 'danger');            
        },

        display(message, level = 'success') {
            this.body = message;
            this.level = level;
            this.show = true;   

            this.hide();
        },

        hide() {
            setTimeout( () => this.show = false, 
                this.delay ? this.delay : DEFAULT_DELAY
            );
        }
    }
}
</script>

<style lang="scss" scoped>
.alert {
    padding: 10px;
    position: fixed;
    right: 25px;
    bottom: 25px;
}
.alert-success {
    background-color: #55B4B0;
    color: #fff;
}

.alert-info {
    background-color: #4C6A92;
    color: #fff;
}

.alert-warning {
    background-color: #FED85D;
    color: #777;
}  

.alert-danger {
    background-color: #B93A32;
    color: #fff;
}  

</style>
