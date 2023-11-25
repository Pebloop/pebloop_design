<script lang="ts">

    export let icon: string;
    export let color: string = '';
    export let fill: boolean = false;
    export let size: string = 'larger';
    export let weight: number = 100;
    export let grade: number = 0;
    export let opticalSize: number = 24;
    export let style: string = '';

    $: fillValue = fill ? 1 : 0;

    function getColorStyle(color: string) {
        if (color) {
            return "color";
        } else {
            return "default-color";
        }
    }

    function getStyle(style: string) {
        switch (style) {
            case 'outlined':
                return 'material-symbols-outlined';
            case 'rounded':
                return 'material-symbols-rounded';
            case 'sharp':
                return 'material-symbols-sharp';
            default:
                return 'material-symbols-outlined';
        }
    }

    $: styleClass = getStyle(style);
    $: colorClass = getColorStyle(color);
</script>

<span class="{styleClass} {colorClass}"
      style="--color: {color}; --size: {size}; --weight: {weight}; --fill: {fillValue}; --grade: {grade}; --opticalSize: {opticalSize};">
    {icon}
</span>

<style lang="postcss">

    .material-symbols-outlined {
        font-size: var(--size);
        font-variation-settings:
                'FILL' var(--fill),
                'wght' var(--weight),
                'GRAD' var(--grade),
                'opsz' var(--opticalSize);
    }

    .material-symbols-rounded {
        font-size: var(--size);
        font-variation-settings:
                'FILL' var(--fill),
                'wght' var(--weight),
                'GRAD' var(--grade),
                'opsz' var(--opticalSize);
    }

    .material-symbols-sharp {
        font-size: var(--size);
        font-variation-settings:
                'FILL' var(--fill),
                'wght' var(--weight),
                'GRAD' var(--grade),
                'opsz' var(--opticalSize);
    }

    .default-color {
        @apply text-darkMode dark:text-lightmode;
    }

    .color {
        color: var(--color);
    }
</style>