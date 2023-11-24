<script lang="ts">
    export let variant = 'primary'
    export let label = 'button'

    function getVariant() {
        switch (variant) {
            case 'primary':
                return 'primary'
            case 'outlined':
                return 'outlined'
            default:
                return 'primary'
        }
    }

</script>

<button class={getVariant()}>
    {label}
</button>

<style lang="postcss">

    .primary {
        background-color: var(--color-primary);
        color: #fff;
        padding: 0.25em 1em;
        border-radius: 99999px;
        min-height: 2em;
    }

    .primary:hover {
        background-color: #1565c0;
    }

</style>