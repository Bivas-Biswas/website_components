// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',
    top: 2,
    left: 3,// or 'monolith', or 'nano'
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (...args) => {
    let color = args[0].toRGBA()
    console.log(color[0].toFixed(0))
    document.querySelector('.showcase').style.background = `rgba(${color[0].toFixed(2)},${color[1].toFixed(2)},${color[2].toFixed(2)},${color[3].toFixed(2)})`
    document.querySelector('.showcase').style.background = `rgba(${color[0].toFixed(2)},${color[1].toFixed(2)},${color[2].toFixed(2)},${color[3].toFixed(2)})`

})