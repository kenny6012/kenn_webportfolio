<template>
<div class="sal_cont">
    <div class="sal_text">{{ sal }}</div> <br><br>
    <div class="sal_text">{{ currenTime }}</div> <br><br>
    <div class="sal_text">{{ startTime }}</div> <br><br>
    <div class="sal_text">{{ durationSec }}</div> <br><br>
</div>
</template>

<script>
export default {
data() {
    return {
        sal: 0,
        currenTime: "",
        startTime: "",
        durationSec: "",
    }
},
created() {
    // const everySecond = setInterval(this.seconds(), 1000);

    const everySecond = setInterval(() => {

        // Current Time
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString();
        this.currenTime = currentTime;

        // End Time
        const endTime = new Date();
        endTime.setHours(1, 0, 0, 0); // 1AM

        // Start Time
        const targetTime = new Date();
        targetTime.setHours(16, 0, 0, 0); // 4PM

        if(currentDate != endTime) {
            // If current time is not 1AM
            this.startTime = targetTime.toLocaleTimeString();
            const durationInMillis = currentDate - targetTime;
            const durationSeconds = Math.floor(durationInMillis / 1000);
            this.durationSec = durationSeconds;

            // Compute salary per second
            let net = (81950 / 30) ; // per day
            let valPerSecond = net / 28800; // 28800 seconds is 8 hours
            this.sal = valPerSecond * durationSeconds;
            this.sal = this.sal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, });
        }
        else if (currentDate == endTime) {
            // Stop if time is 1AM
            clearInterval(everySecond);
        }

    }, 1000); // Update every second
    
    
    // setTimeout(() => {
    //     clearInterval(everySecond);
    // }, 28800); // Stop timer after 8 hrs
    
},
methods: {
}
}
</script>

<style lang="scss" scoped>
.sal_text {
    color: white;
}
</style>