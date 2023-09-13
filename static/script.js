document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('fake-video').classList.remove('hidden');
        document.querySelector('.loading-container').classList.add('hidden');
    }, 5000); // Simulating a 5-second "loading" period
});
