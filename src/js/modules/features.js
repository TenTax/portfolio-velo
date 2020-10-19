const features = () => {
    const featuresArray = ['Web Designer', 'Web developer'];

    function setFeatures() {
        const container = document.querySelector('.starter__features');
        container.textContent = featuresArray[0];
    }

    setFeatures();
};

export default features;