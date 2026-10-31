
// ----------------------------------
//  cod property-hero

const counters = [
    { id: "counter1", value: 15000, suffix: "+" },
    { id: "counter2", value: 98, suffix: "%" },
    { id: "counter3", value: 500, suffix: "+" },
    { id: "counter4", value: 25, suffix: "" }
];

counters.forEach(function(counter) {

    const animation = new countUp.CountUp(
        counter.id,
        counter.value,
        {
            startVal: 0,
            duration: 3,
            useEasing: true,
            separator: ",",
            suffix: counter.suffix,
            autoAnimate: true,
            autoAnimateOnce: false
        }
    );

    if (animation.error) {
        console.error(animation.error);
    }

});

// ----------------------------------
// ----------------------------------