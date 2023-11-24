<script lang="ts">
    export let variant = 'primary'
    export let label = 'button'

    function getVariant() {
        switch (variant) {
            case 'primary':
                return 'primary'
            case 'filled':
                return 'filled'
            case 'outlined':
                return 'outlined'
            case 'text':
                return 'text'
            default:
                return 'primary'
        }
    }

</script>

<button class="{getVariant()}">
    {label}
</button>

<style lang="postcss">

    button {
        padding: 0.25em 1em;
        border-radius: 99999px;
        min-height: 2em;
    }

    .primary {
        @apply bg-primary text-white;
    }

    .primary:hover {
        @apply bg-primary-dark;
    }

    .primary:active {
        @apply bg-primary-darker;
    }

    .outlined {
        @apply border border-primary text-primary;
    }

    .outlined:hover {
        @apply bg-primary text-white;
    }

    .outlined:active {
        @apply bg-primary-dark;
    }

    .filled {
        @apply bg-lightmode_elevated dark:bg-darkmode_elevated text-black dark:text-white;
    }

    .filled:hover {
        @apply bg-lightmode_elevated-dark dark:bg-darkmode_elevated-light;
    }

    .filled:active {
        @apply bg-lightmode_elevated-darker dark:bg-darkmode_elevated-lighter;
    }

    .text {
        @apply text-primary;
    }

    .text:hover {
        @apply bg-lightmode-dark dark:bg-darkMode-light;
    }

    .text:active {
        @apply bg-lightmode-darker dark:bg-darkMode-lighter;
    }

</style>