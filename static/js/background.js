// Set background image from data attribute
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const bgImage = body.getAttribute('data-bg-image');
    
    if (bgImage) {
        // Apply to html element for full viewport coverage
        const html = document.documentElement;
        html.style.backgroundImage = `url('${bgImage}')`;
        html.style.backgroundSize = 'cover';
        html.style.backgroundRepeat = 'no-repeat';
        html.style.backgroundAttachment = 'fixed';
        html.style.backgroundPosition = 'center';
    }
});
