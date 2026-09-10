import 'dotenv/config';

class CustomReporter {
    async onEnd(result) {
        console.log(`All tests completed: ${result.status}`);

        try {
            const response = await fetch(process.env.REPORTER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: result.status,
                    message: `Playwright tests completed with status: ${result.status}`
                })
            });

            console.log(`Webhook response: ${response.status}`);

            if (!response.ok) {
                throw new Error(`Webhook returned HTTP ${response.status}`);
            }

            console.log('Notification sent successfully.');
        } catch (error) {
            console.log('Notification failed:', error.message);
        }
    }
}

export default CustomReporter;