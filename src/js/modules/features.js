const features = (featuresArray) => {

    function setFeatures(text) {
        const container = document.querySelector('.starter__features');
        container.textContent = text;
    }

    let indexArray = 0;
    let index = 0;
    let toggle = true;

    setInterval(() => {        
        if(toggle) index ++;
        else index --;

        let text = featuresArray[indexArray].slice(0, index);
        
        if(text.length >= featuresArray[indexArray].length) {
            toggle = false;
        }
        else if(text.length <= 0) {
            toggle = true;

            if(indexArray < featuresArray.length - 1) indexArray++;
            else indexArray = 0;
        }

        setFeatures(text);
        
    }, 200);
    
};

export default features;